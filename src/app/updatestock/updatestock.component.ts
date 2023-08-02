import { Component } from '@angular/core';
import { Stocks } from '../stocks.model';
import { AdminService } from '../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updatestock',
  templateUrl: './updatestock.component.html',
  styleUrls: ['./updatestock.component.css']
})
export class UpdatestockComponent {
  updateStock:Stocks=new Stocks();

  constructor(private service:AdminService,private router:Router){};
  ngOnInit(){
    this.updateStock=JSON.parse(localStorage.getItem("UpdateStock")||"");
  }
  update(){
   localStorage.setItem("UpdateStock",JSON.stringify(this.updateStock));
    this.service.updateShare(this.updateStock,this.updateStock.id)
    this.router.navigate(['/updatesuccess']);
  }
  navigate(){
    this.router.navigate(['/liststocks']);
  }

}
