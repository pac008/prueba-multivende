import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MultivendeService {

  private baseUrl: string= environment.baseUrl;
  private merchantId: string = '302ac9ad-f0dc-406e-9bfe-a61f2ea16f3b';
  private page: string = '1';
  private token: string = localStorage.getItem('token');
  private headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${ this.token }`
  })
  constructor(private http: HttpClient) { }


  getProviders(){
    return this.http.get(`${ this.baseUrl }/api/m/${ this.merchantId }/providers/p/${ this.page }`,
                          { headers: this.headers });
  }



  createProvider( name: string ){
    return this.http.post(`${ this.baseUrl }/api/m/${ this.merchantId }/providers`,
                          { name },
                          { headers: this.headers })
  }
  getProviderById( providerId ){
    return this.http.get(`${ this.baseUrl }/api/providers/${ providerId }`, 
                          { headers: this.headers });
  }

  updateProvider( providerId, name ){
    return this.http.put(`${ this.baseUrl }/api/providers/${ providerId }`,
                          { name },
                          { headers: this.headers });
  }

  deleteProvider( providerId ){
    return this.http.delete(`${ this.baseUrl }/api/providers/${ providerId }`,
                              { headers: this.headers });
  }
}
