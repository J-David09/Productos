import { Component } from '@angular/core';
import { ProductosService } from './services/productos.service';
import { Producto } from './interfaces/producto';
import { ProductoRequest } from './interfaces/productoRequest';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  producto : ProductoRequest = {
      id:"0",
      nombre:"",
      precio:0.0,
      cantidad:0,
      categoriaId: 0,
  };
  title = 'productos';
  productos : Producto[] = [];

  constructor(private productoService: ProductosService) {    
  }  

  ngOnInit(){    
    this.consumirServicioAll();
  }

  consumirServicioAll () {    
    this.productoService.listarProductosAll().subscribe(result => {
      this.productos = result;
    })
  }

  consumirServicioEliminar (id : string) {     
    this.productoService.eliminarProducto(id).subscribe(result => {
      window.location.reload();
    })
  }

  consumirServicioAgregar () { 
    console.log('Esto es el id -> '+ this.producto.id)   
    this.productoService.agregarProducto(this.producto).subscribe(result => {
      window.location.reload();
    })
  }
}
