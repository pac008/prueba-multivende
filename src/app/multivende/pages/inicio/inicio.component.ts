import { Component, OnInit } from '@angular/core';
import { MultivendeService } from '../../services/multivende.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styles: [
  ]
})
export class InicioComponent implements OnInit {
  private providerId: string = '0762d118-259b-4e55-8040-c2ea86b2e93a';
  constructor(private multivendeService: MultivendeService ) { }

  ngOnInit(): void {
    this.multivendeService.getProviders().subscribe( providers => {
      console.log( providers );
    }, err => console.log( err ) );

  }

  createProvider(){
    this.multivendeService.createProvider('test1').subscribe( resp => {
      console.log( resp );
    }, err => console.log( err ))
  }

  getProviderById(){


    this.multivendeService.getProviderById( this.providerId ).subscribe( provider => {
      console.log( provider );
    }, err => console.log( err ))
  }

  updateProvider(){
    this.multivendeService.updateProvider( this.providerId, 'testUpdate' )
                                            .subscribe( providerUpdated => {
                                              console.log( providerUpdated );
                                            }, err => console.log( err ) );
  }

  deleteProvider(){
    this.multivendeService.deleteProvider( this.providerId )
                                            .subscribe( providerDeleted => {
                                              console.log( providerDeleted );
                                            }, err => console.log( err ) );
  }
}
