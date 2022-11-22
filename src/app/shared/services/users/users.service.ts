import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../../Interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private myHttpClient: HttpClient) { }

  getUsers() {
    return this.myHttpClient.get(environment.BaseUrl + "/users")
  }

  AddUser(data: User) {
    return this.myHttpClient.post(environment.BaseUrl + "/users", data)
  }
}
