import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { filter } from 'rxjs';
import { AnalyticsService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'hack-demo2';
  constructor(private router: Router, private gaService: AnalyticsService) {}
}
