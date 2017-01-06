import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { TruckComponent } from './truck.component';
import { TruckListComponent } from './truck-list/truck-list.component';
import { TruckDetailsComponent } from './truck-details/truck-details.component';


const truckRoutes: Routes = [
  { path: '', component: TruckComponent },
  { path: 'list', component: TruckListComponent },
  { path: 'details', component: TruckDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(truckRoutes)],
  exports: [RouterModule],
})

export class TruckRoutingModule { }

