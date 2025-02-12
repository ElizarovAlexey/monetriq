import { Injectable } from '@angular/core';
import { Version } from '../../shared/types';

Injectable();
export class ApiService {
  private API_HOST = 'https://monetriq.online';

  signIn(version: Version) {
    return `${this._auth(version)}/login`;
  }

  signUp(version: Version) {
    return `${this._auth(version)}/register`;
  }

  private _auth(version: Version) {
    return `${this._path(version)}/auth`;
  }

  private _path(version: Version): string {
    return `${this.API_HOST}/api/${version}`;
  }
}
