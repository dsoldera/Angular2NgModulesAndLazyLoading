import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { ClientComponent }   from './client.component';

const ClientRoutes: Routes = [
  { path: '', component: ClientComponent }
];

@NgModule({
  imports: [RouterModule.forChild(ClientRoutes)],
  exports: [RouterModule]
})

export class ClientRoutingModule {}
