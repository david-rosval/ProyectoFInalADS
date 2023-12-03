import { useEffect, useState } from "react";
import { obtenerLike } from "./lib/conexionApi";

export const Prescripcion = () => {
  // States para la búsqueda de clientes
  const [clienteBusqueda, setClienteBusqueda] = useState("");
  const [btnBuscarClick, setBtnBuscarClick] = useState(false);
  const [clientes, setClientes] = useState([]);
  const [cliente, setCliente] = useState({});

  useEffect(() => {
    if (btnBuscarClick) {
      obtenerLike(
        "clientes/busqueda",
        { nombres_y_apellidos: clienteBusqueda },
        setClientes
      );
    } else return;
  }, [btnBuscarClick]);

  const handleButtonBuscarCliente = (e) => {
    e.preventDefault();
    if (clienteBusqueda !== "") {
      setBtnBuscarClick(true);
    } else setBtnBuscarClick(false);
    //console.log(clientes);
  };

  return (
    <div className="pb-20 w-3/5 flex flex-row mt-10 px-5 h-[calc(100vh-208px)]">
      <div className="w-2/5 pr-5">
        {/* BARRA DE BÚSQUEDA DE CLIENTE */}
        <div className="flex flex-row gap-2 mb-2">
          <input
            className="border w-3/4 py-2 px-3 rounded-md"
            id="input-buscar-cliente"
            type="text"
            placeholder="Nombre del cliente"
            onChange={(e) => {
              setClienteBusqueda(e.target.value);
              setBtnBuscarClick(false);
            }}
            value={clienteBusqueda}
          />
          <button
            className="rounded-md w-1/4 bg-slate-700 hover:bg-slate-800 text-white font-semibold px-2 text-center"
            onClick={handleButtonBuscarCliente}
          >
            Buscar
          </button>
        </div>

        {/* DROPDOWN DE CLIENTES ENCONTRADOS */}
        <ul>
          {clientes && clienteBusqueda !== "" && btnBuscarClick !== false
            ? clientes.map((cliente) => {
                const nombresYApellidos = "nombres_y_apellidos";
                const idCliente = "id_cliente";
                return (
                  <li
                    key={cliente[idCliente]}
                    onClick={() => {
                      setBtnBuscarClick(false);
                      setClienteBusqueda("");
                      setCliente(cliente);
                    }}
                    className="cursor-pointer hover:font-semibold hover:bg-slate-50 p-2"
                  >
                    <p>{cliente[nombresYApellidos]}</p>
                    <p className="text-sm text-slate-400">{cliente["edad"]}</p>
                    <p className="text-sm text-slate-400">
                      {cliente["telefono"]}
                    </p>
                    <p className="text-sm text-slate-400">
                      {cliente["direccion"]}
                    </p>
                  </li>
                );
              })
            : ""}
        </ul>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-user-plus cursor-pointer hover:stroke-slate-800 mr-5"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        strokeWidth="2.5"
        stroke="#334155"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        onClick={() => {
          console.log("agregar");
        }}
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
        <path d="M16 19h6" />
        <path d="M19 16v6" />
        <path d="M6 21v-2a4 4 0 0 1 4 -4h4" />
      </svg>

      {/* MOSTRAR CLIENTE SELECCIONADO */}
      {Object.keys(cliente).length !== 0 ? (
        <div className="px-5  flex flex-col w-3/5 h-full pb-20 border-l-2">
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
            ></textarea>
          </div>
          <div className="flex flex-col items-center gap-8 justify-center mt-10 px-5">
            <table className="text-center border-2 table-fixed w-4/5 h-[6.5rem] border-separate lg:border-collapse">
              <thead className="border-2">
                <tr>
                  <th className="border">Esfera</th>
                  <th className="border">Cilindro</th>
                  <th className="border">Eje</th>
                  <th className="border">A/Y</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border">
                    <input type="text" className="w-full h-full" />
                  </td>
                  <td className="border">
                    <input type="text" className="w-full h-full" />
                  </td>
                  <td className="border">
                    <input type="text" className="w-full h-full" />
                  </td>
                  <td className="border">
                    <input type="text" className="w-full h-full" />
                  </td>
                </tr>
                <tr>
                  <td className="border">
                    <input type="text" className="w-full h-full" />
                  </td>
                  <td className="border">
                    <input type="text" className="w-full h-full" />
                  </td>
                  <td className="border">
                    <input type="text" className="w-full h-full" />
                  </td>
                  <td className="border">
                    <input type="text" className="w-full h-full" />
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="text-center border-2 table-fixed w-4/5 h-[6.5rem] border-separate lg:border-collapse">
              <thead>
                <tr>
                  <th className="border">Esfera</th>
                  <th className="border">Cilindro</th>
                  <th className="border">Eje</th>
                  <th className="border">A/Y</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border">
                    <input type="text" className="w-full h-full" />
                  </td>
                  <td className="border">
                    <input type="text" className="w-full h-full" />
                  </td>
                  <td className="border">
                    <input type="text" className="w-full h-full" />
                  </td>
                  <td className="border">
                    <input type="text" className="w-full h-full" />
                  </td>
                </tr>
                <tr>
                  <td className="border">
                    <input type="text" className="w-full h-full" />
                  </td>
                  <td className="border">
                    <input type="text" className="w-full h-full" />
                  </td>
                  <td className="border">
                    <input type="text" className="w-full h-full" />
                  </td>
                  <td className="border">
                    <input type="text" className="w-full h-full" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <button className="rounded-md w-full py-3 mt-10 bg-slate-700 hover:bg-slate-800 text-white font-semibold uppercase ">
            Emitir Prescripción
          </button>
        </div>
      ) : (
        <div className="px-5  flex flex-col  w-3/5 h-full pb-20 border-l-2">
          <p className="text-gray-400 text-2xl font-semibold">
            No se ha seleccionado ningún cliente
          </p>
        </div>
      )}
    </div>
  );
};
