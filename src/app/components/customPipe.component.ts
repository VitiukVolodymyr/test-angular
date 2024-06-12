import { Component } from '@angular/core';
import { ReversePipe } from '../pipe/reverse.pipe';

@Component({
  selector: 'custom-pipe',
  template: ` Reverse Machine: {{ word | reverse }} `,
  standalone: true,
  imports: [ReversePipe],
})
export class CustomPipeComponent {
  word = 'You are a champion';
}
