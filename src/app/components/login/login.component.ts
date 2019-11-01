import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(
    // _ -> is just to identify that is a service
    private _user: UserService,
    private _api: ApiService,
  ) { }

  ngOnInit() {
  }

  login(){
    const user = (document.querySelector('#user') as HTMLInputElement).value
    const pass = (document.querySelector('#password') as HTMLInputElement).value
    this._api.login(user, pass).subscribe(response => {
      if (response.success){
        this._user.user =response.user
        console.log(this._user.user)
      }
    })
  }

}
