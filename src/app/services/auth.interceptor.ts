import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserTokenService } from './user-token.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private userTokenService: UserTokenService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const authToken = this.userTokenService.getToken();

    if (authToken) {
      const authReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      return next.handle(authReq);
    }

    return next.handle(req);
  }
}
