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

   getTime() {
      const currentTime = new Date().getTime();
      const lastUserTimer = this.users[this.users.length - 1].timer.getTime();
      const timeDifferenceInMillis = currentTime - lastUserTimer;
    
      return timeDifferenceInMillis;
    }
   

}
