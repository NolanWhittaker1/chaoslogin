import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';

@Component({
  selector: 'app-time-bomb',
  templateUrl: './time-bomb.component.html',
  styleUrls: ['./time-bomb.component.css']
})
export class TimeBombComponent implements OnInit {
  countdownTime: number = 10;
  timerDisplay: number = this.countdownTime;
  timerInterval: any;
  bombDiffused: boolean = false;

  constructor(private router: Router) { 
  }

  ngOnInit(): void {
    this.startTimer();
  }

  startTimer(): void{
    this.timerDisplay = this.countdownTime;
    this.timerInterval = setInterval(() => {
      this.timerDisplay--;
      if(this.timerDisplay <= 0){
        clearInterval(this.timerInterval);
        this.router.navigate(["/mainpage"]);
      }
    },1000);
  }

  diffuseBomb(): void{
    clearInterval(this.timerInterval);
    this.bombDiffused = true;
    alert("bomb diffused");
  }

  goToNextPage(): void{
    this.router.navigate(['/'])
  }
}
