import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RootRoutingModule } from './root-routing.module';
import { RootComponent } from './root.component';
import { SidebarModule } from '../../features';

@NgModule({
  declarations: [RootComponent],
  imports: [CommonModule, RootRoutingModule, SidebarModule],
})
export class RootModule {}
