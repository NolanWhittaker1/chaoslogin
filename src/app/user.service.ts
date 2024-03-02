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

}
