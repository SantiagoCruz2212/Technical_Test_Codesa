import { Component, OnInit, Input} from '@angular/core';
import { User } from 'src/app/models/User.model';
import { ServicesService } from 'src/app/Services/services.service'; 

import Swal from 'sweetalert2';

@Component({
  selector: 'app-UserListComponent',
  templateUrl: './UserListComponent.component.html',
  styleUrls: ['./UserListComponent.component.css']
})

export class UserListComponentComponent implements OnInit {
  
  users: User[] = [];

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
  
  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this.Service.getUsers().subscribe(
      (response) => {
        this.users = response;
      },
      (error) => {
        this.Toast.fire({
          icon: 'error',
          title: 'No se pudieron obtener los datos de usuarios.'
        })
        console.log(error);
      }
    )
  }

  deleteUser(id : number) {
    this.Service.deleteUser(id).subscribe(
      (response) => {
        this.Toast.fire({
          icon: 'success',
          title: 'Usuario eliminado exitosamente'
        })
        console.log('Usuario eliminado exitosamente');
      },
      (error) => {
        this.Toast.fire({
          icon: 'error',
          title: 'Error al eliminar el usuario.'
        })
        console.log('Error al eliminar el usuario:', error);
      }
    );
  }

  
  updateUser(user : User){
    this.Service.putUser(user).subscribe(
      updatedUser => {
        this.Toast.fire({
          icon: 'success',
          title: 'Usuario actualizado exitosamente'
        })
        console.log('Usuario actualizado:', updatedUser);
      },
      error => {
        this.Toast.fire({
          icon: 'error',
          title: 'Error al actualizar el usuario.'
        })
        console.error('Error al actualizar el usuario:', error);
      }
    )
  }
}