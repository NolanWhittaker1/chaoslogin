import { Component, OnInit } from '@angular/core';
import { CheckboxRequiredValidator, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';
import { __values } from 'tslib';
@Component({
  selector: 'app-passwordpage',
  templateUrl: './passwordpage.component.html',
  styleUrls: ['./passwordpage.component.css']
})
export class PasswordpageComponent implements OnInit {
  prompts: any[] = [];
  currentPrompts: any[] = [];
  finalizedPrompts: any[] = [];
  passwordControl = new FormControl();
  constructor(private router:Router) {
    this.prompts = [
      {
        question: "Add today's Wordle answer?",
        answer: "urban",
        answered: "red"
      },
      {
        question: "Add the year of Faker's first worlds win?",
        answer: "2013",
        answered: "red"
      },
      {
        question: "Add a 4-letter country starting with P?",
        answer: "peru",
        answered: "red"
      },
      {
        question: "Add the solution to this riddle: Whats on time but never arrives?",
        answer: "tomorrow",
        answered: "red"
      },
      {
        question: "Add the solution to this Equation: 4 + 3*(4-3)/3?",
        answer: "5",
        answered: "red"
      }
    ];
    this.shuffleArray(this.prompts);
    this.currentPrompts.push(...this.prompts.slice(0,1));
    this.currentPrompts[0] = {
      question: "Please make it above 5 characters!",
      answer: "5",
      answered: "red"
    }
   }

   ngOnInit(): void {
    this.passwordControl.valueChanges.pipe(debounceTime(500)).subscribe((value) => {
        this.finalizedPrompts = [];
        this.finalizedPrompts.push({
          question: "Please make it above 5 characters!",
          answer: "5",
          answered: "red"
        });
        if(value.length > 4) {
          this.finalizedPrompts[0].answered = "green";
        } else {
          this.finalizedPrompts[0].answered = "red";
        }

        console.log(value.length)

        for(let i = 1; i < this.currentPrompts.length; i++) {
          if(value.toLowerCase().includes(this.currentPrompts[i].answer)) {
            console.log("Value includes: " + this.currentPrompts[i].answer)
            this.currentPrompts[i].answered = "green";
            this.finalizedPrompts.push(this.currentPrompts[i])
            
          }
        }

        for(let i = 1; i < this.prompts.length; i++) {
          if(!value.toLowerCase().includes(this.prompts[i].answer)) {
              console.log("Broke at: " + this.prompts[i].answer)
              this.currentPrompts.push(this.prompts[i])
              this.currentPrompts[i].answered = "red";
              this.finalizedPrompts.push(this.currentPrompts[i])
              break;
          }
        }

        this.currentPrompts = this.finalizedPrompts;
        console.log(this.currentPrompts)
    });
  
  }

  private shuffleArray(array: any[]): void {
    // Fisher-Yates algorithm for shuffling
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  nextPage() {
    this.router.navigate(["/phonenumber"])
  }
}
