import { Component, EventEmitter, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generarMensajeExito, generarMensajeError } from '../../helpers/mensajes';
import { Coin } from '../../interfaces/coin';
import { CoinsServices } from '../../services/coin.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-coincreate',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './coincreate.component.html',
  styleUrls: ['./coincreate.component.scss']
})
export class CoincreateComponent {
  coinsServices = inject(CoinsServices);

  @Output() cerrar = new EventEmitter();

  coins: Coin = {
    coinId: 0,
    symbol: '',
    name: '',
    index: 0,
  };

  async crearMoneda() {
    const res = await this.coinsServices.create(this.coins)
    this.cerrar.emit()

    if (res) {
      generarMensajeExito('Moneda creada')
    } else {
      generarMensajeError('No se ha podido crear la moneda')
    }
  }
}
