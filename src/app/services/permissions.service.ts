import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { UserTokenService } from './user-token.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class PermissionsService {
  constructor(
    private authService: AuthService,
    private userTokenService: UserTokenService
  ) {}

  canActivate(routePermissions: string[]): boolean {
    if (!this.authService.isAuthenticated()) {
      return false;
    }

    const token = this.userTokenService.getToken();
    const jwtHelper = new JwtHelperService();
    const decodedToken = jwtHelper.decodeToken(token);
    const userPermissions = decodedToken.permissions;

    return routePermissions.every((permission) =>
      userPermissions.includes(permission)
    );
  }
}
