import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { PasswordpageComponent } from './passwordpage/passwordpage.component';
import { PhoneNumberComponent } from './phone-number/phone-number.component';
import { UsernameComponent } from './username/username.component';
import { HumanverifComponent } from './humanverif/humanverif.component';
import { BopitpageComponent } from './bopitpage/bopitpage.component';
import { TimeBombComponent } from './time-bomb/time-bomb.component';

const routes: Routes = [
  {path: '', component: MainpageComponent},
  {path:'password', component: PasswordpageComponent},
  {path:'username', component: UsernameComponent},
  {path:'phonenumber', component:PhoneNumberComponent},
  {path:'humanverif', component:HumanverifComponent},
  {path:'humanverif', component:HumanverifComponent},
  {path:'bopit', component:BopitpageComponent},
  {path:'humanverif', component:HumanverifComponent},
  {path:'bomb', component:TimeBombComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
