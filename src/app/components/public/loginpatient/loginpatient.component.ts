import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-loginpatient',
  templateUrl: './loginpatient.component.html',
  styleUrls: ['./loginpatient.component.css']
})
export class LoginpatientComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb : FormBuilder) { 

    let loginFormInputs = {
      email: new FormControl("",[
        Validators.required ,
        Validators.email
      ]),

      password: new FormControl("",[
        Validators.required,
        Validators.minLength(8)
      ])
    }
    this.loginForm = fb.group(loginFormInputs);
  }

  get myemail() { return this.loginForm.get('email'); }
  get mypassword() { return this.loginForm.get('password'); }

  ngOnInit(): void {
  }
  login(){
    let data = this.loginForm.value ;
    console.log(data); 
  }
}
