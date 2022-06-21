/*

El interceptor JWT intercepta las solicitudes http de la aplicación para agregar un token
    de autenticación JWT al encabezado de autorización si el usuario inició sesión y
    la solicitud es para la URL de API de la aplicación (environment.apiUrl).

Se implementa usando la clase HttpInterceptor incluida en HttpClientModule,
    al extender la clase HttpInterceptor puede crear un interceptor personalizado
    para modificar las solicitudes http antes de que se envíen al servidor.

Los interceptores Http se agregan a la canalización de solicitudes en la sección de
    proveedores del archivo app.module.ts.

*/

import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { AuthenticationService } from '../services/authentication.service';              //CREAR CARPETA SERVICE

@Injectable()
export class JwtInterceptor {   //implements HttpInterceptor
/*
    constructor(private authenticationService: AuthenticationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add auth header with jwt if user is logged in and request is to the api url
        const currentUser = this.authenticationService.currentUserValue;
        const isLoggedIn = currentUser && currentUser.getToken();
        const isApiUrl = request.url.startsWith(environment.backurl);       //CAMBIAR A BACKURL
        if (isLoggedIn && isApiUrl) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.getToken()}`
                }
            });
        }

        return next.handle(request);
    }

*/
}