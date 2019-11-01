import { Injectable } from '@angular/core';
import { User } from '../components/others/interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  user: User
}
