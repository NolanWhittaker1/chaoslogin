import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { PasswordpageComponent } from './passwordpage/passwordpage.component';
import { PhoneNumberComponent } from './phone-number/phone-number.component';
import { UsernameComponent } from './username/username.component';
import { HumanverifComponent } from './humanverif/humanverif.component';
import { BopitpageComponent } from './bopitpage/bopitpage.component';

const routes: Routes = [
  {path: '', component: MainpageComponent},
  {path:'password', component: PasswordpageComponent},
  {path:'username', component: UsernameComponent},
  {path:'phonenumber', component:PhoneNumberComponent},
  {path:'humanverif', component:HumanverifComponent},
  {path:'bopit', component:BopitpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
