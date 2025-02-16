import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootComponent } from './root.component';

const routes: Routes = [
  {
    path: '',
    component: RootComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../overview').then((m) => m.OverviewModule),
      },
      {
        path: 'transactions',
        loadChildren: () =>
          import('../transactions').then((m) => m.TransactionsModule),
      },
      {
        path: 'budgets',
        loadChildren: () => import('../budgets').then((m) => m.BudgetsModule),
      },
      {
        path: 'parameters',
        loadChildren: () =>
          import('../parameters').then((m) => m.ParametersModule),
      },
      {
        path: 'users',
        loadChildren: () => import('../users').then((m) => m.UsersModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RootRoutingModule {}
