import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_ERROR,
  AGREGAR_PRODUCTO_EXITO,
} from "../types";

//creear nuevos productos

export function crearNuevoPorductoAction(producto) {
  return () => {
    console.log(producto);
  };
}
