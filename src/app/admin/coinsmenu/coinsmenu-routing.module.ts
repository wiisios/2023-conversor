import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoinsmenuComponent } from './coinsmenu.component';

const routes: Routes = [
  {
    path: "",
    component: CoinsmenuComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoinsmenuRoutingModule { }
