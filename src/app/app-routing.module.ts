import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './budget/welcome/welcome-page.component';
import { MainComponent } from './budget/main/main.component';
import { ModalComponent } from './budget/modal/modal.component';

const routes: Routes = [

  { path: 'welcome-page', component: WelcomePageComponent, pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'modal', component: ModalComponent},
  { path: '**', redirectTo: 'welcome-page'}

];

@NgModule({
  imports: [RouterModule.forRoot( routes )],
  exports: [RouterModule]
})

export class AppRoutingModule { }
