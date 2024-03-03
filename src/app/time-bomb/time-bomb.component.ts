import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {Router } from '@angular/router';

@Component({
  selector: 'app-time-bomb',
  templateUrl: './time-bomb.component.html',
  styleUrls: ['./time-bomb.component.css']
})
export class TimeBombComponent implements OnInit {
  @ViewChild('audioPlayer') audioPlayerRef!: ElementRef<HTMLAudioElement>;
  @ViewChild('newAudioPlayer') newAudioPlayerRef!: ElementRef<HTMLAudioElement>;
  countdownTime: number = 30;
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
        this.router.navigate(["/"]);
      }
    },1000);
  }

  diffuseBomb(): void{
    clearInterval(this.timerInterval);
    this.bombDiffused = true;
    this.pauseAudio();
    this.playNewAudio();
    alert("bomb defused");
    this.goToNextPage();
  }

  goToNextPage(): void{
    this.router.navigate(['/'])
  }

  showButton(): void{
    const btn = document.getElementById('diffusebtn');
    if(btn){
      btn.style.opacity = '1';
    }
  }
  
  hideButton(): void{
    const btn = document.getElementById('diffusebtn');
    if(btn){
      btn.style.opacity = '0';
    }
  }
  showButton1(): void{
    const btn = document.getElementById('diffusebtn1');
    if(btn){
      btn.style.opacity = '1';
    }
  }
  
  hideButton1(): void{
    const btn = document.getElementById('diffusebtn1');
    if(btn){
      btn.style.opacity = '0';
    }
  }

  pauseAudio(): void {
    if(this.audioPlayerRef){
      this.audioPlayerRef.nativeElement.pause();
    }
  }

  playNewAudio(): void{
    if(this.newAudioPlayerRef){
      this.newAudioPlayerRef.nativeElement.play();
    }
  }
}