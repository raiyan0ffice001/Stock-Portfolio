import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  uname:string="";
  flag:boolean=false;
  constructor(private router:Router){
    if(localStorage.getItem("UserPhNo")){
      this.flag=true;
    }
  };
  ngOnInit(){
    this.uname=JSON.parse(localStorage.getItem("UserName")||"");
  }
  invest(){
    if(!localStorage.getItem("UserPhNo")){
      this.router.navigate(['/signup']);
    }
    else{
      this.router.navigate(['/liststocks']);
    }
  }
}
