import { Injectable } from '@angular/core';
import { user } from 'src/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: Array<user> = [];
  
  constructor() {
      this.users = [];
   }

   get() {
    return this.users;
   }

   add(newUser: user){
    this.users.push(newUser);
   }

   updatePhone(phoneNumber: number){
      this.users[this.users.length-1].phonenumber = phoneNumber;
   }
   

}
