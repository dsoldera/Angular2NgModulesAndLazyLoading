import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';

/** Components */
import { ClientComponent }   from './client.component';

/** Services */
import { UserService } from '../services/user.services';

/** Routing */
import { ClientRoutingModule } from './client-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ClientRoutingModule
  ],
  exports: [],
  declarations: [
    ClientComponent
  ],
  providers: [
    UserService
  ],
})
export class ClientModule { }
