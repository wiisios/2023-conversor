import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Exchange } from '../../interfaces/exchange';
import { ExchangeServices } from '../../services/exchange.service';

@Component({
  selector: 'app-historial',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss']
})
export class HistorialComponent {
  exchangesServices = inject(ExchangeServices);

  @Input({ required: true }) exchanges !: Exchange;
}
