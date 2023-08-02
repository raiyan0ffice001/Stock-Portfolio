import { Component } from '@angular/core';
import { Customers } from '../customer.model';
import { AdminService } from '../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
 newCustomer:Customers=new Customers();
 newCustId:number=0;
 customer:Customers[]=[];

 constructor(private service:AdminService, private router:Router){}

 signUp(){
  this.service.listAllCustomer().subscribe((data)=>{
    this.customer=data;
    var flag:boolean=true;
    this.newCustId=this.customer.length+1;
    for(let i=0;i<this.customer.length;i++){
      if(this.customer[i].phoneNo==this.newCustomer.phoneNo){
        alert("This Phone number is already registered! please login");
        flag=false;
        this.router.navigate(['/login']);
        break;
      }

    }
      if(flag){
        this.newCustomer.id=this.newCustId;
        this.service.addCustomer(this.newCustomer);
        alert("Registration Successful! please login");
        this.router.navigate(['/login']);
      }
    
  });
 }
}
