import { Injectable } from '@angular/core';
import { user} from'../interfaces/interface'
@Injectable({
  providedIn: 'root'
})

export class UserdataService {
 users:user[] =[
  {email:'Vishnu@gmail.com', password:'test@123'},
  {email:'Rajeev@gmail.com', password:'test@123'},
  {email:'Anurag@gmail.com', password:'test@123'},
  {email:'Devesh@gmail.com', password:'test@123'},
 ];
 isLoggedIn= false;

 getUserData(){
  return this.users;
 }
 authenticateUser(email:any,password:any){
  let isUserExist:user[] = this.users.filter(user => user.email === email);
  if(isUserExist.length){
    this.isLoggedIn = isUserExist[0].password===password;
    localStorage.setItem('isLoggedIn','true');
    return this.isLoggedIn;
  }else{
    localStorage.setItem('isLoggedIn','false')
    return false;
  }
 }
 createNewUser(signupdata:any){
  
 }
}
