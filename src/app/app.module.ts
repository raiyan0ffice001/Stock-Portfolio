import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListstocksComponent } from './liststocks/liststocks.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SellComponent } from './sell/sell.component';
import { SellsuccessComponent } from './sellsuccess/sellsuccess.component';
import { BuyComponent } from './buy/buy.component';
import { BuysuccessComponent } from './buysuccess/buysuccess.component';
import { PaymentComponent } from './payment/payment.component';
import { UpdateComponent } from './update/update.component';
import { UpdatestockComponent } from './updatestock/updatestock.component';
import { UpdatesuccessComponent } from './updatesuccess/updatesuccess.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AddstockComponent } from './addstock/addstock.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AddsuccessComponent } from './addsuccess/addsuccess.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListstocksComponent,
    PortfolioComponent,
    SellComponent,
    SellsuccessComponent,
    BuyComponent,
    BuysuccessComponent,
    PaymentComponent,
    UpdateComponent,
    UpdatestockComponent,
    UpdatesuccessComponent,
    LoginComponent,
    SignupComponent,
    AddstockComponent,
    AddsuccessComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
