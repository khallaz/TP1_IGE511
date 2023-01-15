import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityComponent } from './page/activity/activity.component';
import { HomeComponent } from './page/home/home.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'activity', component: ActivityComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
