import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DesignComponent } from './components/design/design.component';
import {
  NgxGoogleAnalyticsModule,
  NgxGoogleAnalyticsRouterModule,
} from 'ngx-google-analytics';

@NgModule({
  declarations: [AppComponent, HomeComponent, DesignComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxGoogleAnalyticsModule.forRoot('G-G6X6WC1QC4"'),
    NgxGoogleAnalyticsRouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
