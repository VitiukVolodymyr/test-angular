import { NgOptimizedImage, provideImgixLoader } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-user',
  template: `
    <p>Username: {{ username }}</p>
    <p>Preferred Framework:</p>
    <ul>
      <li>
        Static Image:
        <img
          ngSrc="/assets/logo.svg"
          alt="Angular logo"
          width="36"
          height="36"
        />
      </li>
      <li>
        Dynamic Image:
        <img ngSrc="logoUrl" [alt]="logoAlt" width="36" height="36" />
      </li>
    </ul>
    <div class="image-container">
      <!-- //Container div has 'position: "relative"' -->
      <img
        ngSrc="www.example.com/image.png"
        height="600"
        width="800"
        priority
      />
    </div>
  `,
  providers: [provideImgixLoader('https://my.base.url/')],
  imports: [NgOptimizedImage],
})
export class UserComponent {
  logoUrl = '/assets/logo.svg';
  logoAlt = 'Angular logo';
  username = 'youngTech';
}
