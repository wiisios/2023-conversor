import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersmenuRoutingModule } from './usersmenu-routing.module';
import { UsersmenuComponent } from './usersmenu.component';
import { UserdetailComponent } from 'src/app/core/components/userdetail/userdetail.component';
import { UsercreateComponent } from 'src/app/core/components/usercreate/usercreate.component';


@NgModule({
  declarations: [
    UsersmenuComponent
  ],
  imports: [
    CommonModule,
    UsersmenuRoutingModule,
    UserdetailComponent,
    UsercreateComponent
  ]
})
export class UsersmenuModule { }
