import { ModuleWithProviders, NgModule } from '@angular/core';

import { ApiService } from './api.service';

@NgModule()
export class ApiModule {
  static forRoot(): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [ApiService],
    };
  }
}
