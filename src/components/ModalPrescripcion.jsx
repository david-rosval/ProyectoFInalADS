import React from "react";
import DetalleTablaMedidas from "./DetalleTablaMedidas";
import DetalleClienteModalPrescripcion from "./DetalleClienteModalPrescripcion";
import { registrarPost } from "../lib/conexionApi";

const ModalPrescripcion = ({
  setOpenModalPrescripcion,
  setPrescripcionLista,
  cliente,
  medidas,
  fechaFormateada,
  notaAdicional,
  setActualizacionMedidas,
  setAsignacionNuevasMedidas,
  setPrescripcionRegistrada
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white p-10 shadow-md rounded-lg">
        <form className="  flex flex-col w-full h-full ">
          <div className="flex flex-col w-full h-full p-5 px-10 mb-5 border-2 pt-5 rounded-lg ">
            <div className="flex flex-row justify-between text-gray-500">
              <p className="italic text-left w-ful mb-5">Prescripción</p>
              <p className="text-right w-ful mb-5">{fechaFormateada}</p>
            </div>
            <p className="font-semibold text-2xl mb-8 text-center">
              {cliente["nombres_y_apellidos"]}
            </p>
            <div className="flex flex-col">
              <div className="">
                <DetalleClienteModalPrescripcion
                  cliente={cliente}
                  notaAdicional={notaAdicional}
                />
              </div>
              <div>
                <DetalleTablaMedidas medidas={medidas} />
              </div>
            </div>
          </div>
          <h3 className="text-center text-2xl text-bold mb-8">
            ¿Estás seguro que deseas continuar?
          </h3>
          <div className="flex gap-5">
            <button
              className="cursor-pointer py-2 w-1/2 bg-slate-300 hover:bg-slate-400 text-gray-700 font-semibold text-center rounded-md mt-2"
              onClick={(e) => {
                e.preventDefault();
                console.log("No");
                setOpenModalPrescripcion(false);
                setActualizacionMedidas(false)
                setAsignacionNuevasMedidas(false)
                setPrescripcionLista(false);
              }}
            >
              No
            </button>
            
              <button
                type="submit"
                className="w-1/2 mt-2 cursor-pointer py-2  bg-slate-700 hover:bg-slate-800 text-white font-semibold text-center rounded-md "
                onClick={(e) => {
                  e.preventDefault();
                  const nuevaPrescripcion = {         
                    "id_medidas": medidas[0]["id_medidas"],
                    "detalle_lunas": notaAdicional,
                    "fecha": fechaFormateada,
                  };
          
                  registrarPost('prescripciones', nuevaPrescripcion)
                  setPrescripcionRegistrada(true)               
                }}
                >
                Sí
              </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalPrescripcion;
