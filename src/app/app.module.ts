import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/public/home/home.component';
import { FooterComponent } from './components/public/footer/footer.component';
import { HeaderComponent } from './components/public/header/header.component';
import { ContactComponent } from './components/public/contact/contact.component';
import { AboutComponent } from './components/public/about/about.component';
import { MedecinComponent } from './components/public/medecin/medecin.component';
import { FonctionComponent } from './components/public/fonction/fonction.component';
import { Page404Component } from './components/page404/page404.component';
import { MoncompteComponent } from './components/public/moncompte/moncompte.component';
import { RegisterpatientComponent } from './components/public/registerpatient/registerpatient.component';
import { RegistermedecinComponent } from './components/public/registermedecin/registermedecin.component';
import { ReactiveFormsModule , FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { LoginpatientComponent } from './components/public/loginpatient/loginpatient.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    ContactComponent,
    AboutComponent,
    MedecinComponent,
    FonctionComponent,
    Page404Component,
    MoncompteComponent,
    RegisterpatientComponent,
    RegistermedecinComponent,
    LoginpatientComponent,
    

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule , 
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
