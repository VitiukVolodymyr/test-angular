import { Component } from '@angular/core';
import { CarService } from './../service/car.service';

@Component({
  selector: 'app-car',
  template: '<p>Car listing: {{display}} </p>',
  standalone: true,
})
export class CarComponent {
  display = '';

  // Inject-based dependency injection
  //   carService = inject(CarService);
  // constructor() {
  // this.display = this.carService.getCars().join(' ⭐️ ');
  //   }

  // Constructor-based dependency injection
  constructor(private carService: CarService) {
    this.display = this.carService.getCars().join(' ⭐️ ');
  }
}
