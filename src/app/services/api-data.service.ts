import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserData } from '../components/others/dataInterface';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {

  constructor(
    private http:HttpClient
  ) { }

  getData(): Observable<UserData[]>{
    return this.http.get<UserData[]>('https://jsonplaceholder.typicode.com/todos/')
  }
}
