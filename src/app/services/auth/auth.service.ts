import { Injectable } from '@angular/core';
import { REQUESTTYPE } from 'src/app/models/enum/request-type.enum';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/shared/async-services/data.service';
import { login, signUp } from 'src/app/models/auth/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _dataService: DataService) { }

  
  loginViaGoogle(email: string): Observable<any> {
    return this._dataService.genericServiceCaller(REQUESTTYPE.POST, `auth/loginViaGoogle/${email}`)
  }

  signUp(obj:signUp){
    return this._dataService.genericServiceCaller(REQUESTTYPE.POST, `user/addUser`,  obj)
  }

  userLogin(obj:login){
    return this._dataService.genericServiceCaller(REQUESTTYPE.POST, `user/userLogin`, obj);
  }

  signInWithGoogle(){
    return this._dataService.genericServiceCaller(REQUESTTYPE.GET, `user/googleSignIn`, true);
  }

}