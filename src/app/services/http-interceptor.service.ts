import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    return next.handle(this._addAuthorizationToken(request, 'token'));
  }

  private _addAuthorizationToken(
    request: HttpRequest<unknown>,
    token: string,
  ): HttpRequest<unknown> {
    return request.clone({
      setHeaders: { Authorization: `Bearer ${token}` },
    });
  }
}
