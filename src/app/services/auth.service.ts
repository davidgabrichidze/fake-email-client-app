import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { UserTokenService } from './user-token.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://api.example.com';

  constructor(
    private http: HttpClient,
    private userTokenService: UserTokenService
  ) {}

  login(email: string, password: string) {
    return this.http
      .post<{ access_token: string }>(`${this.apiUrl}/auth/login`, {
        email,
        password,
      })
      .pipe(
        tap((response) => {
          this.userTokenService.storeToken(response.access_token);
        })
      );
  }

  logout() {
    this.userTokenService.removeToken();
  }

  isAuthenticated(): boolean {
    const token = this.userTokenService.getToken();
    return !!token && !this.userTokenService.isTokenExpired(token);
  }
}
