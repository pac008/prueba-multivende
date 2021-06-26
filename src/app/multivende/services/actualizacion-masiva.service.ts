import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Bodegas } from '../interfaces/bodega.interface';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ActualizacionMasivaService {
  private baseUrl: string= environment.baseUrl;
  private merchantId: string = '302ac9ad-f0dc-406e-9bfe-a61f2ea16f3b';
  private page: string = '1';
  private token: string = localStorage.getItem('token');
  private headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${ this.token }`
  })
  constructor(private http: HttpClient) { }


  getBodegasIds(){
    return this.http.get<Bodegas>(`${ this.baseUrl }/api/m/${ this.merchantId }/stores-and-warehouses/p/${ this.page }`,
                          { headers: this.headers })
  }

  getStocksPorBodega( idBodega: string ){
    return this.http.get<any>(`${ this.baseUrl }/api/m/${ this.merchantId }/product-versions/p/1?_include_stock=true&_warehouse_id=${ idBodega }`,
                          { headers: this.headers }).pipe( map ( ({ entries }) =>{
                                                          return entries.map(elem => {
                                                                let nuevo = {
                                                                     code: elem.code,
                                                                     name: elem.Product.name,
                                                                     amount: elem.ProductStocks[0].amount
                                                                };
                                                                return nuevo
                                                          });
                                                                 
                                                  }));
  }

  actualizacionMasiva( idBodega: string, productos ){
    return this.http.post(`${ this.baseUrl }/api/product-stocks/stores-and-warehouses/${ idBodega }/bulk-set`, 
                             productos,
                            { headers: this.headers });
  }


}
