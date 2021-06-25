import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


const routes: Routes = [
    
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule )
    },
    {
        path: 'multivende',
        loadChildren: () => import('./multivende/multivende.module').then( m => m.MultivendeModule )
    },
    {
        path: '**',
        redirectTo: 'auth'
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
