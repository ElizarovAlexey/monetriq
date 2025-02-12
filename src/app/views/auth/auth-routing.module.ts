import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { SignInComponent, SignUpComponent } from './components';
import { IsNotAuthenticatedGuard } from '../../core/guards';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'sign-in',
        canActivate: [IsNotAuthenticatedGuard],
        component: SignInComponent,
      },
      {
        path: 'sign-up',
        canActivate: [IsNotAuthenticatedGuard],
        component: SignUpComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
