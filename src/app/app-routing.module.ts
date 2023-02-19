import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './budget/welcome/welcome-page.component';
import { MainComponent } from './budget/main/main.component';
import { ModalComponent } from './_modal/modal.component';
import { BudgetListComponent } from './budget-list/budget-list.component';

const routes: Routes = [

  { path: 'welcome-page', component: WelcomePageComponent, pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'modal', component: ModalComponent},
  { path: 'budget-list', component: BudgetListComponent},
  { path: '**', redirectTo: 'welcome-page'}

];

@NgModule({
  imports: [RouterModule.forRoot( routes )],
  exports: [RouterModule]
})

export class AppRoutingModule { }
