import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideState, provideStore, StoreModule } from '@ngrx/store';
import { cartReducer } from './components/core/reducers';
import { provideEffects } from '@ngrx/effects';
import { CartEffects } from './components/core/effects';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(),
    provideStore({ cart: cartReducer }), 
    provideEffects(CartEffects),
    importProvidersFrom([
    // StoreModule.forRoot({cart:cartReducer})
    ]),



  ]
};
