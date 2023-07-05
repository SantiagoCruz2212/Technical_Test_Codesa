import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/User.model';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private url:string  = 'http://localhost:3000';//url de ejemplo

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    let direction = this.url+'/Users';
    return this.http.get<User[]>(direction);
  }

  postUser(usuario: User): Observable<User> {
    let direction = this.url+'/Create';
    return this.http.post<User>(direction, usuario);
  }

  putUser(usuario: User): Observable<User> {
    let direction = this.url+'/putUser';
    return this.http.put<User>(direction, usuario);
  }

  deleteUser(id: number): Observable<any> {
    let direction = this.url+'/Delete/'+id.toString();
    return this.http.delete<any>(direction);
  }
}