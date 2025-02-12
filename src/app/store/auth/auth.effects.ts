import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { actions } from './auth.actions';
import {
  catchError,
  concatMap,
  map,
  MonoTypeOperatorFunction,
  of,
  tap,
} from 'rxjs';
import { AuthHttpService } from './auth.http.service';
import { User } from '../../shared/types';
import { Action } from '@ngrx/store';

@Injectable()
export class AuthEffects {
  private _actions = inject(Actions);
  private _authHttp = inject(AuthHttpService);

  // set initial state for auth
  setStorage$ = createEffect(() =>
    this._actions.pipe(
      ofType(actions.initState),
      map(() => {
        try {
          const token = JSON.parse(localStorage.getItem('token') || 'null') as
            | string
            | null;
          const credentials = JSON.parse(
            localStorage.getItem('credentials') || 'null',
          ) as User | null;

          if (!credentials || !token)
            throw {
              generic: "Can't set initial state for auth (data isn't set)",
            };

          return actions.initStateSuccess({ credentials, token });
        } catch (catchError) {
          const error = catchError as Record<string, string>;
          return actions.initStateError({ error });
        }
      }),
    ),
  );

  signIn$ = createEffect(() =>
    this._actions.pipe(
      ofType(actions.signIn),
      concatMap(({ email, password }) =>
        this._authHttp.signIn({ email, password }).pipe(
          this._putTokensInStorage(),
          this._putUserInStorage(),
          map((response) => actions.signInSuccess(response)),
          catchError(({ error }: { error: Record<string, string> }) =>
            of(actions.signInError({ error })),
          ),
        ),
      ),
    ),
  );

  signUp$ = createEffect(() =>
    this._actions.pipe(
      ofType(actions.signUp),
      concatMap(({ email, name, password }) =>
        this._authHttp.signUp({ email, name, password }).pipe(
          this._putTokensInStorage(),
          this._putUserInStorage(),
          map((response) => actions.signUpSuccess(response)),
          catchError(({ error }: { error: Record<string, string> }) =>
            of(actions.signUpError({ error })),
          ),
        ),
      ),
    ),
  );

  ngrxOnInitEffects(): Action {
    return actions.initState();
  }

  private _putTokensInStorage<
    T extends { token: string },
  >(): MonoTypeOperatorFunction<T> {
    return tap(({ token }) => {
      localStorage.setItem('token', JSON.stringify(token));
    });
  }

  private _putUserInStorage<
    T extends { credentials: Partial<User> },
  >(): MonoTypeOperatorFunction<T> {
    return tap(({ credentials: { id, name } }) =>
      localStorage.setItem('credentials', JSON.stringify({ id, name })),
    );
  }
}
