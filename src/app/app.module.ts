import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './budget/main/main.component';
import { PanelComponent } from './budget/panel/panel.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
