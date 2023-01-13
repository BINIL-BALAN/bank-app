import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  user:string=''
  currentAcno:Number=0
  isCollapse:boolean=true
  ngOnInit(){
    if(localStorage.getItem("username")){
      this.user= localStorage.getItem("username")||''
    }
    if(localStorage.getItem("currentAcno")){
      this.currentAcno= JSON.parse(localStorage.getItem("currentAcno")||'')
    }
  }
 
  collapse(){
    this.isCollapse=!this.isCollapse
  }
}
