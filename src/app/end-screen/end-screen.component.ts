import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-end-screen',
  templateUrl: './end-screen.component.html',
  styleUrls: ['./end-screen.component.css']
})
export class EndScreenComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  viewLeaderboard(){
    this.router.navigate(['/leaderboard']);
  }

}
