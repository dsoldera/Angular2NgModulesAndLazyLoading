import { Injectable } from '@angular/core';
import { Truck } from '../models/truck.model';

const trucksPromise: Promise<Truck[]> = Promise.resolve ([
  {
    id: 1,
    name: 'Dog Truck',
    model: '2011',
    type_food: 'hot dog'
  },
  {
    id: 2,
    name: 'Tapioca Truck',
    model: '2013',
    type_food: 'brazilian tapioca'
  },
  {
    id: 3,
    name: 'MacChese Truck',
    model: '2006',
    type_food: 'pasta and cheese'
  }
]);

@Injectable()
export class TruckService {

  constructor() { }

  getTrucks(): Promise<Truck[]> {
    return trucksPromise;
  }

  getTruck(id: number): Promise<Truck>  {
    return trucksPromise
      .then(trucks => {
        return trucks.find(truck => truck.id == id);
      }).catch((error) => {
        console.error('Error fetching trucks', error);
      });
  }

}
