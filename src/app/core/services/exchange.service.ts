import { API } from '../constants/api';
import { ApiService } from 'src/app/core/services/api.service';
import { Injectable } from '@angular/core';
import { Exchange, ExchangeCreate } from 'src/app/core/interfaces/exchange';

@Injectable({
  providedIn: 'root'
})
export class ExchangeServices extends ApiService {


  async exchange(exchange: ExchangeCreate): Promise<any> {
    const res = await fetch(API + "Exchange/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.auth.token,
      },
      body: JSON.stringify(exchange),
    });

    if (res.ok) {
      const resJson = await res.json();
      return resJson;
    } else if (res.status == 400) {
      const resJson = await res.json();
      return resJson;
    }
  }

  async getAllExchanges(): Promise<Exchange[]> {

    const res = await fetch(API + "Exchange",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + this.auth.token
        }
      })
    const resJson = await res.json()
    return resJson
  }

  async getById(id: number): Promise<Exchange[]> {
    const res = await fetch(API + "Exchange/" + id, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.auth.token
      },
    })
    const resJson = await res.json()
    return resJson
  }

  async getRemainingExchanges(id: number): Promise<number> {
    const res = await fetch(API + "Exchange/RemainingExchanges/" + id, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.auth.token
      },
    })
    const resJson = await res.json()
    return resJson
  }
}