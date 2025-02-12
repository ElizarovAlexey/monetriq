import { Action, createReducer, on } from '@ngrx/store';
import { State } from './auth.type';
import { actions } from './auth.actions';

const initialState: State = {
  isAuthenticated: false,
  isLoading: false,
  credentials: null,
  error: null,
  token: null,
};

export const authReducer = createReducer(
  initialState,

  on(
    actions.initState,
    actions.signIn,
    actions.signInGoogle,
    actions.signUp,
    (state) => ({
      ...state,
      isLoading: true,
    }),
  ),

  on(
    actions.initStateError,
    actions.signInError,
    actions.signInGoogleError,
    actions.signUpError,
    (state, { error }) => ({
      ...state,
      error,
      isLoading: false,
      isAuthenticated: false,
    }),
  ),

  on(
    actions.initStateSuccess,
    actions.signInSuccess,
    actions.signUpSuccess,
    (state, { credentials, token }) => ({
      ...state,
      credentials,
      token,
      isLoading: false,
      isAuthenticated: true,
      error: null,
    }),
  ),
);

export function reducer(state: State | undefined, action: Action): State {
  return authReducer(state, action);
}
