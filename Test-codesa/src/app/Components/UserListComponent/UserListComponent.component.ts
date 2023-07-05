import { Component, OnInit, Input} from '@angular/core';
import { User } from 'src/app/models/User.model';
import { ServicesService } from 'src/app/Services/services.service'; 
@Component({
  selector: 'app-UserListComponent',
  templateUrl: './UserListComponent.component.html',
  styleUrls: ['./UserListComponent.component.css']
})

export class UserListComponentComponent implements OnInit {
  
  users: User[] = [];

  
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
        console.log(error);
      }
    )
  }

  deleteUser(id : number) {
    this.Service.deleteUser(id).subscribe(
      (response) => {
        console.log('Usuario eliminado exitosamente');
      },
      (error) => {
        console.log('Error al eliminar el usuario:', error);
      }
    );
  }

  
  updateUser(user : User){
    this.Service.putUser(user).subscribe(
      updatedUser => {
        console.log('Usuario actualizado:', updatedUser);
      },
      error => {
        console.error('Error al actualizar el usuario:', error);
      }
    )
  }
}