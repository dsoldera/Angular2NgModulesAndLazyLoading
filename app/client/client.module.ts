import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';

/** Components */
import { ClientComponent }   from './client.component';
import { ClientDetailsComponent } from './client-details/client-details.component';

/** Services */
import { UserService } from '../services/user.services';
import { UserResolveService } from '../services/user-resolve.services';

/** Routing */
import { ClientRoutingModule } from './client-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ClientRoutingModule
  ],
  exports: [],
  declarations: [
    ClientComponent,
    ClientDetailsComponent
  ],
  providers: [
    UserService,
    UserResolveService
  ],
})
export class ClientModule { }
