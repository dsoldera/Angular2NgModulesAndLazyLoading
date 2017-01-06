import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', loadChildren: 'app/home/home.module#HomeModule' },
  { path: 'truck', loadChildren: 'app/truck/truck.module#TruckModule' },
  { path: 'my-account', loadChildren: 'app/client/client.module#ClientModule' },
  { path: '**', component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

// export the Module Routes
export class AppRoutingModule {}

// to export all the components used on the Routes
export const routableComponents:any = [
  NotFoundComponent
]
