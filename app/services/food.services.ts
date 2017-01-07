import { Injectable } from '@angular/core';
import { Food } from './../models/food.model';

const foodPromise: Promise<Food[]> = Promise.resolve ([
  {
    id: 1,
    name: 'Hot Dog',
    country: 'USA',
    price: '10.00'
  },
  {
    id: 2,
    name: 'Tapioca',
    country: 'Brazil',
    price: '15.00'
  },
  {
    id: 3,
    name: 'Pasta',
    country: 'Italy',
    price: '20.00'
  }
]);


@Injectable()
export class FoodService {

  constructor() { }

  getAllFood(): Promise<Food[]> {
    return foodPromise;
  }

  getFood(id: number) {
    let food = foodPromise.then(allFood =>{
      return allFood.find(food => {
        return food.id === id;
      });
    });

    return food;
  }
}
