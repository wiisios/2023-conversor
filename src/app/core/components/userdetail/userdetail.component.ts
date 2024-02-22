import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { User } from '../../interfaces/user';
import { UserService } from '../../services/user.service';
import { UsereditComponent } from '../useredit/useredit.component';

@Component({
  selector: 'app-userdetail',
  standalone: true,
  imports: [CommonModule, UsereditComponent],
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.scss']
})
export class UserdetailComponent {
  userServices = inject(UserService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router)




  @Input({ required: true }) users !: User;


  BorrarContacto() {

    Swal.fire({
      title: 'Queres eliminar el usuario ' + this.users.userName,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.userServices.delete(this.users.userId).then(res => {

          if (res) {
            Swal.fire(
              'Eliminado!',
              'El usuario ' + this.users.userName + ' fue eliminado correctamente',
              'success'
            );
            this.router.navigate(['/crudusers']);
          } else {
            Swal.fire(
              'Error!',
              'El usuario ' + this.users.userName + ' no pudo ser eliminado',
              'error'
            )
          }
        });

      }
    })
  };
}
