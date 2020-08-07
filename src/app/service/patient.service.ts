import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http';
import{Patient}from '../models/Patient';
@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private registerpatientUrl="http://localhost/3000/patientregister"
  constructor(private http:HttpClient) {}
  
  registerpatient(patient:Patient){
    let dataFromAPI=this.http.post<any>(this.registerpatientUrl,patient);
  }
  
}
