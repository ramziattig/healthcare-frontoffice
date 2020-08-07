import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/public/home/home.component';
import { ContactComponent } from './components/public/contact/contact.component';
import { AboutComponent } from './components/public/about/about.component';
import { MedecinComponent } from './components/public/medecin/medecin.component';
import { FonctionComponent } from './components/public/fonction/fonction.component';
import { Page404Component } from './components/page404/page404.component';
import { MoncompteComponent } from './components/public/moncompte/moncompte.component';
import { RegisterpatientComponent } from './components/public/registerpatient/registerpatient.component';
import { RegistermedecinComponent } from './components/public/registermedecin/registermedecin.component';
import { LoginpatientComponent } from './components/public/loginpatient/loginpatient.component';




const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"contact",
    component:ContactComponent
  },
  {
    path:"about",
    component:AboutComponent
  },
  {
    path:"medecin",
    component:MedecinComponent
  },
  {
    path:"fonction",
    component:FonctionComponent
  },
  {
    path:"moncompte",
    component:MoncompteComponent
  },
   {
     path:"registerpatient",
     component:RegisterpatientComponent
   },
   {
      path:"loginpatient",
      component:LoginpatientComponent
   },
   {
     path:"registermedecin",
     component:RegistermedecinComponent
   },
  {
    path:"**",
    component:Page404Component
  } 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
