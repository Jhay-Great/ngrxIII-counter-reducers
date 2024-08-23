import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore, provideState } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { _counterReducer, numberCounterReducers } from './components/counter/reducers/counter.reducer';
import { combinedReducer } from './components/reducer';


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    // provideStore(), //use this when not using the combinedReducer object from the ActionReducerMap
    provideStore(combinedReducer),
    // provideState({ name: 'counter', reducer: numberCounterReducers }),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ],
};

