import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

//LOCAL STORAGE
const token = localStorage.getItem('access_token');
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'token': `${token}` })
};


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl$ = environment.baseUrl;

  constructor(private http: HttpClient,private router: Router) { }


//LOGIN FUNCTION
login(users : any): Observable<any> {
  return this.http.post(`${this.baseUrl$}login`, users)
}


//REGISTER FUNCTION
  register(users : any) {
    return this.http.post(`${this.baseUrl$}register`, users);
  }
}

//TOKEN HERE
//   getToken() {
//   return localStorage.getItem('access_token');
// }

// get isLoggedIn(): boolean {
//   let authToken = localStorage.getItem('access_token');
//   return authToken !== null ? true : false;
// }



//GET USER PROFILE

// getUserProfile(){
//   return this.http.get(`${this.baseUrl$}profile`,httpOptions)
// }






