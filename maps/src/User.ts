import faker from '@faker-js/faker';
import { Mappable } from './CustomMap';

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    // right now location is undefined, no initialization has been done yet
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }

  }

  markerContent(): string {
    return `My name is ${this.name} . Nice to meet you!`;
  }
}