import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient ) { }

  verifyToken(){
   
    if( !localStorage.getItem('token') ) {
      return of(false);
    }

    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${ token }`
    });
    
    return this.http.get(`${ this.baseUrl }/api/users/me`, { headers })
                                  .pipe(
                                    map( auth => {
                                      return true
                                    })
                                  );
  }

  login({ email, password }){
    let headers = new HttpHeaders({
      'cache-control': 'no-cache',
      'Content-Type': 'application/json'
    });
    return this.http.post(`${ this.baseUrl }/auth/local`, { email, password }, { headers })
    
  }
}
