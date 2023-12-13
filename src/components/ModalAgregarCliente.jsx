import React, { useState } from "react";
import { registrarPost } from "../lib/conexionApi";
import ErrorMessage from "./ErrorMessage";

const ModalAgregarCliente = ({
  openModal,
  setOpenModal,
  
  // campos para validar
  txtnombresYApellidos,
  setTxtNombresYApellidos,
  txtEdad,
  setTxtEdad,
  txtTelefono,
  setTxtTelefono,
  direccion,
  setDireccion,

  setError,
  setClienteBusqueda
}) => {

  const [errorDatosClienteVacios, setErrorDatosClienteVacios] = useState(false)
  const [errorDatosNoValidos, setErrorDatosNoValidos] = useState(false)

  const handleBtnAgregarCliente = async (e) => {
    e.preventDefault();

    setErrorDatosClienteVacios(false)
    setErrorDatosNoValidos(false)

    if (txtnombresYApellidos === "" || txtEdad === "" || txtTelefono === "" || direccion === "") {
      setErrorDatosClienteVacios(true)
      return
    } else if (isNaN(parseInt(txtEdad)) || isNaN(parseInt(txtTelefono))) {
      setErrorDatosNoValidos(true)
      return
    }

    const cliente = {
      "nombres_y_apellidos": txtnombresYApellidos,
      "edad": txtEdad,
      "telefono": txtTelefono,
      "direccion": direccion
    }

    console.log("sí se puede");

    await registrarPost("clientes", cliente)
    setOpenModal(false);
    setTxtNombresYApellidos("");
    setTxtEdad("");
    setTxtTelefono("");
    setDireccion("");
    setClienteBusqueda("")
  }


  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white p-5 w-1/3 shadow-md rounded-lg">
        <form>
          <h3 className="text-center text-3xl text-bold mb-8">
            Agregar nuevo cliente
          </h3>
          <div className="">
            <label htmlFor="txtnombresYApellidos" className="block">
              Nombres y apellidos
            </label>
            <input
              type="text"
              id="txtnombresYApellidos"
              className="block w-full border p-2 rounded-md"
              placeholder="Ej. Juan Perez"
              onChange={(e) => setTxtNombresYApellidos(e.target.value)}
              value={txtnombresYApellidos}
            />
          </div>
          <div className="flex flex-row gap-3 my-3">
            <div className="w-1/2">
              <label htmlFor="edad" className="block">
                Edad
              </label>
              <input
                type="number"
                id="edad"
                className="block w-full border p-2 rounded-md"
                placeholder="Ej. 40"
                onChange={(e) => setTxtEdad(e.target.value)}
                value={txtEdad}
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="telefono" className="">
                Telefono
              </label>
              <input
                type="text"
                id="telefono"
                className="block w-full border p-2 rounded-md"
                placeholder="Ej. 999888777"
                onChange={(e) => setTxtTelefono(e.target.value)}
                value={txtTelefono}
              />
            </div>
          </div>
          <div>
            <label htmlFor="direccion" className="">
              Direccion
            </label>
            <input
              type="text"
              id="direccion"
              className="block w-full border p-2 rounded-md"
              placeholder="Ej. Calle 123"
              onChange={(e) => setDireccion(e.target.value)}
              value={direccion}
            />
          </div>
          <div>
            <div>
              <button
                type="submit"
                className="cursor-pointer py-2 w-full bg-slate-700 hover:bg-slate-800 text-white font-semibold text-center rounded-md mt-5"
                onClick={e => handleBtnAgregarCliente(e)}
              >
                Agregar cliente
              </button>
            </div>
            <div>
              { errorDatosClienteVacios && <ErrorMessage mensaje={"Todos los campos son obligatorios"} />}
              { errorDatosNoValidos && <ErrorMessage mensaje={"Ingresar datos válidos"} />}
              <button
                className="cursor-pointer py-2 w-full bg-slate-300 hover:bg-slate-400 text-gray-700 font-semibold text-center rounded-md mt-2"
                onClick={(e) => {
                  e.preventDefault();
                  setOpenModal(false);
                  setTxtNombresYApellidos("");
                  setTxtEdad("");
                  setTxtTelefono("");
                  setDireccion("");
                  setClienteBusqueda("");
                }}
              >
                Cancelar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalAgregarCliente;
