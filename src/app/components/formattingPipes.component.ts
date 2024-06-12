import { Component } from '@angular/core';
import { DecimalPipe, DatePipe, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-formatting-pipes',
  template: `
    <ul>
      <!-- What's that format? The parameter for the DecimalPipe is called digitsInfo, this parameter uses the format:  -->
      <li>Number with "decimal" {{ num | number : '3.2-2' }}</li>
      <!-- https://angular.dev/api/common/DatePipe?tab=usage-notes -->
      <li>Date with "date" {{ birthday | date : 'medium' }}</li>
      <!--  -->
      <li>Currency with "currency" {{ cost | currency }}</li>
    </ul>
  `,
  standalone: true,
  imports: [DecimalPipe, DatePipe, CurrencyPipe],
})
export class FormattingPipesComponent {
  num = 103.1234;
  birthday = new Date(2023, 3, 2);
  cost = 4560.34;
}
