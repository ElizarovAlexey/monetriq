import { ModuleWithProviders, NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { storeName } from './auth.config';
import { reducer } from './auth.reducers';
import { AuthEffects } from './auth.effects';
import { EffectsModule } from '@ngrx/effects';
import { AuthService } from './auth.service';
import { AuthHttpService } from './auth.http.service';

export const storeModuleForFeature: ModuleWithProviders<StoreModule> =
  StoreModule.forFeature(storeName, reducer);
export const effectsModuleForFeature: ModuleWithProviders<EffectsModule> =
  EffectsModule.forFeature([AuthEffects]);

@NgModule({
  imports: [storeModuleForFeature, effectsModuleForFeature],
})
export class AuthModule {
  static forRoot(): ModuleWithProviders<AuthModule> {
    return {
      ngModule: AuthModule,
      providers: [AuthService, AuthHttpService],
    };
  }
}
