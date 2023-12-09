import React, { useState } from "react";
import { formatearStringUrlImagen } from "../lib/funciones";

export const CarritoItem = ({
  carritoItem,
  setCarrito,
  precioTotal,
  setPrecioTotal,
  carrito,
}) => {
  const imagen = carritoItem["montura"]["imagen"];

  const { src, alt, border } = formatearStringUrlImagen(imagen);

  const [cantidad, setCantidad] = useState(carritoItem["cantidad"]);

  return (
    <div className="w-full p-10 flex justify-between items-center border-b border-black">
      <div className="">
        <img width={200} src={src} alt={alt} border={border} />
      </div>
      <div className="block w-[350px]">
        <p className="truncate uppercase text-xl font-semibold">
          {carritoItem["montura"]["nombre_montura"]}
        </p>
        <p className="mb-3 text-gray-500">{carritoItem["montura"]["marca"]}</p>
        <p>
          Material:{" "}
          <span className="uppercase">
            {carritoItem["montura"]["material"]}
          </span>
        </p>
        <p>
          Color:{" "}
          <span className="uppercase">{carritoItem["montura"]["color"]}</span>
        </p>
      </div>
      <div className="w-[80px] text-center">
        S/.{carritoItem["monturaInventario"]["precio_unit"]} c/u
      </div>
      <div className="flex">
        <button
          className="bg-gray-200 h-8 w-8 text-lg hover:bg-gray-300 disabled:cursor-default disabled:text-gray-400 disabled:hover:bg-gray-200"
          onClick={() => {
            // falta eliminar
            carritoItem["cantidad"] = cantidad - 1;
            setCantidad(cantidad - 1);
            console.log(carritoItem);
            setPrecioTotal(
              carrito.reduce(
                (total, carritoItem) =>
                  total +
                  carritoItem["cantidad"] *
                    carritoItem["monturaInventario"]["precio_unit"],
                0
              )
            );
          }}
          disabled={cantidad === 1}
        >
          -
        </button>
        <p className="mx-2 h-8 w-10 text-center">{cantidad}</p>
        <button
          className="bg-gray-200 h-8 w-8 text-lg hover:bg-gray-300 disabled:cursor-default disabled:text-gray-400 disabled:hover:bg-gray-200"
          onClick={() => {
            // falta eliminar
            carritoItem["cantidad"] = cantidad + 1;
            setCantidad(cantidad + 1);
            console.log(carritoItem);
            setPrecioTotal(
              carrito.reduce(
                (total, carritoItem) =>
                  total +
                  carritoItem["cantidad"] *
                    carritoItem["monturaInventario"]["precio_unit"],
                0
              )
            );
          }}
          disabled={cantidad === carritoItem["monturaInventario"]["stock"]}
        >
          +
        </button>
      </div>
      <div className="w-[80px] text-center text-sm font-semibold">
        S/.{" "}
        <span className="text-2xl">
          {cantidad * carritoItem["monturaInventario"]["precio_unit"]}
        </span>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-trash cursor-pointer"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          strokeWidth="1"
          stroke="#ff0000"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          onClick={() => {
            setCarrito(carrito.filter((carritoItemFiltrado) => carritoItemFiltrado["monturaInventario"]["codigo"] !== carritoItem["monturaInventario"]["codigo"])); 
            setPrecioTotal(precioTotal - (carritoItem["cantidad"]*carritoItem["monturaInventario"]["precio_unit"]))
          }}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4 7l16 0" />
          <path d="M10 11l0 6" />
          <path d="M14 11l0 6" />
          <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
          <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
        </svg>
      </div>
    </div>
  );
};
