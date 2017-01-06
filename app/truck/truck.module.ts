import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';

/** Components */
import { TruckComponent }   from './truck.component';
import { TruckListComponent } from './truck-list/truck-list.component';
import { TruckDetailsComponent } from './truck-details/truck-details.component';

/** Services */
import { TruckService } from '../services/truck.services';

/** Routing */
import { TruckRoutingModule } from './truck-routing.module';


@NgModule({
  imports: [
    CommonModule,
    TruckRoutingModule
  ],
  exports: [],
  declarations: [
    TruckComponent,
    TruckListComponent,
    TruckDetailsComponent
  ],
  providers: [
    TruckService
  ],
})

export class TruckModule { }
