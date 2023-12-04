import React from "react";

const BarraBusquedaCliente = ({
    clienteBusqueda,
    setClienteBusqueda,
    setBtnBuscarClick,
    setAsignacionNuevasMedidas,
    handleButtonBuscarCliente,
}) => {
  return (
    <li className="flex flex-row gap-2 mb-2">
      <input
        className="border w-3/4 py-2 px-3 rounded-md"
        id="input-buscar-cliente "
        type="text"
        placeholder="Nombre del cliente"
        onChange={(e) => {
          setClienteBusqueda(e.target.value);
          setBtnBuscarClick(false);
          setAsignacionNuevasMedidas(false);
        }}
        value={clienteBusqueda}
      />
      <button
        className="rounded-md w-1/4 bg-slate-700 hover:bg-slate-800 text-white font-semibold px-2 text-center"
        onClick={handleButtonBuscarCliente}
      >
        Buscar
      </button>
    </li>
  );
};

export default BarraBusquedaCliente;
