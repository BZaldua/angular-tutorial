import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent {

  constructor() { }

  // VARIABLES
  isLogged: boolean = false
  level: number = 5

  showMessage() {
    alert('Yes, you are a super user. Congrats!')
  }

}
