import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { ELIMINAR_PRODUCTO_MUTATION, LISTAR_PRODUCTOS_QUERY_ID_ALL, LISTAR_PRODUCTOS_QUERY_ID_NOMBRE_PRECIO } from '../consultas/graphql-queries';
import { map } from 'rxjs/operators';
import { Producto } from '../interfaces/producto'

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private apollo: Apollo) {}
  
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

  eliminarProducto(id: string) {
    return this.apollo
      .mutate<any>({
        mutation: ELIMINAR_PRODUCTO_MUTATION,
        variables: { id },
      })
      .pipe(
        map((result) => {
          return result.data['eliminarProductos'];
        })
      );
  }
}
