import { Injectable } from '@angular/core';
import { API } from 'src/app/core/constants/api';

import { AuthService } from './auth.service';
import { ApiService } from 'src/app/core/services/api.service';
import { UserForCreate, UserForUpdate, User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService extends ApiService {



  async create(user: UserForCreate): Promise<Boolean> {
    const res = await fetch(API + "User", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.auth.token
      },
      body: JSON.stringify(user)
    })
    return res.ok;
  }



  async delete(id: number): Promise<Boolean> {

    const res = await fetch(API + "User/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.auth.token
      }
    })
    return res.ok
  }

  //para edicion de usuario iniciado
  async edit(user: UserForUpdate): Promise<Boolean> {
    const res = await fetch(API + "User/" +
      this.auth.userid, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.auth.token
      },
      body: JSON.stringify(user)
    })
    return res.ok;
  }

  //para edicion de todos los usuarios
  async editusers(user: UserForUpdate): Promise<Boolean> {
    const res = await fetch(API + "User/" +
      user.userId, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.auth.token
      },
      body: JSON.stringify(user)
    })
    return res.ok;
  }

  async getAll(): Promise<User[]> {
    const res = await fetch(API + "User",
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

  async getById(id: number): Promise<UserForUpdate> {
    const res = await fetch(API + "User/" + id, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.auth.token
      },
    })
    const resJson = await res.json()
    return resJson
  }
}