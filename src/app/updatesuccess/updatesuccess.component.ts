import { Component } from '@angular/core';
import { Stocks } from '../stocks.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updatesuccess',
  templateUrl: './updatesuccess.component.html',
  styleUrls: ['./updatesuccess.component.css']
})
export class UpdatesuccessComponent {
updatedStock:Stocks=new Stocks();

constructor(private router:Router){}
ngOnInit(){
  this.updatedStock=JSON.parse(localStorage.getItem("UpdateStock")||"");
}
navigate(){
  this.router.navigate(['/update']);
}
}
