import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { ProductsComponent } from './products/products.component';
import { ProductNewComponent } from './product-new/product-new.component';
import { LoginGuard } from '../services/guards/login-guard';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    canActivate:[ LoginGuard ],
    children:[
      { path: 'products', component: ProductsComponent },
      { path: 'products-new', component: ProductNewComponent },
      { path: '', redirectTo: '/products', pathMatch: 'full' },
    ]
  }
];

export const PagesRoutes = RouterModule.forChild(routes);
