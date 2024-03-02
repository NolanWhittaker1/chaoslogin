import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';

import { PhoneNumberComponent } from './phone-number/phone-number.component';
import { PasswordpageComponent } from './passwordpage/passwordpage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HumanverifComponent } from './humanverif/humanverif.component';
import { DurationFormatPipe } from './duration-format.pipe';



@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    PhoneNumberComponent,
    PasswordpageComponent,
    HumanverifComponent,
    DurationFormatPipe
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
