import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { LISTAR_PRODUCTOS_QUERY_ID_ALL, LISTAR_PRODUCTOS_QUERY_ID_NOMBRE_PRECIO } from '../consultas/graphql-queries';
import { map } from 'rxjs/operators';
import { Producto } from '../interfaces/producto'

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private apollo: Apollo) {}
  
  listarProductos() {
    return this.apollo
      .query<{ listarProductos: Producto[] }>({
        query: LISTAR_PRODUCTOS_QUERY_ID_NOMBRE_PRECIO,
      })
      .pipe(
        map((result) => {
          return result.data['listarProductos'];
        })
      );
  }

  listarProductosAll() {
    return this.apollo
      .query<{ listarProductos: Producto[] }>({
        query: LISTAR_PRODUCTOS_QUERY_ID_ALL,
      })
      .pipe(
        map((result) => {
          return result.data['listarProductos'];
        })
      );
  }
}
