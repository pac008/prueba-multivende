import { Component, OnInit } from '@angular/core';
import { CRUDService } from '../../services/crud.service';

@Component({
  selector: 'app-llamar-crud',
  template: '',
  styles: [
  ]
})
export class LlamarCRUDComponent implements OnInit {

  public providerId: string = '0762d118-259b-4e55-8040-c2ea86b2e93a';
  constructor(private crudService: CRUDService ) { }

  ngOnInit(): void {
    this.crudService.getProviders().subscribe( providers => {
      console.log( providers );
    }, err => console.log( err ) );

  }

  createProvider(){
    this.crudService.createProvider('test1').subscribe( resp => {
      console.log( resp );
    }, err => console.log( err ))
  }

  getProviderById(){


    this.crudService.getProviderById( this.providerId ).subscribe( provider => {
      console.log( provider );
    }, err => console.log( err ))
  }

  updateProvider(){
    this.crudService.updateProvider( this.providerId, 'testUpdate' )
                                            .subscribe( providerUpdated => {
                                              console.log( providerUpdated );
                                            }, err => console.log( err ) );
  }

  deleteProvider(){
    this.crudService.deleteProvider( this.providerId )
                                            .subscribe( providerDeleted => {
                                              console.log( providerDeleted );
                                            }, err => console.log( err ) );
  }
}
