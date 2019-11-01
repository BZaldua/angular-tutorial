import { Component } from '@angular/core';
import { User, UserType } from '../others/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'angular-tutorial';

  // Interfaces
  users:User[] = [
    {
      ID: 0,
      Name: 'Object',
      Surname: 'Creation',
      Nick: 'interfaces',
      Email: 'random@mail.com',
      Password: '123456',
      Type: UserType.Client // Enum
    },
    {
      ID: 1,
      Name: 'Random',
      Surname: 'User',
      Nick: 'Creation',
      Email: 'random@mail.com',
      Password: '123456',
      Type: UserType.Admin
    },
  ]

  // Casting
  vipUser:User = <User>{
    ID: 2,
    Name: 'Vip',
    Surname: 'User',
    Nick: 'Creation',
    Email: 'random@mail.com',
    Password: '123456',
    Type: UserType.Other
  }

  show(): void {
    console.log(this.vipUser.Name);
  }
}
