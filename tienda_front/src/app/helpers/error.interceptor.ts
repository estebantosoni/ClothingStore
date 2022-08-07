/*

LINK DE AYUDA: https://medium.com/@nicowernli/angular-captura-todos-los-errores-de-httpclient-mediante-un-httpinterceptor-2cead03bb654

El error interceptor intercepta las respuestas http de la API para verificar si hubo algún
    error. Puede servir para hacer un mejor seguimiento de lo que pasa entre la aplicacion
    y el servidor.

Si hay una respuesta 401 no autorizada, el usuario se desconecta automáticamente
    de la aplicación, todos los demás errores se vuelven a enviar al servicio de llamadas
    para que se pueda mostrar una alerta con el error en la pantalla.

Se implementa usando la clase HttpInterceptor incluida en HttpClientModule,
    al extender la clase HttpInterceptor puede crear un interceptor personalizado para 
    capturar todas las respuestas de error del servidor en una sola ubicación.

Los interceptores Http se agregan a la canalización de solicitudes en la sección de
    proveedores del archivo app.module.ts.
*/

import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(private authenticationService: AuthenticationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.authenticationService.logout();
                location.reload();  //(true) pero tira error
            }

            const error = err.error.message || err.statusText;
            return throwError(error);
            //return throwError(() => new Error(error));
        }))
    }

}