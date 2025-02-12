import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ApiModule } from '../store/api';
import { AuthModule } from '../store/auth';
import { AuthInterceptorService } from './interceptors';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IsAuthenticatedGuard, IsNotAuthenticatedGuard } from './guards';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    BrowserAnimationsModule,
    ApiModule.forRoot(),
    AuthModule.forRoot(),
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 100, name: 'Monetriq' }),
    EffectsModule.forRoot([]),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
    IsAuthenticatedGuard,
    IsNotAuthenticatedGuard,
  ],
})
export class CoreModule {}
