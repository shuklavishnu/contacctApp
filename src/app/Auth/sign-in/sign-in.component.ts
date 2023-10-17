import { Component } from '@angular/core';
import { inject } from '@angular/core/testing';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserdataService } from '../../services/userdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  // signinForm:any;
  constructor(private fb:FormBuilder, private userdataservice:UserdataService,private router:Router){}
  signinForm = this.fb.group({
    email : ['Vishnu@gmail.com', Validators.required],
    password:['test@123', Validators.required]
  })

  signIn(){
    console.log(this.signinForm);
    this.userdataservice.authenticateUser(this.signinForm.controls.email.value,this.signinForm.controls.password.value);
    this.router.navigate(['/contact']);
  }
}
