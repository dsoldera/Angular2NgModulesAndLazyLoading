import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Client } from '../models/client.model';
import { UserService } from './user.services';

@Injectable()
export class UserResolveService implements Resolve<Client>{

public client: Client;
  constructor(private service: UserService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot) {
    let id = route.params['id'];

    return this.service.getClient(id)
      .then((response) => {
        if (response) {
          return response;
        } else {
          this.router.navigate(['/home']);
          return false;
        }
      })
      .catch((error) => {
        console.error('Error fetching users', error);
      });
  }
}

