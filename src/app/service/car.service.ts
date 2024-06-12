import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CarService {
  cars = ['Sunflower GT', 'Flexus Sport', 'Sprout Mach One', 'Toyota Camry'];

  getCars(): string[] {
    return this.cars;
  }

  getCar(id: number) {
    return this.cars[id];
  }
}
