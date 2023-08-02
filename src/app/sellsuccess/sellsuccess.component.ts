import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sellsuccess',
  templateUrl: './sellsuccess.component.html',
  styleUrls: ['./sellsuccess.component.css']
})
export class SellsuccessComponent {
sellingPrice:number=0;
comission:number=0;
netPay:number=0;
constructor(private router:Router){}
ngOnInit(){
  this.sellingPrice=JSON.parse(localStorage.getItem("SellingPrice")||"");
  this.comission=0.025*this.sellingPrice;
  this.netPay=this.sellingPrice-this.comission;
}
gotoPortfolio(){
 this.router.navigate(['/portfolio']);
}
}
