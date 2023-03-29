import { Route } from '@angular/router';
import { AuthSignInComponent } from 'app/auth/sign-in/sign-in.component';

export const authSignInRoutes: Route[] = [
  {
    path: '',
    component: AuthSignInComponent,
  },
];
