import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <nav>
      <a routerLink="/">Home</a>
      |
      <a routerLink="/user">User</a>
      |
      <a routerLink="/template-form">Template-form</a>
      |
      <a routerLink="/reactive-form">Reactive-form</a>
      |
      <a routerLink="/injection">injection</a>
      |
      <a routerLink="/pipes">pipes</a>
    </nav>
    <router-outlet />
  `,
  standalone: true,
  imports: [RouterOutlet, RouterLink],
})
export class AppComponent {}
