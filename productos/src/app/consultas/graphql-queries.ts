import { gql } from 'apollo-angular';

export const LISTAR_PRODUCTOS_QUERY_ID_NOMBRE_PRECIO = gql`
  query {
    listarProductos {
      id
      nombre
      precio
    }
  }
`;

export const LISTAR_PRODUCTOS_QUERY_ID_ALL = gql`
  query {
    listarProductos {
      id
      nombre
      precio
      cantidad
      categoria {
        id
        nombre
      }
    }
  }
  `;

export const ELIMINAR_PRODUCTO_MUTATION =  gql`
  mutation eliminarProducto ($id: String!) {
    eliminarProducto (id: $id) 
  }
`;

export const AGREGAR_PRODUCTO_MUTATION =  gql`
  mutation guardarProducto ($producto : ProductoRequest!) {
    guardarProducto (productoRequest : $producto){
      id
      nombre
      precio
      cantidad
      categoriaId
    }
  }
`;