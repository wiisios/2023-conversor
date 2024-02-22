import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoinsmenuRoutingModule } from './coinsmenu-routing.module';
import { CoinsmenuComponent } from './coinsmenu.component';
import { CoindetailComponent } from 'src/app/core/components/coindetail/coindetail.component';
import { CoincreateComponent } from 'src/app/core/components/coincreate/coincreate.component';


@NgModule({
  declarations: [
    CoinsmenuComponent
  ],
  imports: [
    CommonModule,
    CoinsmenuRoutingModule,
    CoindetailComponent,
    CoincreateComponent
  ]
})
export class CoinsmenuModule { }
