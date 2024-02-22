import { Injectable } from '@angular/core';
import { API } from '../constants/api';
import { ApiService } from 'src/app/core/services/api.service';
import { Coin } from 'src/app/core/interfaces/coin';

@Injectable({
  providedIn: 'root'
})
export class CoinsServices extends ApiService {



  async create(coin: Coin): Promise<Boolean> {
    const res = await fetch(API + "coin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.auth.token
      },
      body: JSON.stringify(coin)
    })
    return res.ok;
  }

  async delete(id: number): Promise<Boolean> {

    const res = await fetch(API + "coin/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.auth.token
      }
    })
    return res.ok
  }

  async edit(coin: Coin): Promise<Boolean> {
    if (!coin.coinId) return false;
    const res = await fetch(API + "coin/" +
      coin.coinId, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.auth.token
      },
      body: JSON.stringify(coin)
    })
    return res.ok;
  }

  async getAll(): Promise<Coin[]> {
    const res = await fetch(API + "coin",
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
}