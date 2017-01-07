import { Component, OnInit } from '@angular/core';
import { Client } from '../../models/client.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'client-details',
  templateUrl: 'client-details.component.html'
})

export class ClientDetailsComponent implements OnInit {
  client: Client;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.forEach((data: { client: Client }) => this.client = data.client);
  }
}
