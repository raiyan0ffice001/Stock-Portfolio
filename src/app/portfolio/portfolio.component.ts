import { Component } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { Customers } from '../customer.model';
import { Stocks } from '../stocks.model';
import { Router } from '@angular/router';
import { BoughtShares } from '../boughtShares.model';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
customer:Customers=new Customers();
currPrice:Array<number>=[];
return: Array<number>=[];
custId=0;
userPhNo:number=0;
userPass:string="";
searchTerm: string ="";
stock:Stocks=new Stocks();
totalProfit:number=0;
constructor(private service:CustomerService,private router:Router){
      if(!localStorage.getItem("UserPhNo")){
        alert("Please login! to continue");
        this.router.navigate(['/login']);
      }
      else{
      this.userPhNo=JSON.parse(localStorage.getItem("UserPhNo") || "");
      this.userPass=JSON.parse(localStorage.getItem("UserPassword")||"");
      if((this.userPhNo==9999999999)){
        alert("Access Denied! Please Login as Customer");
        this.router.navigate(['/home']);
      }
      else{
        this.custId=JSON.parse(localStorage.getItem("CustId")||"");
      }
    }
}
ngOnInit(){
 this.service.listCustomerStocks(this.custId).subscribe((data)=>{
  this.customer=data;

 for(let i=0; i<this.customer.boughtShares.length;i++){
    let id=this.customer.boughtShares[i].id;
    this.service.getShares(id).subscribe((data)=>{
      this.stock=data;
      let profit:number=(this.customer.boughtShares[i].shareQnt*this.stock.currentPrice)-this.customer.boughtShares[i].investment;
      profit=Number(profit.toFixed(2));
      this.return.push(profit);
      this.totalProfit+=((this.customer.boughtShares[i].shareQnt*this.stock.currentPrice)-this.customer.boughtShares[i].investment);
      this.totalProfit=Number(this.totalProfit.toFixed(2));
      this.currPrice.push(this.stock.currentPrice);
    });
   }
  
});
}


localStorage(sellStock:BoughtShares,currPrice:number){
      localStorage.setItem("SellStock",JSON.stringify(sellStock));
      localStorage.setItem("CurrPrice",JSON.stringify(currPrice)); 
      this.router.navigate(['/sell']);
  }
}