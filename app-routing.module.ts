import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  //login
  //http://localhost:4200/
  {
    path:'',component:LoginComponent
  },
  //Register
  //http://localhost:4200/register
  {
    path:'register',component:RegisterComponent
  },
  //Dashboard
  //http://localhost:4200/dashboard
  {
    path:'dashboard',component:DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
