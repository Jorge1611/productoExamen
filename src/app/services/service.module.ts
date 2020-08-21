import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BaseService } from './base.service';
import { ProductService } from './product/product.service';
import { LoginService } from './login/login.service';
import { SidebarService } from './shared/sidebar.service';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    BaseService,
    ProductService,
    LoginService,
    SidebarService
  ],
  declarations: []
})
export class ServiceModule { }
