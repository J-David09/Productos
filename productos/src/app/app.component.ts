import { Component } from '@angular/core';
import { ProductosService } from './services/productos.service';
import { Producto } from './interfaces/producto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private productoService: ProductosService) {
  }

  title = 'productos';

  isConsumirAll : Boolean = false;
  productos : Producto[] = [];


  consumirServicio () {
    this.isConsumirAll = false;
    this.productoService.listarProductos().subscribe(result => {
      this.productos = result;
    })
  }

  consumirServicioAll () {
    this.isConsumirAll = true;
    this.productoService.listarProductosAll().subscribe(result => {
      this.productos = result;
    })
  }
}
