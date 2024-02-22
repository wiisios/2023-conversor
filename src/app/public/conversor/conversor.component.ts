import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { generarMensajeError, generarMensajeExito } from 'src/app/core/helpers/mensajes';
import { Coin } from 'src/app/core/interfaces/coin';
import { ExchangeCreate } from 'src/app/core/interfaces/exchange';
import { User } from 'src/app/core/interfaces/user';
import { AuthService } from 'src/app/core/services/auth.service';
import { CoinsServices } from 'src/app/core/services/coin.service';
import { ExchangeServices } from 'src/app/core/services/exchange.service';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.scss']
})
export class ConversorComponent {
  exchangeServices = inject(ExchangeServices);
  authServices = inject(AuthService);
  coinsServices = inject(CoinsServices);

  router = inject(Router);
  userid = this.authServices.userid;
  isadmin = this.authServices.roleUser === "Admin";
  exchangesLeft: number = 0;





  users: User = {
    userId: 0,
    userName: '',
    typeUser: '',
    exchangesLeft: 0,
    roleid: 0
  }


  exchange: ExchangeCreate = {
    originalCoin: '',
    finalCoin: '',
    originalAmount: 0,
    userId: this.userid,
    finalAmount: 0,
  };

  coins: Coin[] = [];

  async ngOnInit() {
    this.coinsServices.getAll().then(coins => {
      this.coins = coins;
    });



    this.exchangeServices.getRemainingExchanges(this.userid)
      .then((resRemaining: number) => {
        this.exchangesLeft = resRemaining;
      })

  }


  async crearConversion() {
    const res = await this.exchangeServices.exchange(this.exchange)
    if (res.status == 400) {
      generarMensajeError("No se ha podido crear la conversion")
    }
    else if (res.mensaje) {
      generarMensajeError(res.mensaje)
    }
    else {
      generarMensajeExito('Conversion creada')
      this.exchange.finalAmount = res.finalAmount
      this.exchangesLeft = this.exchangesLeft - 1;
    }
  };


  logout() {
    this.authServices.logOut();
    this.router.navigate(['/login']);
  }

}
