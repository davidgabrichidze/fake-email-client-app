import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from './auth.service';
import { PermissionsService } from './permissions.service';

const isAuthenticated: CanActivateFn = () => {
  const authService = inject(AuthService);

  return authService.isAuthenticated();
};

const hasAdminPermission: CanActivateFn = () => {
  const permissionsService = inject(PermissionsService);

  return permissionsService.canActivate(['admin']);
};
