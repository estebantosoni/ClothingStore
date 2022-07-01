
/*
Se usa para evitar que los usuarios no autenticados accedan a rutas restringidas.
Lo hace mediante la implementación de la interfaz CanActivate que permite que la protección
    decida si una ruta se puede activar con el método canActivate().
Si el método devuelve verdadero, la ruta se activa (se le permite continuar);
    de lo contrario, si el método devuelve falso, la ruta se bloquea.
*/

/*
Usa el servicio de autenticación para verificar si el usuario ha iniciado sesión,
    si lo ha hecho, devuelve verdadero desde el método canActivate (), de lo contrario, 
    devuelve falso y redirige al usuario a la página de inicio de sesión.
*/

/*
Los Angular route guards se adjuntan a las rutas en la configuración del enrutador,
    este protector de autenticación se usa en app-routing.module.ts para proteger la ruta
    de la página de inicio.
*/

import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from '../services/authentication.service';                  //NO OLVIDARSE DE CREAR ESA CARPETA

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
         private router: Router,
         private authenticationService: AuthenticationService
     ) { }

     canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
         const currentUser = this.authenticationService.currentUserValue;
         if (currentUser) {
             // logged in so return true
             return true;
         }

         // not logged in so redirect to login page with the return url
         this.router.navigate(['/user'], { queryParams: { returnUrl: state.url } });       // /login
         return false;
     }
}