import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScientistsComponent } from './scientists/scientists.component';
import { ScientistDetailComponent } from './scientist-detail/scientist-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ScientistsComponent,
    ScientistDetailComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
