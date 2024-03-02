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

<<<<<<< HEAD
  submitSliderValue(){
    
=======
  onSubmit(){
>>>>>>> 6755351774402f940e236515530281cdd9f7af5d
  }
}
