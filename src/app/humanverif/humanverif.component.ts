import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-humanverif',
  templateUrl: './humanverif.component.html',
  styleUrls: ['./humanverif.component.css']
})
export class HumanverifComponent implements OnInit {
  totalTime: number;
  constructor(private us:UserService) {
      this.totalTime = us.getTime(); 
   }

  ngOnInit(): void {
  }

  nextPage() {
    
  }
}
