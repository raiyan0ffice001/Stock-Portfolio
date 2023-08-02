import { Component } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { Router } from '@angular/router';
import { Customers } from '../customer.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  customer:Customers=new Customers();
  adminNo:number=9999999999;
  adminPassword:string="qwert";
  checkUserPhNo:number=0;
  checkUserPass:string="";
  unmae:string="Admin";
  constructor(private service:AdminService,private router:Router){
  }
  ngOnInit(){
    this.checkUserPhNo=JSON.parse(localStorage.getItem("UserPhNo")||"");
    this.checkUserPass=JSON.parse(localStorage.getItem("UserPassword")||"");
    if(this.checkUserPhNo!=0 || this.checkUserPass!=""){
       alert("Please first logout to login again!");
       this.router.navigate(['/home']);
    }
  }
  validate(){
    var flag:boolean=true;
    if(this.customer.phoneNo==this.adminNo&&this.customer.password==this.adminPassword){
      // alert("You are now loged in as Admin");
      localStorage.setItem("UserPhNo",JSON.stringify(this.adminNo));
      localStorage.setItem("UserPassword",JSON.stringify(this.adminPassword));
      localStorage.setItem("UserName",JSON.stringify(this.unmae));
      this.router.navigate(['/home']);
    }
    else{
      let user:Customers[]=[];
      this.service.listAllCustomer().subscribe((data)=>{
          user=data;
          for(let i=0; i<user.length;i++){
            if(user[i].phoneNo==this.customer.phoneNo && user[i].password==this.customer.password){
              localStorage.setItem("UserPhNo",JSON.stringify(this.customer.phoneNo));
              localStorage.setItem("UserPassword",JSON.stringify(this.customer.password));
              localStorage.setItem("CustId",JSON.stringify(user[i].id));
              localStorage.setItem("UserName",JSON.stringify(user[i].name));
              // alert("Login Successful")
              flag=false;
              this.router.navigate(['/home']);
              break;
            }
          }
          if(flag){
            alert("Invalid Credentials");
          }
      });
    }
  }
  

 }

