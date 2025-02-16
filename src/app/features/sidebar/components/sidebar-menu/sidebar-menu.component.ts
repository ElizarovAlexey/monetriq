import { Component } from '@angular/core';
import { SidebarItem } from '../types';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrl: './sidebar-menu.component.scss',
})
export class SidebarMenuComponent {
  sidebarItems: SidebarItem[] = [
    { path: '', label: 'Overview', icon: 'overview' },
    { path: 'transactions', label: 'Transactions', icon: 'transactions' },
    { path: 'budgets', label: 'Budgets', icon: 'budgets' },
    { path: 'parameters', label: 'Parameters', icon: 'settings' },
    { path: 'users', label: 'Users', icon: 'users' },
  ];
}
