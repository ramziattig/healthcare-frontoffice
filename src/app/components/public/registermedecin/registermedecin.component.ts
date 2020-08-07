import { Component, OnInit } from '@angular/core';
import{FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Medecin } from 'src/app/models/medecin';
@Component({
  selector: 'app-registermedecin',
  templateUrl: './registermedecin.component.html',
  styleUrls: ['./registermedecin.component.css']
})
export class RegistermedecinComponent implements OnInit {

  register: FormGroup 
  constructor(private fb:FormBuilder) {

    let formControls={
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
      profession : new FormControl("",[
        Validators.required,
        Validators.pattern("[a-z.'-]+"),
        Validators.minLength(8),
      ]),
      adress : new FormControl("",[
        Validators.required,
        Validators.minLength(8),
      ]),

      phone: new FormControl("",[
        Validators.required,
        Validators.pattern("[0-9]+"),
        Validators.minLength(8),
      ]),
     
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(8)
      ]),
     
      confirmPassword: new FormControl("", [
        Validators.required,
      ])
    }
    this.register = this.fb.group(formControls);
   }
   
   get firstname(){return this.register.get('firstname');}
   get lastname(){return this.register.get('lastname');}
   get email(){return this.register.get('email');}
   get phone(){return this.register.get('phone');}
   get profession(){return this.register.get('profession');}
   get adress(){return this.register.get('adress')}
   get password() { return this.register.get('password');}
   get confirmPassword(){return this.register.get('confirmPassword')}
  ngOnInit(): void {
  }

  saveUser(){
    let data =this.register.value;

    let medecin = new Medecin (
      data.firstname,
      data.lastname,
      data.email,
      data.phone,
      data.adress,
      data.profession,
      data.password,
      );

     console.log(medecin); 
  }
}
