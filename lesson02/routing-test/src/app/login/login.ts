import {Component, inject, model, signal} from '@angular/core';
import {AuthService} from '../auth-service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  private authService = inject(AuthService)

  loginResult = signal(this.authService.isAuthenticated())
  error = signal("")

  username = ""
  password = ""

  login() {
    console.log("Loggin in with ", this.username, this.password)
    const result = this.authService.login(this.username, this.password)
    if (result) {
      this.loginResult.set(true)
      this.error.set("")
    } else {
      this.error.set("Error logging in!")
    }
  }

  logout() {
    this.authService.logout()
  }
}
