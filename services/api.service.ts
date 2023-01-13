import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { 
  }
    //register 
    register(uname:any,acno:any,pswd:any)
    {
       const body={
        uname,
        acno,
        pswd
       }
     return this.http.post('http://localhost:3000/register',body)  
    }
   // login
  // server call to login account and return response to login component
   login(acno:any,pswd:any){
     const body={
      acno,
      pswd
     }
     return this.http.post('http://localhost:3000/login',body)
   }
}


