import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { usuarioSinLoguear } from './core/guards/usuariosinlogear';
import { usuarioLogueadoGuard } from './core/guards/usuariologueado';
import { adminguard } from './core/guards/adminguard';

const routes: Routes = [
  {
    path: "login",
    canActivate: [usuarioSinLoguear],
    loadChildren: () => import('./public/login/login.module').then(m => m.LoginModule)
  },
  {
    path: "register",
    canActivate: [usuarioSinLoguear],
    loadChildren: () => import('./public/register/register.module').then(m => m.RegisterModule)
  },
  {
    path: "adminhome",
    canActivate: [usuarioLogueadoGuard, adminguard],
    loadChildren: () => import('./admin/adminhome/adminhome.module').then(m => m.AdminhomeModule)
  },
  {
    path: "coinsmenu",
    canActivate: [usuarioLogueadoGuard, adminguard],
    loadChildren: () => import('./admin/coinsmenu/coinsmenu.module').then(m => m.CoinsmenuModule)
  },
  {
    path: "usersmenu",
    canActivate: [usuarioLogueadoGuard, adminguard],
    loadChildren: () => import('./admin/usersmenu/usersmenu.module').then(m => m.UsersmenuModule)
  },
  {
    path: "exchange",
    canActivate: [usuarioLogueadoGuard],
    loadChildren: () => import('./public/conversor/conversor.module').then(m => m.ConversorModule)
  },
  {
    path: "history",
    canActivate: [usuarioLogueadoGuard],
    loadChildren: () => import('./public/history/history.module').then(m => m.HistoryModule)
  },
  {
    path: "subscription",
    loadChildren: () => import('./public/subscription/subscription.module').then(m => m.SubscriptionModule)
  },
  {
    path: "",
    redirectTo: 'exchange',
    pathMatch: "full"
  },
  {
    path: "**",
    loadChildren: () => import('./public/error/error.module').then(m => m.ErrorModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
