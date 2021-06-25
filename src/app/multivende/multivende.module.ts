import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MultivendeRoutingModule } from './multivende-routing.module';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NabvarComponent } from './components/nabvar/nabvar.component';


@NgModule({
  declarations: [
    InicioComponent,
    NabvarComponent
  ],
  imports: [
    CommonModule,
    MultivendeRoutingModule
  ]
})
export class MultivendeModule { }
