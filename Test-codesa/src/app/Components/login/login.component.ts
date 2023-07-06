import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username : string = "";
  password : string = "";
  
  Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  constructor(private router: Router, private authService: AuthService) { }
  
  ngOnInit() {
  }

  login() {
    const isAuthenticated = this.authService.login(this.username, this.password);
    
    if (isAuthenticated) {
      this.Toast.fire({
        icon: 'success',
        title: 'Iniciando Sesión'
      })
      setTimeout(() => {
        this.router.navigate(['/home']);
      }, 1500);
    } else {
      this.Toast.fire({
        icon: 'error',
        title: 'Usuario y/o Contraseña Incorecta.'
      })
    }
  }
}
