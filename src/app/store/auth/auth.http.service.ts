import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ApiService } from '../api';
import {
  GoogleAuth,
  SignIn,
  SignInResponse,
  SignUp,
  SignUpResponse,
} from './auth.type';
import { Observable } from 'rxjs';
import { Version } from '../../shared/types';

@Injectable()
export class AuthHttpService {
  private _http = inject(HttpClient);
  private _api = inject(ApiService);

  signIn(params: SignIn): Observable<SignInResponse> {
    return this._http.post<SignInResponse>(
      this._api.signIn(Version.One),
      params,
    );
  }

  signUp(params: SignUp): Observable<SignUpResponse> {
    return this._http.post<SignUpResponse>(
      this._api.signUp(Version.One),
      params,
    );
  }

  googleAuth(params: GoogleAuth): Observable<SignUpResponse> {
    return this._http.post<SignUpResponse>(
      this._api.googleAuth(Version.One),
      params,
    );
  }
}
