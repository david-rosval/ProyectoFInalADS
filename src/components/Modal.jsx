import React from "react";
import { registrarPost } from "../lib/conexionApi";

const Modal = ({
  openModal,
  setOpenModal,
  nombresYApellidos,
  setNombresYApellidos,
  edad,
  setEdad,
  telefono,
  setTelefono,
  direccion,
  setDireccion,
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white p-5 w-1/3 shadow-md rounded-lg">
        <form>
          <h3 className="text-center text-3xl text-bold mb-8">
            Agregar nuevo cliente
          </h3>
          <div className="">
            <label htmlFor="nombresYApellidos" className="block">
              Nombres y apellidos
            </label>
            <input
              type="text"
              id="nombresYApellidos"
              className="block w-full border p-2 rounded-md"
              placeholder="Ej. Juan Perez"
              onChange={(e) => setNombresYApellidos(e.target.value)}
              value={nombresYApellidos}
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
                onChange={(e) => setEdad(e.target.value)}
                value={edad}
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
                onChange={(e) => setTelefono(e.target.value)}
                value={telefono}
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
                onClick={(e) => {
                  e.preventDefault();
                  const nuevoCliente = {
                    "nombres_y_apellidos": nombresYApellidos,
                    "edad": edad,
                    "telefono": telefono,
                    "direccion": direccion
                  }
                  registrarPost("clientes", nuevoCliente);
                  setOpenModal(false);
                }}
              >
                Agregar cliente
              </button>
            </div>
            <div>
              <button
                className="cursor-pointer py-2 w-full bg-slate-300 hover:bg-slate-400 text-gray-700 font-semibold text-center rounded-md mt-2"
                onClick={(e) => {
                  e.preventDefault();
                  setOpenModal(false);
                }}
              >
                {" "}
                Cancelar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
