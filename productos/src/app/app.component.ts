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
  productos : Producto[] = [];

  consumirServicioAll () {    
    this.productoService.listarProductosAll().subscribe(result => {
      this.productos = result;
    })
  }

  consumirServicioEliminar (id : string | undefined) {    
    this.productoService.eliminarProducto(id).subscribe(result => {
      this.productos = result;
    })
  }
}
