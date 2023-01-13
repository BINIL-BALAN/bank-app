import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

       // login form group
   registerForm=this.fb.group({
    //array
     uname:['',[Validators.required,Validators.pattern('[a-z]*')]],
     acno:[' ',[Validators.required,Validators.pattern('[0-9]*')]],
     pswd:[' ',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]],

   })
   constructor(private fb:FormBuilder,private api:ApiService,private router:Router){
      
   }
    register(){
      if(this.registerForm.valid){
        console.log(this.registerForm);
        let uname=this.registerForm.value.uname
        let acno=this.registerForm.value.acno
        let pswd=this.registerForm.value.pswd
        this.api.register(uname,acno,pswd)
        .subscribe((result:any)=>{
          alert(result.result.message)
           this.router.navigateByUrl('')
        })
      }else{
        alert('invalid')
      }
    }
}
