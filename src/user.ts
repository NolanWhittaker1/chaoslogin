import { Time } from "@angular/common";

export class user {
    id: string;
    username: string;
    password: string;
    phonenumber: number;
    timer: Date;

    constructor(username:string, password:string, phonenumber:number) {
        let temp = '';
        const Characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        for(let i = 0; i < 10; i++) {
          const randomIndex = Math.floor(Math.random() * Characters.length);
           temp += Characters.charAt(randomIndex)
        }
        this.id = temp;

        this.username = username;
        this.password = password;
        this.phonenumber = phonenumber;
        this.timer = new Date();
    }

}