import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { PasswordStrengthService } from './essenceTask.service';

@Component({
  selector: 'app-essence-task',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: `./essenceTask.component.html`,
  styleUrl: './essenceTask.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EssenceTaskComponent {
  hide = true;
  clickEvent(event: MouseEvent) {
    this.hide = !this.hide;
    event.stopPropagation();
  }

  profileForm = new FormGroup({
    password: new FormControl('', Validators.required),
  });

  sectionClasses = ['gray', 'gray', 'gray'];
  constructor(private passwordStrengthService: PasswordStrengthService) {}

  checkPass() {
    const password = this.profileForm.value.password ?? '';
    const strength = this.passwordStrengthService.calculateStrength(password);

    switch (strength) {
      case 'empty':
        this.sectionClasses = ['gray', 'gray', 'gray'];
        break;
      case 'short':
        this.sectionClasses = ['red', 'red', 'red'];
        break;
      case 'easy':
        this.sectionClasses = ['red', 'gray', 'gray'];
        break;
      case 'medium':
        this.sectionClasses = ['yellow', 'yellow', 'gray'];
        break;
      case 'strong':
        this.sectionClasses = ['green', 'green', 'green'];
        break;
    }
  }
}
