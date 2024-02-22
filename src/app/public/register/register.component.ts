import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserForCreate } from 'src/app/core/interfaces/user';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  authService = inject(AuthService);
  userServices = inject(UserService);
  router = inject(Router);

  registerData: UserForCreate = {
    userName: "",
    password: "",
    typeUser: "free",
    roleid: 1
  }

  async crearUsuario() {
    const res = await this.userServices.create(this.registerData)

    if (res) {
      this.router.navigate(['/login'])
    }
  }
}
