import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app',
    template: `
            <nav>
              <a routerLink="home" routerLinkActive="active">Home</a>
              <a routerLink="truck" routerLinkActive="active">Food Truck</a>
              <a routerLink="credit" routerLinkActive="active">Credit</a>
            </nav>
            <router-outlet></router-outlet>`
})

export class AppComponent {}
