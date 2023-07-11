import { Component } from '@angular/core';
import { SummaryDesSam } from '../summary-list/summary-list-description_sample';
import { SummaryDes } from '../summary-list/summary-list-description-';
import { SummarySam } from '../summary-list/summary-list_sample';
import { Summary } from '../summary-list/summary-lists';

import { registerLocaleData } from '@angular/common';
import localeKk from '@angular/common/locales/kk';
registerLocaleData(localeKk, 'kk');

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {
  ngOnInit(): void {

  }
  summaryDes = SummaryDes[0];
  summary = Summary[0];
  link = SummaryDes[0].img
}
