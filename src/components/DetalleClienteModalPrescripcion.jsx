import React from "react";

const DetalleClienteModalPrescripcion = ({ cliente, notaAdicional }) => {
  return (
    (cliente && Object.keys(cliente).length !== 0) > 0 && (
      <div className="w-full h-full mr-5 flex flex-row justify-center">
        <div className="flex flex-col w-full">
          <p className=" mb-2">Edad: {cliente["edad"]}</p>
          <p className=" mb-2">Teléfono: {cliente["telefono"]}</p>
        </div>
        <div className="flex flex-col w-full">
          <p className=" mb-2"> Dirección: {cliente["direccion"]}</p>
          <p className=" mb-2"> Nota adicional: {notaAdicional}</p>
        </div>
      </div>
    )
  );
};

export default DetalleClienteModalPrescripcion;
