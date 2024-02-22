import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConversorRoutingModule } from './conversor-routing.module';
import { ConversorComponent } from './conversor.component';
import { FormsModule } from '@angular/forms';
import { UsereditComponent } from 'src/app/core/components/useredit/useredit.component';
import { HistorialComponent } from 'src/app/core/components/historial/historial.component';


@NgModule({
  declarations: [
    ConversorComponent
  ],
  imports: [
    CommonModule,
    ConversorRoutingModule,
    FormsModule,
    HistorialComponent,
    UsereditComponent,
  ]
})
export class ConversorModule { }
