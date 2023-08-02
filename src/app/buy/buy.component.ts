import { Component } from '@angular/core';
import { Stocks } from '../stocks.model';
import { Customers } from '../customer.model';
import { CustomerService } from '../services/customer.service';
import { Router } from '@angular/router';
import { BoughtShares } from '../boughtShares.model';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent {
boughtStock:Stocks=new Stocks();
stockQnt:number=0;
userPhNo:number=0;
userPass:string="";
constructor(private service:CustomerService,private router:Router){
      this.userPhNo=JSON.parse(localStorage.getItem("UserPhNo")||"");
      this.userPass=JSON.parse(localStorage.getItem("UserPassword")||"");
      if((this.userPhNo==9999999999 || this.userPhNo==0)|| (this.userPass=="qwert" || this.userPass=="")){
        alert("Access Denied! Please Login as Customer");
        this.router.navigate(['/home']);
      }
}
ngOnInit(){
  this.boughtStock=JSON.parse(localStorage.getItem("BuyStock")||"");
}
update(){
  if(this.stockQnt<=0){
     alert("Can't buy! invalid stock Quantity.")
  }
  else{
  this.boughtStock.volume=this.stockQnt;
  localStorage.setItem("BuyStock",JSON.stringify(this.boughtStock));
  this.router.navigate(['/payment']);
  }
}
navigate(){
  this.router.navigate(['/liststocks']);
}
}
