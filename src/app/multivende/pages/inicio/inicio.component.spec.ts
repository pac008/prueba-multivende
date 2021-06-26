
import { TestBed, ComponentFixture } from '@angular/core/testing';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { InicioComponent } from './inicio.component';
import { ActualizacionMasivaService } from '../../services/actualizacion-masiva.service';
import { of } from 'rxjs';


describe('Inicio component', () => {


    let componente: InicioComponent;
    let servicio = new ActualizacionMasivaService( null)
    beforeEach( () => { 
        componente = new InicioComponent(servicio);
    })

    it('al llamar ngOninit debe cargar las bodegas', () => {

        const bodegas =  [ { _id: '123', name: 'bodega1'},
                                  { _id: '1234', name: 'bodega2'}];
         
        spyOn( servicio, 'getBodegasIds').and.callFake( () => {

            return of(  bodegas );
        });

        componente.ngOnInit()

        expect( componente.bodegas.length ).toBeGreaterThan(0);
    })
});