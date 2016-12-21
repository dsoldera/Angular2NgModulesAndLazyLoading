import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app',
    template: `
              <nav class="navbar navbar-default">
              <div class="navbar-header">
              <ul class="nav navbar-nav">
              <li class="nav-item" routerLinkActive="active"><a class="nav-link" [routerLink]="['/home']">Home</a></li>
              <li class="nav-item" routerLinkActive="active"><a class="nav-link" [routerLink]="['/truck']">Food Truck</a><li>
              </ul>
              </div>
              </nav>
            <router-outlet></router-outlet>`
})

export class AppComponent {}
