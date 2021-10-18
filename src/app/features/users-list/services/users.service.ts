import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private readonly endpointUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }

  public getUsers(searchText?: string): Observable<User[]> {
    // Todo: Implement request to mock server
    return this.http.get<User[]>(`${this.endpointUrl}/users`)
  }

  public deleteUser(userId: string): Observable<void> {
    // Todo: Implement request to mock server
    return this.http.delete<void>(`${this.endpointUrl}/users`)
  }
}
