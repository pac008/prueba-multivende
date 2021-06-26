import { routes } from './app.routing';
import { AuthGuard } from './auth/guards/auth.guard';





describe('App Routes - ruta principal', () => {

    it('Se debe importar las rutas hijas auth en el path auth', () => {

        let existeRutaHija: boolean = false;

        routes.forEach( elem => {
            console.log( elem );
            if ( elem.path === 'auth' && elem.loadChildren )
             {
                existeRutaHija = true;
            }
            
        });

        expect( existeRutaHija ).toBeTruthy();        
        
    });
    it('Se debe importar las rutas hijas multivende en el path multivende', () => {

        let existeRutaHija: boolean = false;

        routes.forEach( elem => {
            console.log( elem );
            if ( elem.path === 'multivende' && elem.loadChildren )
             {
                existeRutaHija = true;
            }
            
        });

        expect( existeRutaHija ).toBeTruthy();        
        
    });

    it('Se debe importar el guard en el canActivate y en el canLoad en las rutas hijas del path multivende', () => {

        let existeCanActivateYCanLoad: boolean = false;

        routes.forEach( elem => {
            console.log( elem );
            if ( elem.path === 'multivende' && elem.loadChildren )
             {
                 if ( elem.canActivate.includes( AuthGuard ) && elem.canLoad.includes( AuthGuard ) ) {

                    existeCanActivateYCanLoad = true;
                 }
            }
            
        });

        expect( existeCanActivateYCanLoad ).toBeTruthy();        
        
    });
});