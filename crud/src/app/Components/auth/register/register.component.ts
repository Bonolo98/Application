import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
// import {MustMath} from 'src/app/utils/mustmatch';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  Form = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
  
  });
 

  constructor(private formBuilder: FormBuilder, 
    public authService : AuthService, 
    private router:Router) { }

  ngOnInit(): void {

    // this.Form = this.formBuilder.group({
    //   name: ['', Validators.required],
    //   email: ['', [Validators.required, Validators.email]],
    //   password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(40)]],
    //   confirmpassword: ['', Validators.required],
    // },
    // {validator:MustMath ("password","confirmpassword")
    // ,}
    // );
  }

}

