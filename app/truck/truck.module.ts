import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';

import { TruckComponent }   from './truck.component';
import { TruckListComponent } from './truck-list.component';
import { TruckDetailsComponent } from './truck-details.component';

import { TruckRoutingModule } from './truck-routing.module';


@NgModule({
  imports: [CommonModule, TruckRoutingModule],
  exports: [],
  declarations: [TruckComponent, TruckListComponent, TruckDetailsComponent],
  providers: [],
})

export class TruckModule { }
