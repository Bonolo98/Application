import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  name: any 
  email: any
  profile:any
  totalNumber: number = 0
  isLoggedIn: boolean = true
  id: any;

  constructor( 
    private router: Router,
    public auth:AuthService) { }

  ngOnInit(): void {

    this.auth.getProfile(6).subscribe({
      next: (data:any) => {
        console.log(data)
      }
    })




  }

  // user(){
  //    this.auth.getProfile(6).subscribe({next:data => {
  //     this.profile = data
  //     this.id = this.profile.id
  //     this.name = this.profile.name
  //     this.email = this.profile.email
  //     this.name =  this.transform(this.name)
  //   }})
  // }

  transform(value:string): string {
    let first = value.substr(0,1).toUpperCase();
    return first + value.substr(1); 
  }
}
