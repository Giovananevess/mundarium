import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavbarComponent } from './page/navbar/navbar.component';
import { HomeComponent } from './page/home/home.component';
import { ChaleFujiComponent } from './page/chale-fuji/chale-fuji.component';
import { AboutUsComponent } from './page/about-us/about-us.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'chale-fuji', component: ChaleFujiComponent },
  { path: 'aboout-us', component: AboutUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
