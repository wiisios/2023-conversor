import { Component, OnInit, inject } from '@angular/core';
import { UserForUpdate } from 'src/app/core/interfaces/user';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {
  authServices = inject(AuthService);
  usersServices = inject(UserService);



  user: UserForUpdate = {
    userId: 0,
    userName: '',
    typeUser: '',
    roleid: 0
  };

  async editarUsuario(tipoSuscripcion: string) {
    this.user.typeUser = tipoSuscripcion;

    try {
      const res = await this.usersServices.edit(this.user);

      if (res) {
        console.log('Solicitud PUT exitosa', res);
      } else {
        console.error('La solicitud PUT no fue exitosa', res);
      }
    } catch (error) {
      console.error('Error al realizar la solicitud PUT', error);
    }
  }

  ngOnInit(): void {

    const userid = this.authServices.userid;

    this.usersServices.getById(userid).then(users => {
      this.user = users
    });
  }
}
