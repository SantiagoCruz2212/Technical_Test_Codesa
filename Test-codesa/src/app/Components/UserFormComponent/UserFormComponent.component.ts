import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/User.model';
import { ServicesService } from 'src/app/Services/services.service'; 

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

  constructor(private Service: ServicesService) { }
  
  @Output() usuarioAgregado = new EventEmitter<User>();
  @Output() CloseForm = new EventEmitter();
  
  ngOnInit() {
  }

  addUser() {
    if (this.newUser.nombre && this.newUser.email) {
      this.Service.postUser(this.newUser)
      this.cleanForm();
      this.CloseForm.emit();
    }
    else{
      alert("Ingrese datos validos en el formulario ");
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
