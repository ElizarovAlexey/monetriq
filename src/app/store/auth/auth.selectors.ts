import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './auth.type';
import { storeName } from './auth.config';

export const stateSelector = createFeatureSelector<State>(storeName);

export const credentials = createSelector(
  stateSelector,
  (state) => state.credentials,
);
export const isAuthenticated = createSelector(
  stateSelector,
  (state) => !!state.isAuthenticated,
);
export const token = createSelector(stateSelector, (state) => state.token);
export const error = createSelector(stateSelector, (state) => state.error);
export const isLoading = createSelector(
  stateSelector,
  (state) => !!state.isLoading,
);
