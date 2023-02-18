import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './budget/main/main.component';
import { PanelComponent } from './budget/panel/panel.component';
import { RouterModule } from '@angular/router';
import { WelcomePageComponent } from './budget/welcome/welcome-page.component';
import { ModalComponent } from './_modal/modal.component';
import { BudgetListComponent } from './budget-list/budget-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PanelComponent,
    WelcomePageComponent,
    ModalComponent,
    BudgetListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
