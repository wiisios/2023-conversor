import { Component, OnInit, inject } from '@angular/core';
import { Coin } from 'src/app/core/interfaces/coin';
import { CoinsServices } from 'src/app/core/services/coin.service';

@Component({
  selector: 'app-coinsmenu',
  templateUrl: './coinsmenu.component.html',
  styleUrls: ['./coinsmenu.component.scss']
})
export class CoinsmenuComponent implements OnInit{
  coinsServices = inject(CoinsServices);
  coins: Coin[] = [];


  ngOnInit(): void {
    this.coinsServices.getAll().then(coins => {
      this.coins = coins
    });
  }
}
