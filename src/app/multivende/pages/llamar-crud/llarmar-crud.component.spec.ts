import { LlamarCRUDComponent } from './llamar-crud.component';






describe('Llamar-crud.component unit', () => {

    let componente: LlamarCRUDComponent;

    beforeEach( () => componente = new LlamarCRUDComponent(null) );

    it('La propiedad providerId debe tener el siguiente valor: 0762d118-259b-4e55-8040-c2ea86b2e93a', () => {

        
           expect( componente.providerId ).toEqual('0762d118-259b-4e55-8040-c2ea86b2e93a');

    });



});