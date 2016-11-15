import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app',
    template: `
              <nav><ul>
              <li><a [routerLink]="['/']">Home</a></li>
              </ul></nav>
              <router-outlet></router-outlet>` 
})

export class AppComponent {}
