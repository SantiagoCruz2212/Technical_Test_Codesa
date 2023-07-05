import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username : string = "";
  password : string = "";
  
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  login() {
    const isAuthenticated = this.authService.login(this.username, this.password);
    
    if (isAuthenticated) {
      this.router.navigate(['/home']);
    } else {
      alert("Usuario y/o contraseña incorrecta");
    }
  }
}
