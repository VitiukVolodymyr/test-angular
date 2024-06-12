import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PasswordStrengthService {
  calculateStrength(password: string): string {
    if (!password) return 'empty';
    if (password.length < 8) return 'short';

    const hasLetters = /[a-zA-Z]/.test(password);
    const hasDigits = /[0-9]/.test(password);
    const hasSymbols = /[^a-zA-Z0-9]/.test(password);

    if (hasLetters && hasDigits && hasSymbols) return 'strong';
    if (
      (hasLetters && hasSymbols) ||
      (hasLetters && hasDigits) ||
      (hasDigits && hasSymbols)
    )
      return 'medium';

    return 'easy';
  }
}
