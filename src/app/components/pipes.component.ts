import { Component } from '@angular/core';
import { LowerCasePipe } from '@angular/common';
import { FormattingPipesComponent } from './formattingPipes.component';
import { CustomPipeComponent } from './customPipe.component';

@Component({
  selector: 'app-pipes',
  template: ` {{ username | lowercase }}
    <app-formatting-pipes />
    <custom-pipe />`,
  standalone: true,
  imports: [LowerCasePipe, FormattingPipesComponent, CustomPipeComponent],
})
export class PipesComponent {
  username = 'yOunGTECh';
}
