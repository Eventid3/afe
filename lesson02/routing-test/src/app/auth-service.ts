import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authenticated: boolean = false;

  login(username: string, password: string) {
    if (username === "user" && password === "pw") {
      this.authenticated = true;
      return true;
    } else {
      return false;
    }
  }

  logout() {
    this.authenticated = false;
  }

  isAuthenticated() {
    return this.authenticated;
  }
}
