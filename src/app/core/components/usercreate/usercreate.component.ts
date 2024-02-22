import { Component, EventEmitter, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generarMensajeExito, generarMensajeError } from '../../helpers/mensajes';
import { UserForCreate } from '../../interfaces/user';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-usercreate',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './usercreate.component.html',
  styleUrls: ['./usercreate.component.scss']
})
export class UsercreateComponent {
  tipoUsuarioOpciones: string[] = ["free", "trial", "premium"];
  roleUsuarioOpciones = [
    { value: 0, label: 'Admin' },
    { value: 1, label: 'User' }
  ];


  userServices = inject(UserService);

  @Output() cerrar = new EventEmitter();

  user: UserForCreate = {
    userName: '',
    password: '',
    typeUser: 'free',
    roleid: 1
  };



  async crearUsuario() {
    const res = await this.userServices.create(this.user)
    this.cerrar.emit()

    if (res) {
      generarMensajeExito('Usuario creado')
    } else {
      generarMensajeError('No se ha podido crear el usuario')
    }
  }
}
