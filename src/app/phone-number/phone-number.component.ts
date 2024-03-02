import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../user.service';
import { NgModel } from '@angular/forms';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-phone-number',
  templateUrl: './phone-number.component.html',
  styleUrls: ['./phone-number.component.css']
})
export class PhoneNumberComponent implements OnInit {
  sliderValue: number = 0;
  constructor(private userService: UserService, private router:Router) {
    
   }

  ngOnInit(): void {
  }

  submitSliderValue(){
    console.log('Slider Value:', this.sliderValue);
    this.userService.updatePhone(this.sliderValue)
    console.log(this.userService.get())
    this.router.navigate(["/humanverif"])
  }

  
}
