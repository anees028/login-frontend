import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { login } from 'src/app/models/auth/auth';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private _authService : AuthService
  ) { }

  ngOnInit(): void {
    this.initializeLoginForms();
  }

  loginForm : FormGroup = new FormGroup({});
  obj : login = new login();

  initializeLoginForms() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }
  // get username() { return this.loginForm.get('username') }
  // get password() { return this.loginForm.get('password') }

  onLogin(){
    this.obj.username = this.loginForm.value['username'];
    this.obj.password = this.loginForm.value['password'];
    console.log(this.obj)

    this._authService.userLogin(this.obj).subscribe(x => {
      if(x.success){
        alert("Login Successfull")
      }
      else{
        alert("Login Failed")
      }
    })

  }

}
