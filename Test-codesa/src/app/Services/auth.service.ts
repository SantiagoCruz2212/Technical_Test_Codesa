import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated = false;

  login(username: string, password: string): boolean {
    if (username === 'DevSantiago' && password === 'DevSantiago*123') {
      this.isAuthenticated = true;
      return true;
    } else {
      this.isAuthenticated = false;
      return false;
    }
  }
  logout(): void {
    this.isAuthenticated = false;
  }
}
