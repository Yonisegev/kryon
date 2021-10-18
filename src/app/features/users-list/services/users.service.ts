import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
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
      .pipe(
        catchError(this.handleError)
      )
  }

  public getUserById(userId: string): Observable<User | null> {
    const httpParams: HttpParams = new HttpParams()
      .set('id', userId)
    return this.http.get<User[]>(`${this.endpointUrl}/users`, { params: httpParams }).pipe(map((users => {
      let userToReturn: User | null = null
      users?.forEach(user => { userToReturn = user })
      return userToReturn
    })))
  }

  public deleteUser(userId: string): Observable<string> {
    return this.http.delete<string>(`${this.endpointUrl}/users/${userId}`)
      .pipe(
        catchError(this.handleError)
      )
  }

  private handleError(err: any) {
    let errorMessage: string = 'Something went wrong. Please try again.'
    console.error(err);
    return throwError(errorMessage);
  }
}
