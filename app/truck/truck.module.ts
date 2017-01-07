import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';

/** Components */
import { TruckSectionComponent }   from './truck.component';
import { TruckListComponent } from './truck-list/truck-list.component';
import { TruckDetailsComponent } from './truck-details/truck-details.component';

/** Services */
import { TruckService } from '../services/truck.services';
import { TruckResolveService } from '../services/truck-resolve.services';

/** Routing */
import { TruckRoutingModule } from './truck-routing.module';


@NgModule({
  imports: [
    CommonModule,
    TruckRoutingModule
  ],
  exports: [],
  declarations: [
    TruckSectionComponent,
    TruckListComponent,
    TruckDetailsComponent
  ],
  providers: [
    TruckService,
    TruckResolveService
  ],
})

export class TruckModule { }
