import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { APIService } from './shared/services/apiService';
import { HelpComponent } from './help/help.component';

@NgModule({
  //Add Components
  declarations: [
    AppComponent,
    HomeComponent,
    HelpComponent
  ],
  //Add Modules
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  //Add Services
  providers: [APIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
