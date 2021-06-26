import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MultivendeRoutingModule } from './multivende-routing.module';

import { ActualizacionMasivaService } from './services/actualizacion-masiva.service';
import { CRUDService } from './services/crud.service';

import { LlamarCRUDComponent } from './pages/llamar-crud/llamar-crud.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NabvarComponent } from './components/nabvar/nabvar.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    InicioComponent,
    NabvarComponent,
    LlamarCRUDComponent
  ],
  providers: [
    CRUDService,
    ActualizacionMasivaService

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    MultivendeRoutingModule
  ]
})
export class MultivendeModule { }
