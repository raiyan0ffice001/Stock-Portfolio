import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'stockweb-app';

  flag:boolean=true;

  flagl:boolean=false;

  uname:string="";

  constructor(private router:Router){

  }

  ngOnInit(){

     this.uname=JSON.parse(localStorage.getItem("UserName")||"")

    if(this.uname=="Admin"){

      this.flag=false;

    }

    if(localStorage.getItem("UserName")){

      this.flagl=true;

    }

  }

  clear(){

    localStorage.clear();

    this.router.navigate(['/login']);

  }

}
