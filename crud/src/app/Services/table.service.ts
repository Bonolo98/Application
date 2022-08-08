import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

 
@Injectable({
  providedIn: 'root'
})
export class TableService {
 
  baseUrl = environment.baseUrl
  id:any = localStorage.getItem('tut')
  idreal:any;

  constructor( private http :HttpClient) { }





  


  getTutorials()
  {
    return this.http.get(`${this.baseUrl}getAll`);
  }


 getOneTutorial(id:any){
  return this.http.get(`${this.baseUrl}get/:id`)
 }



 createTutorial(data: any) {
  return this.http.post(`${this.baseUrl}create`, data,{responseType: 'json'});
}

updateTutorial(_id:any){
  return this.http.get(`${this.baseUrl}update/:id`)
 }

//  deleteTutorial(id:any){
//   return this.http.delete(`${this.baseUrl}delete/:id`)
//  }

//  deleteTutorial(_id: any){
//   return this.http.delete(`${this.baseUrl}delete/${this.id}`)
//   console.log(this.id)
//  }



 deleteTutorial(tutorial_id:any){
   console.log("swesrdtfyguhkil")
  return this.http.delete(`${this.baseUrl}delete/${tutorial_id}`, {responseType:'text'});
  
}

}




