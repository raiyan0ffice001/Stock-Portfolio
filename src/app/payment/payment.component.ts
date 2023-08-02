import { Component } from '@angular/core';
import { Stocks } from '../stocks.model';
import { Customers } from '../customer.model';
import { BoughtShares } from '../boughtShares.model';
import { CustomerService } from '../services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  boughtStock:Stocks=new Stocks();
  custId:number=0;
  cost:number=0;
  comission:number=0;
  netPrice:number=0;
 constructor(private service:CustomerService,private router:Router){
  this.custId=JSON.parse(localStorage.getItem("CustId")||"");
 }
 
 ngOnInit(){
  this.boughtStock=JSON.parse(localStorage.getItem("BuyStock")||"");
  this.cost=(this.boughtStock.currentPrice*this.boughtStock.volume);
  this.comission=0.025*this.cost;
  this.comission=Number(this.comission.toFixed(2));
  let nPrice:number=Number((this.cost+this.comission).toFixed(2));
  this.netPrice=nPrice;
  
 }


  buyStock(){
    let customer:Customers=new Customers();
    let flag:boolean=true;
    this.service.listCustomerStocks(this.custId).subscribe((data)=>{
     customer=data;
     //if stock is previously bought
     for(let i=0; i<customer.boughtShares.length;i++){
      if(customer.boughtShares[i].id==this.boughtStock.id){
        customer.boughtShares[i].shareQnt+=this.boughtStock.volume;
        customer.boughtShares[i].investment+=(this.boughtStock.volume*this.boughtStock.currentPrice);
        flag=false;
        break;
      }
     }
     if(flag){
      let addedStock:BoughtShares=new BoughtShares();
      //if buying new stock
      addedStock.id=this.boughtStock.id;
      addedStock.companyName=this.boughtStock.companyName;
      addedStock.shareQnt=this.boughtStock.volume;
      addedStock.investment=(this.boughtStock.currentPrice*this.boughtStock.volume);
      customer.boughtShares.push(addedStock);
     }
     this.service.updateCustomerShare(customer,customer.id);
    });
    let stock:Stocks=new Stocks();
    //updating the stock volume of the bought stock
    this.service.getShares(this.boughtStock.id).subscribe((data)=>{
      stock=data;
      stock.volume-=this.boughtStock.volume;
      this.service.updateShare(stock,stock.id);
    })
    this.router.navigate(['/buysuccess']);
  }
  navigate(){
    this.router.navigate(['/liststocks'])
  }
}
