import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
<<<<<<< HEAD
import { PhoneNumberComponent } from './phone-number/phone-number.component';
=======
import { PasswordpageComponent } from './passwordpage/passwordpage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
>>>>>>> mainpagebranch

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
<<<<<<< HEAD
    PhoneNumberComponent
=======
    PasswordpageComponent
>>>>>>> mainpagebranch
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
