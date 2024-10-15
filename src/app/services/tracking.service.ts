import { Injectable } from '@angular/core';

declare var gtag: any;

@Injectable({ providedIn: 'root' })
export class AnalyticsService {
  public sendPageView(url: string) {
    gtag('event', 'page_view', {
      page_path: url,
    });
  }

  public sendEvent(
    eventName: string,
    eventCategory: string,
    eventLabel: string,
    eventValue?: number
  ) {
    gtag('event', eventName, {
      event_category: eventCategory,
      event_label: eventLabel,
      value: eventValue,
    });
  }
}
