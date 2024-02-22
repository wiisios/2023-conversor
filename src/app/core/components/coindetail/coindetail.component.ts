import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Coin } from '../../interfaces/coin';
import { CoinsServices } from '../../services/coin.service';
import { CoineditComponent } from '../coinedit/coinedit.component';

@Component({
  selector: 'app-coindetail',
  standalone: true,
  imports: [CommonModule, CoineditComponent],
  templateUrl: './coindetail.component.html',
  styleUrls: ['./coindetail.component.scss']
})
export class CoindetailComponent {
  coinsServices = inject(CoinsServices);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router)

  @Input({ required: true }) coins !: Coin;

  BorrarMoneda() {

    Swal.fire({
      title: 'Queres eliminar la moneda ' + this.coins.symbol,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.coinsServices.delete(this.coins.coinId).then(res => {

          if (res) {
            Swal.fire(
              'Eliminado!',
              'La moneda ' + this.coins.symbol + ' fue eliminada correctamente',
              'success'
            );
            this.router.navigate(['/coinsmenu']);
          } else {
            Swal.fire(
              'Error!',
              'La moneda ' + this.coins.symbol + ' no pudo ser eliminada',
              'error'
            )
          }
        });

      }
    })
  };
}
