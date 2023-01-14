import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
 //login
  {
    path:'',
    redirectTo:'bankapp/login',
    pathMatch:'full'
  },
  //http://localhost:4200/
  {
    path:'bankapp/login',
    component:LoginComponent
  },
  //Register
  //http://localhost:4200/register
  {
    path:'bankapp/register',
    component:RegisterComponent
  },
  //Dashboard
  //http://localhost:4200/dashboard
  {
    path:'bankapp/dashboard',
    component:DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
