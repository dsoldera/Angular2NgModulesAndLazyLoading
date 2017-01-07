import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Truck } from '../models/truck.model';
import { TruckService } from './truck.services';

@Injectable()
export class TruckResolveService implements Resolve<Truck> {

  constructor(private service: TruckService) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.service.getTrucks().then(trucks => trucks);
  }
}
