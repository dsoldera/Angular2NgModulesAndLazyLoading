import { Injectable } from '@angular/core';
import { Client } from '../models/client.model';

const clientsPromise: Promise<Client[]> = Promise.resolve ([
  {
    id: 1,
    first_name: 'Danielle',
    last_name: 'Soldera',
    birth_date: '26/11'
  },
  {
    id: 2,
    first_name: 'Neidek',
    last_name: 'Soldera',
    birth_date: '10/12'
  },
  {
    id: 3,
    first_name: 'Antonio',
    last_name: 'Soldera',
    birth_date: '10/10'
  }
]);


@Injectable()
export class UserService {

  constructor() { }

  getClients(): Promise<Client[]> {
    return clientsPromise;
  }

  getClient(id: number): Promise<Client> {
    return clientsPromise
      .then(clients => {
        return clients.find(client => client.id == id);
      }).catch((error) => {
        console.error('Error fetching users', error);
      });
  }
}
