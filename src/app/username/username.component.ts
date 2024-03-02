import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { user } from 'src/user';

@Component({
  selector: 'app-username',
  standalone: true,
  imports: [],
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent {
  constructor(private userService: UserService){}

  onSubmit(username: string){
    const newUser: user = {
      id: username,
      username: username,
      password: '',
      phonenumber: 0
    };
    this.userService.add(newUser);
  }
}