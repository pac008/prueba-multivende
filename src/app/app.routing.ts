import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from './auth/guards/auth.guard';


export const routes: Routes = [
    
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule )
    },
    {
        path: 'multivende',
        loadChildren: () => import('./multivende/multivende.module').then( m => m.MultivendeModule ),
        canLoad: [ AuthGuard ], 
        canActivate: [ AuthGuard ]
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
