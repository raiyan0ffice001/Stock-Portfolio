import { Component } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { Router } from '@angular/router';
import { Stocks } from '../stocks.model';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  stocks:Stocks[]=[];
  userPhNo:number=0;
  userPass:string="";
  searchTerm: string ="";
  constructor(private service:AdminService,private router:Router){
    if(!localStorage.getItem("UserPhNo")){
      alert("Please login! to continue");
      this.router.navigate(['/login']);
    }
    else{
      this.userPhNo=JSON.parse(localStorage.getItem("UserPhNo")||"");
      this.userPass=JSON.parse(localStorage.getItem("UserPassword")||"");
      if(this.userPhNo!=9999999999){
        alert("Access Denied");
        this.router.navigate(['/home']);
      }
    }
  }
  
  ngOnInit(){
    this.service.listAllStocks().subscribe((data)=>{
      this.stocks=data;
    });
  }
  localStorage(updateStock:Stocks){
   localStorage.setItem("UpdateStock",JSON.stringify(updateStock));
   console.log(JSON.parse(localStorage.getItem("UpdateStock")||""));
   this.router.navigate(['/updatestock']);
  }
  navigate(){
    this.router.navigate(['/addstock']);
  }
}
