import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "src/app/core/services/auth.service";


export const adminguard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  if (auth.roleUser === "Admin") {
    return true;
  } else {
    router.navigate(['/**']);
    return false;
  }
}