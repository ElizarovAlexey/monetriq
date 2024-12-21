import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  UiButtonComponent,
  UiInputComponent,
  UiDropdownComponent,
  UiCheckboxComponent,
  UiToggleComponent,
} from './components';

@NgModule({
  declarations: [
    UiInputComponent,
    UiButtonComponent,
    UiDropdownComponent,
    UiCheckboxComponent,
    UiToggleComponent,
  ],
  imports: [CommonModule],
})
export class UiKitModule {}
