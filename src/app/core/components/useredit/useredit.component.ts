import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { generarMensajeExito, generarMensajeError } from '../../helpers/mensajes';
import { UserForUpdate } from '../../interfaces/user';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-useredit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './useredit.component.html',
  styleUrls: ['./useredit.component.scss']
})
export class UsereditComponent {
  userServices = inject(UserService);
  router = inject(Router);

  roleUsuarioOpciones = [
    { value: 0, label: 'Admin' },
    { value: 1, label: 'User' }
  ];



  @Input() users: UserForUpdate = {
    userId: 0,
    userName: '',
    typeUser: '',
    roleid: 0
  };

  @Output() cerrar = new EventEmitter();

  tipoUsuarioOpciones: string[] = ["free", "trial", "premium"];


  async editarUsuario() {
    const res = await this.userServices.editusers(this.users) //Llamamos al scontacts.service para editar el contacto
    this.cerrar.emit() //Emitimos el evento cerrar
    if (res) { //Si la respuesta es correcta, emitimos el evento cerrar y mostramos un mensaje de exito
      generarMensajeExito('Usuario editado')
    } else { //Si la respuesta es incorrecta, emitimos el evento cerrar y mostramos un mensaje de error
      generarMensajeError('No se ha podido editar el usuario')
    }
  }
}
