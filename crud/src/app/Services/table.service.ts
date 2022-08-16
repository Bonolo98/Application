import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

 
@Injectable({
  providedIn: 'root'
})
export class TableService {
 
  editID :any = localStorage.getItem('editID')
  baseUrl = environment.baseUrl
  id:any = localStorage.getItem('tut')
  idreal:any;

  constructor( private http :HttpClient) { }





  


  getTutorials(){
    return this.http.get(`${this.baseUrl}getAll`);
  }


 getOneTutorial(tutorial_id:any){
  return this.http.get(`${this.baseUrl}get/${tutorial_id}`)
  
 }



 createTutorial(data: any) {
  return this.http.post(`${this.baseUrl}create`, data,{responseType: 'json'});
}


updateTutorial(data:any): Observable<any>
{
  return this.http.put(`${this.baseUrl}update/${this.editID}`, data,{responseType: 'json'})
  console.log("Update Successful")
 }



 deleteTutorial(tutorial_id:any){
   console.log("Delete Successful")
  return this.http.delete(`${this.baseUrl}delete/${tutorial_id}`, {responseType:'text'});
  
}


//  deleteTutorial(id:any){
//   return this.http.delete(`${this.baseUrl}delete/:id`)
//  }

//  deleteTutorial(_id: any){
//   return this.http.delete(`${this.baseUrl}delete/${this.id}`)
//   console.log(this.id)
//  }


}




