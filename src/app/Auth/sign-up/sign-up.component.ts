import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserdataService } from '../../services/userdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  constructor(private fb:FormBuilder, private userdataservice:UserdataService,private router:Router){}
  signupForm = this.fb.group({
    name:['',Validators.required],
    email : ['', Validators.required],
    password:['', Validators.required],
    confirmPassword:['', Validators.required],
  })

  signUp(){
    console.log(this.signupForm);
    this.userdataservice.createNewUser(this.signupForm.value);
    this.router.navigate(['/contact'])
  }
}
