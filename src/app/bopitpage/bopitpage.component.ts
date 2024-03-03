import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { interval } from 'rxjs/internal/observable/interval';

@Component({
  selector: 'app-bopitpage',
  templateUrl: './bopitpage.component.html',
  styleUrls: ['./bopitpage.component.css']
})
export class BopitpageComponent implements OnInit {
  pattern: string[] = [];
  colors = ['r', 'g','b','y']
  currentTurn = 0;
  maxTurns = 10;
  count = 0;
  userGuess: string[] =[];
  
  constructor(private router:Router) { }

  ngOnInit(): void {
      for (let i = 0; i < 10; i++) {
        const randomIndex = Math.floor(Math.random() * this.colors.length);
        const randomColor = this.colors[randomIndex];
        this.pattern.push(randomColor);
      }
      console.log(this.pattern)
  }

  startGame() {
    this.currentTurn = 5;
    this.count = 0;
    this.changeColors()
    this.guess()
  }
  
  changeColors() {
    interval(1000)
      .pipe(take(this.currentTurn))
      .subscribe(() => {
        if(this.pattern[this.count] == 'y')
        document.getElementById("yellow")!.style.backgroundColor = 'yellow';
        else if(this.pattern[this.count] == 'g')
        document.getElementById("green")!.style.backgroundColor = 'green';
        else if(this.pattern[this.count] == 'r')
        document.getElementById("red")!.style.backgroundColor = 'red';
        else if(this.pattern[this.count] == 'b')
        document.getElementById("blue")!.style.backgroundColor = 'blue';
        setTimeout(() => {
          this.resetColors()
        }, 500); // Set the color for 0.5 seconds
        this.count++;
      });
  }
  
  resetColors() {
    document.getElementById("yellow")!.style.backgroundColor = 'gray';
    document.getElementById("green")!.style.backgroundColor = 'gray';
    document.getElementById("red")!.style.backgroundColor = 'gray';
    document.getElementById("blue")!.style.backgroundColor = 'gray';
  }

  guess() {
    
    document.getElementById("yellow")!.addEventListener('click', () => {
      this.userGuess.push("y");
      document.getElementById("yellow")!.style.backgroundColor = 'yellow';
      setTimeout(() => {
        this.resetColors()
      }, 500);
    })
    document.getElementById("green")!.addEventListener('click', () => {
      document.getElementById("green")!.style.backgroundColor = 'green';
      this.userGuess.push("g");
      setTimeout(() => {
        this.resetColors()
      }, 500);
    })
    document.getElementById("red")!.addEventListener('click', () => {
      document.getElementById("red")!.style.backgroundColor = 'red';
      this.userGuess.push("r");
      setTimeout(() => {
        this.resetColors()
      }, 500);
    })
    document.getElementById("blue")!.addEventListener('click', () => {
      document.getElementById("blue")!.style.backgroundColor = 'blue';
      this.userGuess.push("b");
      setTimeout(() => {
        this.resetColors()
      }, 500);
    })
  }

  onStart() {  
    console.log("Starting")
    this.startGame()
}
  onSubmit() {
    for(let i = 0; i < this.currentTurn; i++) {
      if(this.userGuess[i] != this.pattern[i]) {
        alert("YOU LOST!");
        this.router.navigate(['/'])
      }
    }
    alert("you won!")
  }



}
