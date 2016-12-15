import { Component, OnInit } from '@angular/core';
import { Http} from '@angular/http';
import { User } from '../models/users.model';
import 'rxjs/add/operator/map';

@Component({
  moduleId: module.id,
  selector: 'home',
  templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {

  users: User[];

  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get('http://reqres.in/api/users')
    .map(res => res.json().data)
    .subscribe(users => this.users = users);
    console.log(this.users);
  }
}
