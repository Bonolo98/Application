import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TableService {

  baseUrl = environment.baseUrl

  constructor( private http :HttpClient) { }

  getTutorials()
  {
    return this.http.get(`${this.baseUrl}getAll`);
  }


 getOneTutorial(id:any)
 {
  return this.http.get(`${this.baseUrl}get`)
 }



 createTutorial(data: any) {
  return this.http.post(`${this.baseUrl}create`, data,{responseType: 'json'});
}



}




