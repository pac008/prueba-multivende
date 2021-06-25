import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MultivendeRoutingModule } from './multivende-routing.module';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NabvarComponent } from './components/nabvar/nabvar.component';
import { MultivendeService } from './services/multivende.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    InicioComponent,
    NabvarComponent
  ],
  providers: [
    MultivendeService
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MultivendeRoutingModule
  ]
})
export class MultivendeModule { }
