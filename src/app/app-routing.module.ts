import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { PasswordpageComponent } from './passwordpage/passwordpage.component';

const routes: Routes = [
  {path: '', component: MainpageComponent},
  {path:'password', component: PasswordpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
