import { Component } from '@angular/core';
import { Stocks } from '../stocks.model';
import { CustomerService } from '../services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liststocks',
  templateUrl: './liststocks.component.html',
  styleUrls: ['./liststocks.component.css']
})
export class ListstocksComponent {

  stocks:Stocks[]=[];
  searchTerm: string ="";
  uname:string="";
  flag:boolean=false;
  
  constructor(private service:CustomerService,private router:Router){}
  
  ngOnInit(){
  
    this.service.listAllStocks().subscribe(data=>this.stocks=data);
  
    this.uname=JSON.parse(localStorage.getItem("UserName")||"");
  
    if(localStorage.getItem("UserName")&&this.uname=="Admin"){
  
      this.flag=true;
  
    }
  
  }
  
  localStorageb(buyStock:Stocks){
  
    if(!localStorage.getItem("UserPhNo")){
  
      alert("Please login! to continue.");
  
      this.router.navigate(['/login']);
  
    }
  
    else{
  
     localStorage.setItem("BuyStock",JSON.stringify(buyStock));
  
     this.router.navigate(['/buy']);
  
    }
  
  }
  
  localStorageu(updateStock:Stocks){
  
    localStorage.setItem("UpdateStock",JSON.stringify(updateStock));
  
    this.router.navigate(['/updatestock']);
  
   }
  
   
  
  navigate(){
  
    this.router.navigate(['/addstock']);
  
  }
  
  }