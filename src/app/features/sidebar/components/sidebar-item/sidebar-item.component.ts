import { Component, Input } from '@angular/core';
import { SidebarItem } from '../types';

@Component({
  selector: 'app-sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrl: './sidebar-item.component.scss',
})
export class SidebarItemComponent {
  @Input() sidebarItem!: SidebarItem;
}
