/*

Se utiliza para iniciar y cerrar sesión en la aplicación Angular, notifica a otros 
    componentes cuando el usuario inicia y cierra sesión, y permite el acceso al
    usuario actualmente conectado.

Los sujetos y observables de RxJS se utilizan para almacenar el objeto de usuario actual
    y notificar a otros componentes cuando el usuario inicia y cierra sesión en la aplicación.
Los componentes de angular pueden suscribirse a la propiedad public currentUser:Observable
    para recibir notificaciones de cambios, y las notificaciones se envían cuando se llama
    al método this.currentUserSubject.next() en los métodos login() y logout(),
    pasando el argumento a cada suscriptor.
El RxJS BehaviorSubject es un tipo especial de Sujeto que mantiene el valor actual
    y lo emite a cualquier suscriptor nuevo tan pronto como se suscribe, mientras que
    los Sujetos normales no almacenan el valor actual y solo emiten valores que se
    publican después de crear una suscripción.

El método login() envía las credenciales de usuario a la API a través de una
    solicitud HTTP POST para la autenticación.
Si tiene éxito, el objeto de usuario que incluye un token de autenticación JWT
    se almacena en localStorage para mantener al usuario conectado entre actualizaciones
    de página.
Luego, el objeto de usuario se publica para todos los suscriptores con la llamada a
    this.currentUserSubject.next(user);.

El constructor() del servicio inicializa currentUserSubject con el objeto currentUser
    de localStorage, lo que permite al usuario permanecer conectado entre actualizaciones
    de página o después de cerrar el navegador.
La propiedad public currentUser luego se establece en this.currentUserSubject.asObservable();
    lo que permite que otros componentes se suscriban a currentUser Observable
    pero no les permite publicar en currentUserSubject, por lo que solo se puede iniciar
    y cerrar sesión en la aplicación a través del servicio de autenticación.

El captador currentUserValue permite que otros componentes obtengan fácilmente el valor
    del usuario conectado actualmente sin tener que suscribirse a currentUser Observable.

El método logout() elimina el objeto de usuario actual del almacenamiento local
    y publica un valor nulo en currentUserSubject para notificar a todos los suscriptores
    que el usuario ha cerrado sesión.

*/

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    
    private currentUserSubject: BehaviorSubject<User|null>;
    public currentUser: Observable<User|null>;
    private usrLogged:User|null;

    constructor(private http: HttpClient) {
        const seval = localStorage.getItem('currentUser')!;     //le digo q no va a ser null, PERO OJO, porque el user puede ser null y no estar en localstorage, y tal vez necesite q no sea null para mantener el log
        this.currentUserSubject = new BehaviorSubject<User|null>(JSON.parse(seval));
        this.currentUser = this.currentUserSubject.asObservable();
        this.usrLogged = this.currentUserValue;
    }

    public get currentUserValue():User|null {                   //lo accedo como propiedad en vez de metodo
        return this.currentUserSubject.value;
    }

    public getUsrLogged():User|null{
        return this.usrLogged;
    }

    public setUsrLogged(logged:User):void{
        this.usrLogged = logged;
    }

    login(username: string, password: string):Observable<any>{
        return this.http.post<any>(`${environment.backurl}/api/auth/signin`, { username, password })
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                return user;
            }));
    }

    register(username:string,email:string|undefined,password:string,rol:string|undefined):Observable<any>{
        return this.http.post<any>(`${environment.backurl}/api/auth/signup`, { username, email, password, rol });
    }

    logout():void{
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
        this.usrLogged = null;
    }
}