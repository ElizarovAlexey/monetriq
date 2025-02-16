import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarItemComponent, SidebarMenuComponent } from './components/';
import { RouterModule } from '@angular/router';
import { UiComponentModule } from '../../shared/ui-component';

@NgModule({
  declarations: [SidebarItemComponent, SidebarMenuComponent],
  imports: [CommonModule, RouterModule, UiComponentModule],
  exports: [SidebarItemComponent, SidebarMenuComponent],
})
export class SidebarModule {}
