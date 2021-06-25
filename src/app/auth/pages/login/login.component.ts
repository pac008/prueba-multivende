import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide:boolean = true;
  miFormularioLogin: FormGroup = this.fb.group({
    email: ['', [ Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$') ]],
    password: ['', [ Validators.required, Validators.min(6) ]]
  })
  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
  }

  async guardar(){
    if ( this.miFormularioLogin.invalid) {
      this.miFormularioLogin.markAllAsTouched();
      return;
    }

    console.log( this.miFormularioLogin.value );
    this.authService.login( this.miFormularioLogin.value ).subscribe( token => { 
      
      localStorage.setItem('token', token['token'] );
      this.router.navigate(['/multivende/inicio']);
      
    }, err => console.log(err) );
  }

  elCampoNoEsValido( campo: string ) {
    return this.miFormularioLogin.controls[campo].errors 
            && this.miFormularioLogin.controls[campo].touched;
  }
}
