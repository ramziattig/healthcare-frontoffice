import { Component, OnInit } from '@angular/core';
import{FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Patient } from 'src/app/models/patient';
@Component({
  selector: 'app-registerpatient',
  templateUrl: './registerpatient.component.html',
  styleUrls: ['./registerpatient.component.css']
})
export class RegisterpatientComponent implements OnInit {

  myForm: FormGroup  
    
    constructor(private fb:FormBuilder) { 
    
      let formControls = {
        firstname : new FormControl('',[
          Validators.required,
          Validators.pattern("[a-z.'-]+"),
          Validators.minLength(2)
        ]),
        lastname : new FormControl('',[
          Validators.required,
          Validators.pattern("[a-z.'-]+"),
          Validators.minLength(2)
        ]),
        email: new FormControl("", [
          Validators.required,
          Validators.email
        ]),
        phone: new FormControl("",[
          Validators.required,
          Validators.pattern("[0-9]+"),
          Validators.minLength(8),
          Validators.maxLength(13)
        ]),
        
        password: new FormControl("", [
          Validators.required,
          Validators.minLength(8)
        ]),
        confirmPassword: new FormControl("", [
          Validators.required,
        ])
       
       
        
       
    }

    this.myForm = this.fb.group(formControls);
  }

  get firstname(){return this.myForm.get('firstname');}
  get lastname(){return this.myForm.get('lastname');}
  get email(){return this.myForm.get('email');}
  get phone(){return this.myForm.get('phone');}
  get password() { return this.myForm.get('password'); }
  get confirmPassword(){return this.myForm.get('confirmPassword')}
 
  

  ngOnInit(): void {
  }

  saveUser(){
    let data =this.myForm.value;

    let patient = new Patient (
      data.firstname,
      data.lastname,
      data.email,
      data.phone,
      data.password,
      );

     console.log(patient); 
  }
}
