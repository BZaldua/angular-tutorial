import { Component, OnInit } from '@angular/core';
import { User, UserType } from '../others/interfaces';
import { ApiDataService } from 'src/app/services/api-data.service';
import { UserData } from '../others/dataInterface';
import { PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
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

  inputData: UserData[] = []
  page_size: number = 5
  page_number: number = 1
  pageSizeOptions = [5, 10, 20]

  constructor(
    private api:ApiDataService
  ){}

  ngOnInit(){
    this.api.getData().subscribe(data => this.inputData = data)
  }

  show(): void {
    console.log(this.vipUser.Name);
  }

  handlePage(e: PageEvent){
    this.page_size = e.pageSize
    this.page_number = e.pageIndex + 1
  }
}
