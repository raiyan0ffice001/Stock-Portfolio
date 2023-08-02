import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stocks } from '../stocks.model';
import { Customers } from '../customer.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private static baseUrl: string="http://localhost:3000";
  constructor(private http:HttpClient) { }

  listAllStocks():Observable<Stocks[]>{
    return this.http.get<Stocks[]>(AdminService.baseUrl+"/stocks/");
  }
  listAllCustomer():Observable<Customers[]>{
    return this.http.get<Customers[]>(AdminService.baseUrl+"/customers/");
  }
  addCustomer(customer:Customers){
    this.http.post(AdminService.baseUrl+"/customers/",customer).subscribe(data=>data=customer);
  }
  updateShare(stock:Stocks,stockId:number){
    this.http.put(AdminService.baseUrl+"/stocks/"+stockId, stock).subscribe(data=>data=stock);
 }
 
addStock(stock : Stocks) {
this.http.post(AdminService.baseUrl+"/stocks/", stock).subscribe(data=>data=stock);

}
}
