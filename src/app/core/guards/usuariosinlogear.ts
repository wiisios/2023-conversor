import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { AuthService } from "src/app/core/services/auth.service";

export const usuarioSinLoguear: CanActivateFn = async (route, state) => {
  const auth = inject(AuthService);
  const logueado = auth.token;
  if (logueado) {
    const router = inject(Router);
    const roleUser = auth.roleUser;
    if (roleUser === "Admin")
      router.navigate(['/adminhome']);
    else
      router.navigate(['/convertir']);
    return false;
  }
  return true;
}