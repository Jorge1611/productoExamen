import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '**', component: LoginComponent },
];

export const AppRoutes = RouterModule.forRoot(routes);
