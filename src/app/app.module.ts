import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeriodicTableComponent } from './periodic-table/periodic-table.component';
import { PeriodicTableElementComponent } from './periodic-table-element/periodic-table-element.component';

@NgModule({
  declarations: [
    AppComponent,
    PeriodicTableComponent,
    PeriodicTableElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
