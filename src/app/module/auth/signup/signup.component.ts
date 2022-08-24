import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { signUp } from 'src/app/models/auth/auth';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private _authService : AuthService
    ) { }

  hide:boolean = true;
  signUpForm: FormGroup = new FormGroup({});
  obj : signUp = new signUp();

  
  ngOnInit(): void {
    this.initializeLoginForms();
  }

  initializeLoginForms() {
    this.signUpForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })
  }
  get email() { return this.signUpForm.get('username') }
  get password() { return this.signUpForm.get('password') }

  
  onSubmit(){
    console.log(this.signUpForm.value)
    this.obj.username = this.signUpForm.value['username'];
    this.obj.password = this.signUpForm.value['password']
    console.log(this.obj)
    // this._authService.signUp(this.obj).subscribe((x) => {
    //   if(x.success){
    //     return x
    //   }
    //   else{
    //     alert("Error occur while.")
    //     return x
    //   }
    // })
  }

}
