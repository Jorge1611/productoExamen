import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product/product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/product';
import { Pais } from '../../models/pais.interface';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.scss']
})
export class ProductNewComponent implements OnInit {
  productoForm: FormGroup;
  submitted = false;
  pasises: Pais[] = [];

  constructor(private productoServices: ProductService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    this.productoForm = this.formBuilder.group({
      producto: ['', Validators.required],
      fechaLanzamiento: ['', Validators.required],
      correoFabricante: ['', Validators.required],
      paisFabricacion: ['', Validators.required],
      precio: ['', Validators.required],
      unidadesDisponibles: ['', Validators.required],
      unidadesVendidas: ['', Validators.required],
      caracteristicas: ['', Validators.required],
    });

    this.productoServices.getPaises()
    .subscribe(paises => {
      this.pasises = paises;
      console.log(this.pasises);
    });
  }

  get f() { return this.productoForm.controls; }

  crearProducto() {
    const model: Producto = new Producto();
    model.caracteristicas = this.f.caracteristicas.value;
    model.correoFabricante = this.f.correoFabricante.value;
    model.fechaLanzamiento = this.f.fechaLanzamiento.value;
    model.paisFabricacion = this.f.paisFabricacion.value;
    model.precio = this.f.precio.value;
    model.producto = this.f.producto.value;
    model.unidadesDisponibles = this.f.unidadesDisponibles.value;
    model.unidadesVendidas = this.f.unidadesVendidas.value;

    this.productoServices.postProducto(model)
    .subscribe(
      producto => {
        this.router.navigate(['/products']);
      },
      err => {
      }
    );
  }

}
