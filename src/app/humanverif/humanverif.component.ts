import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-humanverif',
  templateUrl: './humanverif.component.html',
  styleUrls: ['./humanverif.component.css']
})
export class HumanverifComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  nextPage() {
    this.router.navigate(["/time-bomb"]);
  }
}
