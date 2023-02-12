import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './budget/welcome/welcome-page.component';
import { MainComponent } from './budget/main/main.component';

const routes: Routes = [

  { path: 'welcome-page', component: WelcomePageComponent, pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: '**', redirectTo: 'welcome-page'}

];

@NgModule({
  imports: [RouterModule.forRoot( routes )],
  exports: [RouterModule]
})

export class AppRoutingModule { }
