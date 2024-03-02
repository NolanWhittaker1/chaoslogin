import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { user } from 'src/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-username',
  standalone: true,
  imports: [],
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent {
  constructor(private userService: UserService, private router:Router){}

  onSubmit(username: string){
    const newUser = new user(username, '', 0)
    this.userService.add(newUser);
    this.router.navigate(["/password"])
  }
}