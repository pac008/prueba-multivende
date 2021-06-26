import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nabvar',
  templateUrl: './nabvar.component.html',
  styles: [
  ]
})
export class NabvarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/auth/login']);
  }
}
