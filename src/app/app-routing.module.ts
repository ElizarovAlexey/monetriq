import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsAuthenticatedGuard } from './core/guards';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./views/auth').then((m) => m.AuthModule),
  },
  {
    path: '',
    canLoad: [IsAuthenticatedGuard],
    loadChildren: () => import('./views/root').then((m) => m.RootModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
