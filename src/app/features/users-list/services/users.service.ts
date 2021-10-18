import { HttpClient, HttpParams } from '@angular/common/http';
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
    const httpParams: HttpParams = new HttpParams()
      .set('fullName_like', searchText ? searchText : '')
    return this.http.get<User[]>(`${this.endpointUrl}/users`, { params: httpParams })
  }

  public deleteUser(userId: string): Observable<string> {
    return this.http.delete<string>(`${this.endpointUrl}/users/${userId}`)
  }
}
