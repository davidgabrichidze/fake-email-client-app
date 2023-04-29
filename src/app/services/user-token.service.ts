import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class UserTokenService {
  private tokenKey = 'auth_token';

  storeToken(token: string) {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  removeToken() {
    localStorage.removeItem(this.tokenKey);
  }

  isTokenExpired(token: string): boolean {
    const jwtHelper = new JwtHelperService();
    return jwtHelper.isTokenExpired(token);
  }
}
