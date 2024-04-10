export interface Producto {
    id: string;
    nombre?: string;
    precio?: number;
    cantidad?: number;
    categoria: {
      id: number;
      nombre?: string;
    };
  }