import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product/product.service';
import { Producto } from '../../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productos: Producto[] = [];
  desde: number = 0;
  totalRegistros: number = 0;
  cargando: boolean = true;
  constructor(private productoService: ProductService) { }

  ngOnInit() {
    this.cargarProducto();
  }
  cargarProducto()
  {
    this.productoService.getProducto(this.desde)
    .subscribe(
      (productos: any) => {
        this.productos = productos.producto;
        this.totalRegistros = productos.total;
        console.log(this.productos);
      },
      err => {
        console.log(err);
      }
    );
  }

  cambiarDesde(valor: number) {
    const desde = this.desde + valor;

    if (desde >= this.totalRegistros) {
      return;
    }

    if (desde < 0) {
      return;
    }

    this.desde += valor;
    this.cargarProducto();
  }

  borrarProducto(producto: Producto) {
    this.productoService.deleteProducto(producto._id)
    .subscribe(
      (productos: any) => {
       this.cargarProducto();
      },
      err => {
        console.log(err);
      }
    );
  }

  buscarProducto(termino: string) {
    if (termino.length <= 0) {
      this.cargarProducto();
      return;
    }
    this.cargando = true;
    this.productoService.getAllProducto(termino)
      .subscribe((productos: any) => {
        this.productos = productos.productos;
        console.log(productos);
        this.cargando = false;
      });
  }

}
