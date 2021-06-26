import { Component, OnInit } from '@angular/core';
import { Bodega } from '../../interfaces/bodega.interface';
import { Productos } from '../../interfaces/stocks-bodega.interface';
import { ActualizacionMasivaService } from '../../services/actualizacion-masiva.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styles: [
  ]
})
export class InicioComponent implements OnInit {
  public disabled: boolean = true;
  public bodegas : Bodega[];
  public bodega  : string = '';
  public stocks  : Productos[];

  constructor(private actualizacionMasivaService: ActualizacionMasivaService) {}

  ngOnInit():void {
      this.actualizacionMasivaService.getBodegasIds().subscribe( bodegas => {
        console.log( bodegas );
        this.bodegas = bodegas;
      })
  }

  getStocksPorBodega( idBodega:string ) {
    if( idBodega.trim().length === 0) return;
    
    this.actualizacionMasivaService.getStocksPorBodega( idBodega )

    
                                                      .subscribe( resp => {
                                                        console.log( resp );
                                                        this.stocks = resp;
                                                        
                                                        // console.log( this.stocks );
                                                      },err => console.log( err ) );
  }
  
  globalUpdate(){
  
    const productos = this.stocks.map( elem => { 
                      return { code: elem.code, amount: elem.amount };
                    });
                    
    this.actualizacionMasivaService.actualizacionMasiva( this.bodega, productos )
                    .subscribe( resp => {
                      console.log( resp );
                      Swal.fire({
                        icon:'success',
                        text:'se ha actualizado correctamente',
                        confirmButtonText: 'Cool'
                      })                     
                    }, err => {
                      console.log( err )
                      Swal.fire({ 
                        title: 'Error!',
                        text: 'Ha pasado algo inesperado, inténtalo más tarde',
                        icon: 'error',
                        
                      })

                    })

  }
}
