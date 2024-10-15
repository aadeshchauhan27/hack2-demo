import { Component } from '@angular/core';
import { AnalyticsService } from '../../services';
import { Router } from '@angular/router';
import { GoogleAnalyticsService } from 'ngx-google-analytics';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrl: './design.component.css',
})
export class DesignComponent {
  constructor(
    protected gaService: GoogleAnalyticsService,
    private router: Router
  ) {}
  ngonInit() {
    this.gaService.pageView('/teste', 'Teste de Title');
  }
  navigateToComponent2() {
    this.gaService.event('submit', 'user_clicked', 'Home button clicked');
    this.router.navigate(['/homepage']);
  }
}
