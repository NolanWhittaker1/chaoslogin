import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-humanverif',
  templateUrl: './humanverif.component.html',
  styleUrls: ['./humanverif.component.css']
})
export class HumanverifComponent implements OnInit {
  totalTime: number;
  constructor(private us:UserService) {
      this.totalTime = us.getTime(); 
   }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  nextPage() {
    this.router.navigate(["/time-bomb"]);
  }
}
