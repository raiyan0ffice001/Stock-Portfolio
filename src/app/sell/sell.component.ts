import { Component } from '@angular/core';
import { BoughtShares } from '../boughtShares.model';
import { Customers } from '../customer.model';
import { CustomerService } from '../services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent {
  stock:BoughtShares=new BoughtShares();
  currPrice:number=0;
  custId:number=0;
  shareQuant:number=0;
  constructor(private service:CustomerService,private router:Router){}

  //sving details of stock that are to be sold
  ngOnInit(){
    this.stock=JSON.parse(localStorage.getItem("SellStock")||"");
    this.currPrice=JSON.parse(localStorage.getItem("CurrPrice")||"");
    this.custId=JSON.parse(localStorage.getItem("CustId")||"");
    this.shareQuant=this.stock.shareQnt;
  }

  //updating stock that has been sold
  updateStock(){
    if(this.stock.shareQnt<=0 || this.stock.shareQnt>this.shareQuant){
      alert("Selected Stock Volume is invalid! please sell stock in valid range.");
    }
    else{
     let customer:Customers=new Customers();
     this.service.listCustomerStocks(this.custId).subscribe((data)=>{
        customer=data;


     for(let i=0; i<customer.boughtShares.length;i++){
      //updating the stock quantity of customer
      if(customer.boughtShares[i].id==this.stock.id){
        customer.boughtShares[i].investment-=this.stock.shareQnt*(customer.boughtShares[i].investment/customer.boughtShares[i].shareQnt);
        customer.boughtShares[i].shareQnt-=this.stock.shareQnt;
        break;
      }
      }
     this.service.updateCustomerShare(customer,customer.id);
    });
    //calculating selling price
     let sellingPrice:number=0;
      sellingPrice=(this.currPrice)*this.stock.shareQnt;
      localStorage.setItem("SellingPrice",JSON.stringify(sellingPrice));
      this.router.navigate(['/sellsuccess']);
  }
  }
  navigate(){
    this.router.navigate(['/portfolio']);
  }

  
}
