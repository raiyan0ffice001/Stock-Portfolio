import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addsuccess',
  templateUrl: './addsuccess.component.html',
  styleUrls: ['./addsuccess.component.css']
})
export class AddsuccessComponent {
  constructor(private router:Router){}

  navigate(){

    this.router.navigate(['/liststocks'])

  }
}
