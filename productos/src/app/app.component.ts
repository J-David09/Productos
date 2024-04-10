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

  ngOnInit(){
    /* alert("Hola") */
    this.consumirServicioAll();
  }

  title = 'productos';
  productos : Producto[] = [];

  consumirServicioAll () {    
    this.productoService.listarProductosAll().subscribe(result => {
      this.productos = result;
    })
  }

  consumirServicioEliminar (id : string) { 
    console.log('Esto es el id -> '+id)   
    this.productoService.eliminarProducto(id).subscribe(result => {
      window.location.reload();
    })
  }
}
