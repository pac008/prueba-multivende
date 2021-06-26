import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  public token: string;
  constructor(private http: HttpClient ) { }

  login({ email, password }){
    let headers = new HttpHeaders({
      'cache-control': 'no-cache',
      'Content-Type': 'application/json'
    })
    return this.http.post(`${ this.baseUrl }/auth/local`, { email, password }, { headers })
    
  }
}
