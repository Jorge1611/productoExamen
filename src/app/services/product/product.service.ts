import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from 'src/app/models/product';
import { BaseService } from '../base.service';
import { Pais } from '../../models/pais.interface';

@Injectable()
export class ProductService {

constructor(private baseService: BaseService) { }

  getProducto(desde: number): Observable<Producto[]> {
    return this.baseService
    .get<Producto[]>('http://localhost:3000/producto?desde=' + desde);
  }

  postProducto(producto: Producto): Observable<Producto> {
    const token = localStorage.getItem('token');
    return this.baseService
    .post<Producto>('http://localhost:3000/producto?token=' +
     token
     , producto);
  }

  deleteProducto(id: number): Observable<Producto> {
    const token = localStorage.getItem('token');
    return this.baseService
    .delete<Producto>('http://localhost:3000/producto/' + id + '?token=' + token);
  }

  getAllProducto(termino: string): Observable<Producto[]> {
    return this.baseService
    .get<Producto[]>('http://localhost:3000/busqueda/coleccion/productos/' + termino);
  }

  getPaises(): Observable<Pais[]> {
    return this.baseService
    .get<Pais[]>('https://restcountries.eu/rest/v2/all');
  }
}
