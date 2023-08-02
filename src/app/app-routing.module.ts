import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListstocksComponent } from './liststocks/liststocks.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SellComponent } from './sell/sell.component';
import { SellsuccessComponent } from './sellsuccess/sellsuccess.component';
import { BuyComponent } from './buy/buy.component';
import { BuysuccessComponent } from './buysuccess/buysuccess.component';
import { PaymentComponent } from './payment/payment.component';
import { UpdateComponent } from './update/update.component';
import { UpdatesuccessComponent } from './updatesuccess/updatesuccess.component';
import { UpdatestockComponent } from './updatestock/updatestock.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AddstockComponent } from './addstock/addstock.component';
import { AddsuccessComponent } from './addsuccess/addsuccess.component';

const routes: Routes = [
  {path: "home", component:HomeComponent},
  {path: "liststocks", component:ListstocksComponent},
  {path: "portfolio", component:PortfolioComponent},
  {path: "sell", component:SellComponent},
  {path: "sellsuccess", component:SellsuccessComponent},
  {path: "buy", component:BuyComponent},
  {path: "buysuccess", component:BuysuccessComponent},
  {path: "payment", component:PaymentComponent},
  {path: "addstock", component:AddstockComponent},
  {path:"addsuccess", component:AddsuccessComponent},
  {path: "update", component:UpdateComponent},
  {path: "updatestock", component:UpdatestockComponent},
  {path: "updatesuccess", component:UpdatesuccessComponent},
  {path: "login", component:LoginComponent},
  {path: "signup", component:SignupComponent},
  {path: "**", redirectTo:"/home",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
