import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { LoginResponse } from '../components/others/LoginResponse';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private _http: HttpClient,
  ) { }

  api_url: String = 'http://127.0.0.1'

  login(user:string, password: string): Observable<LoginResponse>{
    password = btoa(password)
    return this._http.post<LoginResponse>('${this.api_url}/auth/login', {
      user: user,
      password: password
    })
  }
}
