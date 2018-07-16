import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable()
export class ProductGuardService implements CanActivate{

  constructor(private _router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean  {
    let id = +route.paramMap.get('id');    
    if(isNaN(id) || id < 1){
      alert('ID is not valid' + id);
      this._router.navigate(['/products']);
      return false;
    }
    return true;
  }

}
