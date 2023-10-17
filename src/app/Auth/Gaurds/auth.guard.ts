import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserdataService } from '../../services/userdata.service';

export const authGuard: CanActivateFn = (route, state) => {
  // debugger
  let router:Router = inject(Router);
  console.log(localStorage.getItem('isLoggedIn'))
  if(localStorage.getItem('isLoggedIn') === 'true'){
    return true;
  }else{
    router.navigate(['signin'])
    return false
  }
};
