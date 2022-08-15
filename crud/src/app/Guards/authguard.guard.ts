// import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
// import { Observable } from 'rxjs';
// import { AuthService } from '../Services/auth.service';
// AuthService

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthguardGuard implements CanActivate {
//   constructor(
//     public authService: AuthService,
//     public router: Router
//   ) { }



//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//       if (this.authService.isLoggedIn !== true) {
//         window.alert("Access not allowed!/ Please Login or create account first");
//         this.router.navigate(['table'])
//       }

//     return true;
//   }
  
// }
