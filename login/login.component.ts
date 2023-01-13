import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
   errorMsg:String=''
   successMsg:boolean=false
   // login form group
   loginForm=this.fb.group({
    //array
     acno:[' ',[Validators.required,Validators.pattern('[0-9]*')]],
     pswd:[' ',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]],

   })

  constructor(private fb:FormBuilder,private api:ApiService,private router:Router){
      
  }


  login(){
    if(this.loginForm.valid){
      console.log(this.loginForm);
      let acno=this.loginForm.value.acno
      let pswd=this.loginForm.value.pswd
      //login api
      this.api.login(acno,pswd)
      .subscribe((result:any)=>{
        // console.log(result.error.result.message);
        console.log(result);
         this.successMsg=true
         localStorage.setItem("username",result.result.username)
         localStorage.setItem("currentAcno",JSON.stringify(result.result.currentAcno))
         setTimeout(()=>{
          this.router.navigateByUrl('dashboard')
         },2000)
      },(result:any)=>{
        this.errorMsg=result.error.result.message
      })
    }else{
      alert('invalid')
    }

  }
}
