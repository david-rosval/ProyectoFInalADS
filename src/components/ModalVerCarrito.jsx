import React from "react";
import { formatearStringUrlImagen } from "../lib/funciones";

const ModalVerCarrito = ({
  montura = {
    "id_montura": 10,
    "nombre_montura": "Nombre monturaaaaaaaaaaaaaaaaaaa",
    "imagen":
      '<img src="https://i.ibb.co/jHWcz8B/EBJ8-NK3-Ko81-301-C5-Frontal.png" alt="EBJ8-NK3-Ko81-301-C5-Frontal" border="0">',
    "marca": "Marca montura",
    "color": "Color montura",
    "material": "Material Montura",
  },
  monturaInventario = {
    "id_montura_inventario": 10,
    "id_montura": 8,
    "precio_unit": 90,
    "stock": 20,
    "codigo": "montura8",
  },
  setModalVerCarrito,
  carrito,
  setMontura,
  setMonturaInventario
}) => {
  const { src, alt, border } = formatearStringUrlImagen(montura["imagen"]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white px-10 py-5 w-[790.5px] shadow-md rounded-lg ">
        <div className=" flex items-center justify-between border-b-2 border-black pb-2">
          <p className="uppercase">Recién añadido a tu carrito de compra</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-x w-10 h-10 rounded-full cursor-pointer p-1"
            width="25"
            height="25"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="#000000"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            onClick={() => {
                setMonturaInventario({})
                setMontura({})
                setModalVerCarrito(false)
            }}
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
          </svg>
        </div>
        <div className="flex w-full my-10 ">
          <div className="w-1/2">
            <img src={src} alt={alt} border={border} />
          </div>
          <div className="w-1/2">
            <div className="flex flex-col gap-2">
              <p className="w-full text-xl truncate uppercase">
                {montura["nombre_montura"]}
              </p>
              <p className="text-xl uppercase">{montura["marca"]}</p>
              <p className="mt-3">
                Color: <span className="uppercase">{montura["color"]}</span>
              </p>
              <p className="">
                Material:{" "}
                <span className="uppercase">{montura["material"]}</span>
              </p>
            </div>
          </div>
        </div>
        <button className="w-full text-xl py-4 uppercase border-2 cursor-pointer border-black hover:bg-gray-300">
          Ver Carrito {0}
        </button>
      </div>
    </div>
  );
};

export default ModalVerCarrito;
