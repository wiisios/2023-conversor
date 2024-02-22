import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersmenuComponent } from './usersmenu.component';

const routes: Routes = [
  {
    path: "",
    component: UsersmenuComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersmenuRoutingModule { }
