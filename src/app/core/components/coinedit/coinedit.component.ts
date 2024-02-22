import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generarMensajeExito, generarMensajeError } from '../../helpers/mensajes';
import { Coin } from '../../interfaces/coin';
import { CoinsServices } from '../../services/coin.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-coinedit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './coinedit.component.html',
  styleUrls: ['./coinedit.component.scss']
})
export class CoineditComponent {
  coinServices = inject(CoinsServices);

  @Output() cerrar = new EventEmitter();

  @Input() coins: Coin = {
    coinId: 0,
    symbol: '',
    name: '',
    index: 0,
  };

  async editarCoin() {
    const res = await this.coinServices.edit(this.coins) //Llamamos al scontacts.service para editar el contacto
    this.cerrar.emit() //Emitimos el evento cerrar
    if (res) { //Si la respuesta es correcta, emitimos el evento cerrar y mostramos un mensaje de exito
      generarMensajeExito('Moneda editada')
    } else { //Si la respuesta es incorrecta, emitimos el evento cerrar y mostramos un mensaje de error
      generarMensajeError('No se ha podido editar la moneda')
    }
  }
}
