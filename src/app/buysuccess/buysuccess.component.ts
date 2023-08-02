import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buysuccess',
  templateUrl: './buysuccess.component.html',
  styleUrls: ['./buysuccess.component.css']
})
export class BuysuccessComponent {

  constructor(private router:Router){}

  navigate(){
    this.router.navigate(['/portfolio']);
  }
}
