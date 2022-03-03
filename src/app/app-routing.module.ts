import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateMerchantsComponent } from './components/create-merchants/create-merchants.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ListMerchantsComponent } from './components/list-merchants/list-merchants.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { WatchMerchantsComponent } from './components/watch-merchants/watch-merchants.component';



const routes: Routes = [
  {path: "",  component:LandingPageComponent },
  {path: "Login", component:LoginComponent},
  {path: "Register", component:RegisterComponent},
  {path:"List-merchants", component:ListMerchantsComponent},
  {path:"watch-merchants", component:WatchMerchantsComponent},
  {path: "create-merchants", component:CreateMerchantsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
