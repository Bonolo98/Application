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

  //=================properties===================
  registerForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    ConfirmPassword: new FormControl(''),
  
  })
  path: any;
  Form!: FormGroup;




  submitted = false;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

 
//===============methods===================

register(){
  let user = {
    name:this.registerForm.value.email,
    email:this.registerForm.value.email,
    password:this.registerForm.value.password,
    ConfirmPassword:this.registerForm.value.ConfirmPassword
  }

  console.table(user)


  this.authService.register(user).subscribe((my_data)=>{
    console.log("From the service",my_data)})

    this.router.navigate(['/login'])
  
}





//===============defaults===================


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

