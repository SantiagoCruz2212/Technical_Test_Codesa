import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/User.model';
import { ServicesService } from 'src/app/Services/services.service'; 

import Swal from 'sweetalert2';

@Component({
  selector: 'app-UserFormComponent',
  templateUrl: './UserFormComponent.component.html',
  styleUrls: ['./UserFormComponent.component.css']
})
export class UserFormComponentComponent implements OnInit {
  
  newUser: User = {
    id: 0,
    nombre: '',
    email: '',
    telefono: '',
    direccion: ''
  };

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

  constructor(private Service: ServicesService) { }
  
  @Output() usuarioAgregado = new EventEmitter<User>();
  @Output() CloseForm = new EventEmitter();
  
  ngOnInit() {
  }

  addUser() {
    if (this.newUser.nombre && this.newUser.email && this.newUser.direccion && this.newUser.telefono) {
      this.Service.postUser(this.newUser)
      this.Toast.fire({
        icon: 'success',
        title: 'Usuario creado exitosamente.'
      })
      this.cleanForm();
      this.CloseForm.emit();
    }
    else{
      this.Toast.fire({
        icon: 'error',
        title: 'Ingrese datos validos en el formulario.'
      })
    }
  }

  cleanForm(){
    this.newUser = {
      id: 0,
      nombre: '',
      email: '',
      telefono: '',
      direccion: ''
    };
  }

  closeForm(){
    this.cleanForm();
    this.CloseForm.emit();
  }
}
