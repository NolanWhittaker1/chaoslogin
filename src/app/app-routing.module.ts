import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { PasswordpageComponent } from './passwordpage/passwordpage.component';
import { PhoneNumberComponent } from './phone-number/phone-number.component';
import { UsernameComponent } from './username/username.component';
import { HumanverifComponent } from './humanverif/humanverif.component';
import { TimeBombComponent } from './time-bomb/time-bomb.component';
import { EndScreenComponent } from './end-screen/end-screen.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';

const routes: Routes = [
  {path: '', component: MainpageComponent},
  {path:'password', component: PasswordpageComponent},
  {path:'username', component: UsernameComponent},
  {path:'phonenumber', component:PhoneNumberComponent},
  {path:'humanverif', component:HumanverifComponent},
  {path:'bomb', component:TimeBombComponent},
  {path:'end', component:EndScreenComponent},
  {path:'leaderboard', component:LeaderboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
