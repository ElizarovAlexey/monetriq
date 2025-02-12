import { inject, Injectable } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../../store/auth';

@Injectable()
export class IsNotAuthenticatedGuard {
  private _auth = inject(AuthService);
  private _router = inject(Router);

  canLoad(): Observable<boolean | UrlTree> {
    return this.isAuthenticated();
  }

  canActivate(): Observable<boolean | UrlTree> {
    return this.isAuthenticated();
  }

  private isAuthenticated(): Observable<boolean | UrlTree> {
    return this._auth.isAuthenticated.pipe(
      map((isAuthenticated) => {
        if (isAuthenticated) {
          return this._router.parseUrl('/');
        }

        return true;
      }),
    );
  }
}
