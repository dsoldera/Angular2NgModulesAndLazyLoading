import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { TruckSectionComponent } from './truck.component';
import { TruckListComponent } from './truck-list/truck-list.component';
import { TruckDetailsComponent } from './truck-details/truck-details.component';

import { TruckResolveService } from '../services/truck-resolve.services';

const truckRoutes: Routes = [
  { path: '',
    component: TruckSectionComponent,
    children: [
      { path: 'list',
        component: TruckListComponent,
        resolve: {
          trucks: TruckResolveService
        }
       },
      { path: ':id/details', component: TruckDetailsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(truckRoutes)],
  exports: [RouterModule],
})

export class TruckRoutingModule { }

