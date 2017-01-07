import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Truck } from '../../models/truck.model';


@Component({
  moduleId: module.id,
  selector: 'truck-list',
  templateUrl: 'truck-list.component.html'
})

export class TruckListComponent implements OnInit {

  trucks: Truck[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.forEach(data => {
      this.trucks = data.trucks;
    });
   }
}
