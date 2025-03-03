import { inject, Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { GoogleAuth, SignIn, SignUp, State } from './auth.type';
import { Observable } from 'rxjs';
import * as selectors from './auth.selectors';
import { User } from '../../shared/types';
import { actions } from './auth.actions';
import { StoreService } from '../helpers';

@Injectable()
export class AuthService extends StoreService {
  entity: Observable<State>;

  private _store = inject(Store<State>);

  constructor() {
    super();

    this.entity = this._store.pipe(select(selectors.stateSelector));
  }

  get isAuthenticated(): Observable<boolean> {
    return this._store.pipe(select(selectors.isAuthenticated));
  }

  get isLoading(): Observable<boolean> {
    return this._store.pipe(select(selectors.isLoading));
  }

  get credentials(): Observable<User | null> {
    return this._store.pipe(select(selectors.credentials));
  }

  get token(): Observable<string | null> {
    return this._store.pipe(select(selectors.token));
  }

  get error(): Observable<Record<string, string> | null> {
    return this._store.pipe(select(selectors.error));
  }

  signIn(params: SignIn) {
    this._store.dispatch(actions.signIn(params));

    return this.waitForState(this.entity, true);
  }

  signUp(params: SignUp) {
    this._store.dispatch(actions.signUp(params));

    return this.waitForState(this.entity, true);
  }

  googleAuth(params: GoogleAuth) {
    this._store.dispatch(actions.googleAuth(params));

    return this.waitForState(this.entity, true);
  }
}
