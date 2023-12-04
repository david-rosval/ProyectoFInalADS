import React from "react";

const DatosCliente = ({
    cliente,
    setNotaAdicional,
    notaAdicional,
}) => {
  return (
    <div className="w-full">
      <p className=" font-semibold text-4xl mb-8">
        {cliente["nombres_y_apellidos"]}
      </p>
      <div className="flex flex-row">
        <p className="w-1/2 mb-2">Edad: {cliente["edad"]}</p>
        <p className="w-1/2 mb-2">Teléfono: {cliente["telefono"]}</p>
      </div>
      <p className="mb-2"> Dirección: {cliente["direccion"]}</p>
      <label htmlFor="notaAdicional">Nota adicional: {""}</label>
      <textarea
        className="mt-2 border w-full py-2 px-3 rounded-md"
        id="notaAdicional"
        type="text"
        placeholder="Detalle de lunas"
        onChange={(e) => setNotaAdicional(e.target.value)}
        value={notaAdicional}
      ></textarea>
    </div>
  );
};

export default DatosCliente;
