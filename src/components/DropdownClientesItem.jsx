import React from "react";

const DropdownClientesItem = ({ cli, setBtnBuscarClick, setCliente, setClienteBusqueda, setNotaAdicional }) => {
  return (
    <li
      key={cli["id_cliente"]}
      onClick={() => {
        setBtnBuscarClick(false);
        setClienteBusqueda("");
        setCliente(cli);
        setNotaAdicional("");
      }}
      className="cursor-pointer hover:font-semibold hover:bg-slate-50 p-2 "
    >
      <p>{cli["nombres_y_apellidos"]}</p>
      <p className="text-sm text-slate-400">{cli["edad"]}</p>
      <p className="text-sm text-slate-400">{cli["telefono"]}</p>
      <p className="text-sm text-slate-400">{cli["direccion"]}</p>
    </li>
  );
};

export default DropdownClientesItem;
