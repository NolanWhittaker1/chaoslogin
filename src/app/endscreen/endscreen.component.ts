import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-endscreen',
  templateUrl: './endscreen.component.html',
  styleUrls: ['./endscreen.component.css']
})
export class EndscreenComponent implements OnInit {
  totalTime: number;
  username: string;
  constructor(private us:UserService, private router:Router) {
    this.totalTime = us.getTime(); 
    this.username = us.get();
 }

  ngOnInit(): void {

  }

}
