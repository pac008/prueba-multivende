import { Component, OnInit } from '@angular/core';
import { Entry } from '../../interfaces/bodega.interface';
import { Productos } from '../../interfaces/stocks-bodega.interface';
import { ActualizacionMasivaService } from '../../services/actualizacion-masiva.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styles: [
  ]
})
export class InicioComponent implements OnInit {
  public disabled: boolean = true;
  public bodegas : Entry[];
  public bodega  : string = '';
  public stocks  : Productos[];

  constructor(private actualizacionMasivaService: ActualizacionMasivaService) {}

  ngOnInit():void {
      this.actualizacionMasivaService.getBodegasIds().subscribe( ({ entries }) => {
        console.log( entries );
        this.bodegas = entries;
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
  
  globalUpdated(){
  
    const productos = this.stocks.map( elem => { 
                      return { code: elem.code, amount: elem.amount };
                    });

                    console.log( productos );
                    
    this.actualizacionMasivaService.actualizacionMasiva( this.bodega, productos )
                    .subscribe( resp => {
                      console.log( resp );
                      
                    }, err => console.log( err ))

                  

  }
}
