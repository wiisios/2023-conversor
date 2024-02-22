import { Component, Input, OnInit, inject } from '@angular/core';
import { Exchange } from 'src/app/core/interfaces/exchange';
import { AuthService } from 'src/app/core/services/auth.service';
import { ExchangeServices } from 'src/app/core/services/exchange.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  authServices = inject(AuthService);
  exchangeServices = inject(ExchangeServices);

  @Input() exchanges: Exchange[] = [];




  ngOnInit(): void {

    const userid = this.authServices.userid;

    this.exchangeServices.getById(userid).then(exchanges => {
      this.exchanges = exchanges
    });
  }
}
