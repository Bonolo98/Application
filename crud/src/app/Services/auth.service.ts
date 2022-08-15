import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

//LOCAL STORAGE FOR TOKEN
const token = localStorage.getItem('access_token');
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'token': `${token}` })
};


// //
// email: String;
// password: String;


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl$ = environment.baseUrl;
  isLoggedIn: boolean | undefined;

  constructor(private http: HttpClient,private router: Router) { }


//LOGIN TO AN EXISTING ACCOUNT FUNCTION
login(users : any): Observable<any> {
  return this.http.post(`${this.baseUrl$}login`, users)
}


//REGISTER A USER FUNCTION
  register(users : any) {
    return this.http.post(`${this.baseUrl$}register`, users);
  }

  getProfile(id:any){
    return this.http.get(`${this.baseUrl$}profile/${id}`,httpOptions)
  }
}


//LOGOUT FUNCTION
// Logout() {
//   let removeToken = localStorage.removeItem('access_token');
//   if (removeToken == null) {
//     this.router.navigate(['login']);
//   }
// }

// get isLoggedIn(): boolean {
//   let authToken = localStorage.getItem('access_token');
//   return authToken !== null ? true : false;
// }


//TOKEN HERE
//   getToken() {
//   return localStorage.getItem('access_token');
// }

// get isLoggedIn(): boolean {
//   let authToken = localStorage.getItem('access_token');
//   return authToken !== null ? true : false;
// }



// GET USER PROFILE



// Userprofile(){
//   returnthis.http.get(`${this.baseUrl$}profile`, httpOptions)
// }






