import React, { useEffect, useState } from "react";
import CatalogoMonturaCard from "./components/CatalogoMonturaCard";
import {
  actualizarPut,
  cargarApi,
  obtenerEspecifico,
  registrarPost,
  obtenerGet,
  prescripcionPdff,
} from "./lib/conexionApi";
import ModalVerCarrito from "./components/ModalVerCarrito";
import { Navigate } from "react-router";

export const Catalogo = ({ setCarrito, carrito, monturas, setMonturas, setPrecioTotal, setPrescripcion, prescripcion }) => {
  // Se obtienen primero los detalles de cada montura
  
  // se obtienen los datos de precio, stock y código
  const [monturasInventario, setmonturasInventario] = useState([]);

  const [montura, setMontura] = useState({})
  const [monturaInventario, setMonturaInventario] = useState({})

  const [errorConsultaMonturasInv, setsetErrorConsultaMonturasInv] =
    useState(false); 
    
  const [errorUltimaPrescripcion, setsetErrorUltimaPrescripcion] =
    useState(false);

  const [btnBuscarMonturaCodigo, setbtnBuscarMonturaCodigo] = useState(false);

  const [modalVerCarrito, setModalVerCarrito] = useState(false)

  const [irAlCarrito, setIrAlCarrito] = useState(false)

  useEffect(() => {

  }, []);
  
  // obtener catalogo de monturas
  useEffect(() => {
    obtenerGet(
      "monturas_inventario",
      setmonturasInventario,
      setsetErrorConsultaMonturasInv
    );
  }, []);

  useEffect(() => {
    const pdfPrescripcion = async () => {
      await obtenerGet("prescripciones/ultimoregistro", setPrescripcion, setsetErrorUltimaPrescripcion);
      await prescripcionPdff(prescripcion[0]["id_prescripcion"])
    }
    pdfPrescripcion()
  }, []);



  return (
    <div className="mx-20 mt-5">
      
      <div className="flex flex-col justify-center items-center">
        <h1 className="my-10 text-5xl font-semibold text-center">Catálogo de monturas</h1>
        {/* <div className="flex flex-row gap-2 mb-2 w-1/3">
          <input
            className="border w-3/4 py-2 px-3 rounded-md"
            id="input-buscar-cliente "
            type="text"
            placeholder="Código de  montura"
          />
          <button className="rounded-md w-1/4 bg-slate-700 hover:bg-slate-800 text-white font-semibold px-2 text-center">
            Buscar
          </button>
        </div> */}
      </div>
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {monturasInventario.map((monturaInventario) => {
          const montura = monturas.find(
            (montura) =>
              montura["id_montura"] === monturaInventario["id_montura"]
          );
          return (
            <CatalogoMonturaCard
              key={montura["id_montura"]}
              montura={montura}
              monturaInventario={monturaInventario}
              setModalVerCarrito={setModalVerCarrito}
              setMontura={setMontura}
              setMonturaInventario={setMonturaInventario}
              setCarrito={setCarrito}
              carrito={carrito}
              setPrecioTotal={setPrecioTotal}
            />
          );
        })}
      </div>
      {modalVerCarrito && (
        <ModalVerCarrito montura={montura} monturaInventario={monturaInventario} setModalVerCarrito={setModalVerCarrito} carrito={carrito} setMontura={setMontura} setMonturaInventario={setMonturaInventario} setIrAlCarrito={setIrAlCarrito} />
      )}

      {irAlCarrito && (
        <Navigate to="/carrito" replace={true}/>
      )}

    </div>
  );
};
