import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-phone-number',
  templateUrl: './phone-number.component.html',
  styleUrls: ['./phone-number.component.css']
})
export class PhoneNumberComponent implements OnInit {
  sliderValue: number = 0;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  submitSliderValue(){
    
  }
}
