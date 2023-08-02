import { Component } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { Router } from '@angular/router';
import { Stocks } from '../stocks.model';

@Component({
  selector: 'app-addstock',
  templateUrl: './addstock.component.html',
  styleUrls: ['./addstock.component.css'],
})
export class AddstockComponent {


  newStock: Stocks = new Stocks();

  newStockId: number = 0;

  stocks: Stocks[] = [];



  constructor(private service: AdminService, private router: Router) { }



  ngOnInit(): void { }



  navigate() {

    this.router.navigate(['/liststocks']);

  }

  addStock() {

    this.service.listAllStocks().subscribe((data) => {

      this.stocks = data;

      var flag: boolean = true;

      for (let i = 0; i < this.stocks.length; i++) {

        if (this.stocks[i].companyName == this.newStock.companyName) {

          flag = false;

          alert("This Stock is Already listed!");

          break;

        }

      }

      if (flag) {

        this.newStockId = (this.stocks.length + 1);

        this.newStock.id = this.newStockId;

        this.service.addStock(this.newStock);

        this.router.navigate(['/addsuccess']);

      }

    })

  }
}
