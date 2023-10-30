import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Pages
import { GridComponent } from './pages/gird/grid.component';
import { ConfigComponent } from './pages/config/config.component';

@NgModule({
  declarations: [
    AppComponent,
    // Pages
    GridComponent,
    ConfigComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
