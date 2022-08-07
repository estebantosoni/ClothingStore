/*

LINK DE AYUDA: https://medium.com/@insomniocode/angular-autenticación-usando-interceptors-a26c167270f4

El interceptor JWT intercepta las solicitudes http de la aplicación para agregar un token
    de autenticación JWT al encabezado de autorización si el usuario inició sesión y
    la solicitud es para la URL de API de la aplicación (environment.apiUrl).

En otras palabras, un interceptor inspecciona/modifica las peticiones (tanto lo que va al servidor
    como lo que vuelve del servidor)

Se implementa usando la clase HttpInterceptor incluida en HttpClientModule,
    al extender la clase HttpInterceptor puede crear un interceptor personalizado
    para modificar las solicitudes http antes de que se envíen al servidor.

Los interceptores Http se agregan a la canalización de solicitudes en la sección de
    proveedores del archivo app.module.ts.

*/

import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

import { environment } from 'src/environments/environment';
import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    constructor(private authenticationService: AuthenticationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add auth header with jwt if user is logged in and request is to the api url
        const currentUser = this.authenticationService.currentUserValue;
        const isLoggedIn = currentUser && currentUser.getToken();
        const isApiUrl = request.url.startsWith(environment.backurl);
        if (isLoggedIn && isApiUrl) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.getToken()}`
                }
            });
        }

        return next.handle(request);

        /*Otra cosa que podemos hacer es redirigir al usuario a la pagina de login
            cuando el token haya expirado o no tenga un token valido
        Si detectamos un status 401, hacemos una redireccion, y para eso ampliamos
            el handle que se retorna previamente
        */

        /*
        return next.handle(request).pipe(
            catchError((err: HttpErrorResponse) => {
                if(err.status === 401){
                    this.router.navigateByUrl('/user/1');   //agregar 'private router: Router' en el constructor
                }
                return throwError(err);
            })
        );
        */
    }


}