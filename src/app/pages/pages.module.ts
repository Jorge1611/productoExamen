import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { PagesRoutes } from './pages.routing';
import { ProductsComponent } from './products/products.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductNewComponent } from './product-new/product-new.component';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutes,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [
    PagesComponent,
    ProductsComponent,
    ProductNewComponent
  ],
  exports: [
  ]
})
export class PagesModule { }
