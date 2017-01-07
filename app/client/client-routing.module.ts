import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { ClientComponent }   from './client.component';
import { ClientDetailsComponent } from './client-details/client-details.component';

import { UserResolveService } from '../services/user-resolve.services';


const ClientRoutes: Routes = [
  { path: '',
    component: ClientComponent,
    children: [
      { path: ':id',
        component: ClientDetailsComponent,
        resolve: {
          client: UserResolveService
        }
       }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(ClientRoutes)],
  exports: [RouterModule]
})

export class ClientRoutingModule {}
