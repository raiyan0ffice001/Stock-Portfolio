import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Stocks } from '../stocks.model';
import { Customers } from '../customer.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private static baseUrl: string="http://localhost:3000";
  constructor(private http:HttpClient) { }

  listAllStocks():Observable<Stocks[]>{
    return this.http.get<Stocks[]>(CustomerService.baseUrl+"/stocks/");
  }
  listCustomerStocks(custId:number):Observable<Customers>{
    return this.http.get<Customers>(CustomerService.baseUrl+"/customers/"+custId);
  }
  getShares(stockId:number):Observable<Stocks>{
    return this.http.get<Stocks>(CustomerService.baseUrl+"/stocks/"+stockId);
  }
  updateShare(stock:Stocks,stockId:number){
     this.http.put(CustomerService.baseUrl+"/stocks/"+stockId, stock).subscribe(data=>data=stock);
  }
  updateCustomerShare(customer:Customers, custId:number){
     this.http.put(CustomerService.baseUrl+"/customers/"+custId,customer).subscribe(data=>data=customer);
  }
}
