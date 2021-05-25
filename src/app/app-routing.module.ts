import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; //importa las rutas


import  { HomeComponent } from './pages/home/home.component'
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [

{
  path :'home',
  component : HomeComponent
},
{
  path :'about',
  component : AboutComponent
},{
  path :'contact',
  component : ContactComponent
},
{
  path :'**',
  redirectTo : 'home'
},
];

@NgModule({ //asignamos la rutas y las exportamos
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
