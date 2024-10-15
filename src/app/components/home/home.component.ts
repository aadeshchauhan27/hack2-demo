import { Component } from '@angular/core';
import { AnalyticsService } from '../../services';
import { Router } from '@angular/router';
import { GoogleAnalyticsService } from 'ngx-google-analytics';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(
    protected gaService: GoogleAnalyticsService,
    private router: Router
  ) {}
  ngonInit() {
    this.gaService.pageView('/teste', 'Teste de Title');
  }

  navigateToComponent2() {
    this.router.navigate(['/design']);
  }
}
