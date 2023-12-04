import { useEffect, useState } from "react";
import { obtenerEspecifico } from "./lib/conexionApi";
import Modal from "./components/Modal";

export const Prescripcion = () => {
  // States para la búsqueda de clientes
  const [clienteBusqueda, setClienteBusqueda] = useState("");
  const [btnBuscarClick, setBtnBuscarClick] = useState(false);
  const [clientes, setClientes] = useState([]);
  const [cliente, setCliente] = useState({});
  const [openModal, setOpenModal] = useState(false);

  // States para medidas
  const [medidas, setMedidas] = useState([]);
  const [medidasEncontradas, setMedidasEncontradas] = useState(false);

  // lejos
  const [esferaODlejos, setEsferaODLejos] = useState(0);
  const [cilindroODlejos, setCilindroODlejos] = useState(0);
  const [ejeODlejos, setEjeODlejos] = useState(0);
  const [agudezavisualODlejos, setAgudezavisualODlejos] = useState(0);
  const [esferaOIlejos, setEsferaOIlejos] = useState(0);
  const [cilindroOIlejos, setCilindroOIlejos] = useState(0);
  const [ejeOIlejos, setEjeOIlejos] = useState(0);
  const [agudezavisualOIlejos, setAgudezavisualOIlejos] = useState(0);

  // cerca
  const [esferaODcerca, setEsferaODcerca] = useState(0);
  const [cilindroODcerca, setCilindroODcerca] = useState(0);
  const [ejeODcerca, setEjeODcerca] = useState(0);
  const [agudezavisualODcerca, setAgudezavisualODcerca] = useState(0);
  const [esferaOIcerca, setEsferaOIcerca] = useState(0);
  const [cilindroOIcerca, setCilindroOIcerca] = useState(0);
  const [ejeOIcerca, setEjeOIcerca] = useState(0);
  const [agudezavisualOIcerca, setAgudezavisualOIcerca] = useState(0);

  // States para crear nuevo cliente
  const [nombresYApellidos, setNombresYApellidos] = useState("");
  const [edad, setEdad] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");

  // States para crear nueva prescripción
  const [notaAdicional, setNotaAdicional] = useState("");

  useEffect(() => {
    if (btnBuscarClick) {
      obtenerEspecifico(
        "clientes/busqueda",
        { nombres_y_apellidos: clienteBusqueda },
        setClientes
      );
    } else return;
  }, [btnBuscarClick]);

  useEffect(() => {
    if (Object.keys(cliente).length !== 0) {
      obtenerEspecifico(
        "medidas/busqueda",
        { id_cliente: parseInt(cliente["id_cliente"]) },
        setMedidas
      );
    } else return;
  }, [cliente]);

  useEffect(() => {
    if (medidas.length !== 0) {
      setMedidasEncontradas(true);
      setEsferaODLejos(medidas[0]["Esfera_OD_lejos"]);
      setCilindroODlejos(medidas[0]["Cilindro_OD_lejos"]);
      setEjeODlejos(medidas[0]["Eje_OD_lejos"]);
      setAgudezavisualODlejos(medidas[0]["Agudeza_visual_OD_lejos"]);
      setEsferaOIlejos(medidas[0]["Esfera_OI_lejos"]);
      setCilindroOIlejos(medidas[0]["Cilindro_OI_lejos"]);
      setEjeOIlejos(medidas[0]["Eje_OI_lejos"]);
      setAgudezavisualOIlejos(medidas[0]["Agudeza_visual_OI_lejos"]);

      setEsferaODcerca(medidas[0]["Esfera_OD_cerca"]);
      setCilindroODcerca(medidas[0]["Cilindro_OD_cerca"]);
      setEjeODcerca(medidas[0]["Eje_OD_cerca"]);
      setAgudezavisualODcerca(medidas[0]["Agudeza_visual_OD_cerca"]);
      setEsferaOIcerca(medidas[0]["Esfera_OI_cerca"]);
      setCilindroOIcerca(medidas[0]["Cilindro_OI_cerca"]);
      setEjeOIcerca(medidas[0]["Eje_OI_cerca"]);
      setAgudezavisualOIcerca(medidas[0]["Agudeza_visual_OI_cerca"]);
    } else {
      setMedidasEncontradas(false);
      setEsferaODLejos(0);
      setCilindroODlejos(0);
      setEjeODlejos(0);
      setAgudezavisualODlejos(0);
      setEsferaOIlejos(0);
      setCilindroOIlejos(0);
      setEjeOIlejos(0);
      setAgudezavisualOIlejos(0);

      setEsferaODcerca(0);
      setCilindroODcerca(0);
      setEjeODcerca(0);
      setAgudezavisualODcerca(0);
      setEsferaOIcerca(0);
      setCilindroOIcerca(0);
      setEjeOIcerca(0);
      setAgudezavisualOIcerca(0);
    }
  }, [medidas]);

  const handleButtonBuscarCliente = (e) => {
    e.preventDefault();
    if (clienteBusqueda !== "") {
      setBtnBuscarClick(true);
    } else setBtnBuscarClick(false);
    //console.log(clientes);
  };

  const handleSubmitEmitirPrescripcion = (e) => {
    e.preventDefault()
    console.log('submit');
  }

  return (
    <div className=" w-3/5 flex flex-row my-5 p-5 h-auto">
      <div className="w-2/5 pr-5">
        {/* BARRA DE BÚSQUEDA DE CLIENTE */}
        <div className="flex flex-row gap-2 mb-2">
          <input
            className="border w-3/4 py-2 px-3 rounded-md"
            id="input-buscar-cliente "
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
                      setNotaAdicional("");
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
        /* ABRIR MODAL PARA AGREGAR CLIENTE */
        onClick={() => {
          console.log("agregar");
          setOpenModal(true);
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
        <form onSubmit={handleSubmitEmitirPrescripcion} className="px-5  flex flex-col w-3/5 h-full pb-5 border-l-2">
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

          {!medidasEncontradas && (
            <p className="mt-5 text-center text-xl text-gray-500">
              Llena las medidas del nuevo cliente
            </p>
          )}

          <div className=" flex flex-col items-center justify-center mt-5 px-5">
            <h3 className="font-semibold text-gray-500 mb-2 uppercase ">
              Lejos
            </h3>
            <div className="w-full flex items-end mb-8">
              <div className="">
                <p className="h-[34.81px] pr-2 font-semibold text-gray-500 text-center">
                  OD
                </p>
                <p className="h-[34.81px] pr-2 font-semibold text-gray-500 text-center">
                  OI
                </p>
              </div>
              <table className="rounded-lg bg-white text-center border-2 table-fixed  border-separate lg:border-collapse h-[6.5rem]">
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
                      <input
                        type="text"
                        className="text-center w-full h-full"
                        onChange={(e) =>
                          setEsferaODLejos(e.target.value)
                        }
                        value={esferaODlejos}
                      />
                    </td>
                    <td className="border">
                      <input
                        type="text"
                        className="text-center w-full h-full"
                        onChange={(e) =>
                          setCilindroODlejos(e.target.value)
                        }
                        value={cilindroODlejos}
                      />
                    </td>
                    <td className="border">
                      <input
                        type="text"
                        className="text-center w-full h-full"
                        onChange={(e) =>
                          setEjeODlejos(e.target.value)
                        }
                        value={ejeODlejos}
                      />
                    </td>
                    <td className="border">
                      <input
                        type="text"
                        className="text-center w-full h-full"
                        onChange={(e) =>
                          !medidasEncontradas &&
                          setAgudezavisualODlejos(e.target.value)
                        }
                        value={agudezavisualODlejos}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <input
                        type="text"
                        className="text-center w-full h-full"
                        onChange={(e) =>
                          setEsferaOIlejos(e.target.value)
                        }
                        value={esferaOIlejos}
                      />
                    </td>
                    <td className="border">
                      <input
                        type="text"
                        className="text-center w-full h-full"
                        onChange={(e) =>
                          setCilindroOIlejos(e.target.value)
                        }
                        value={cilindroOIlejos}
                      />
                    </td>
                    <td className="border">
                      <input
                        type="text"
                        className="text-center w-full h-full"
                        onChange={(e) =>
                          setEjeOIlejos(e.target.value)
                        }
                        value={ejeOIlejos}
                      />
                    </td>
                    <td className="border">
                      <input
                        type="text"
                        className="text-center w-full h-full"
                        onChange={(e) =>
                          setAgudezavisualOIlejos(e.target.value)
                        }
                        value={agudezavisualOIlejos}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className=" flex flex-col items-center justify-center mt-5">
              <h3 className="font-semibold text-gray-500 mb-2 uppercase ">
                Cerca
              </h3>
              <div className="w-full flex items-end mb-8">
                <div className="">
                  <p className="h-[34.81px] pr-2 font-semibold text-gray-500 text-center">
                    OD
                  </p>
                  <p className="h-[34.81px] pr-2 font-semibold text-gray-500 text-center">
                    OI
                  </p>
                </div>
                <table className="rounded-lg bg-white text-center border-2 table-fixed  border-separate lg:border-collapse h-[6.5rem]">
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
                        <input
                          type="text"
                          className="text-center w-full h-full"
                          onChange={(e) =>
                            setEsferaODcerca(e.target.value)
                          }
                          value={esferaODcerca}
                        />
                      </td>
                      <td className="border">
                        <input
                          type="text"
                          className="text-center w-full h-full"
                          onChange={(e) =>
                            setCilindroODcerca(e.target.value)
                          }
                          value={cilindroODcerca}
                        />
                      </td>
                      <td className="border">
                        <input
                          type="text"
                          className="text-center w-full h-full"
                          onChange={(e) =>
                            setEjeODcerca(e.target.value)
                          }
                          value={ejeODcerca}
                        />
                      </td>
                      <td className="border">
                        <input
                          type="text"
                          className="text-center w-full h-full"
                          onChange={(e) =>
                            !medidasEncontradas &&
                            setAgudezavisualODcerca(e.target.value)
                          }
                          value={agudezavisualODcerca}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="border">
                        <input
                          type="text"
                          className="text-center w-full h-full"
                          onChange={(e) =>
                            setEsferaOIcerca(e.target.value)
                          }
                          value={esferaOIcerca}
                        />
                      </td>
                      <td className="border">
                        <input
                          type="text"
                          className="text-center w-full h-full"
                          onChange={(e) =>
                            setCilindroOIcerca(e.target.value)
                          }
                          value={cilindroOIcerca}
                        />
                      </td>
                      <td className="border">
                        <input
                          type="text"
                          className="text-center w-full h-full"
                          onChange={(e) =>
                            setEjeOIcerca(e.target.value)
                          }
                          value={ejeOIcerca}
                        />
                      </td>
                      <td className="border">
                        <input
                          type="text"
                          className="text-center w-full h-full"
                          onChange={(e) =>
                            !medidasEncontradas &&
                            setAgudezavisualOIcerca(e.target.value)
                          }
                          value={agudezavisualOIcerca}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <button type="submit" className="rounded-md w-full py-3 mt-10 bg-slate-700 hover:bg-slate-800 text-white font-semibold uppercase ">
            Emitir Prescripción
          </button>
        </form>
      ) : (
        <div className="px-5  flex flex-col  w-3/5 h-full pb-20 border-l-2">
          <p className="text-gray-400 text-2xl font-semibold">
            No se ha seleccionado ningún cliente
          </p>
        </div>
      )}

      {openModal && (
        <Modal
          openModal={openModal}
          setOpenModal={setOpenModal}
          nombresYApellidos={nombresYApellidos}
          setNombresYApellidos={setNombresYApellidos}
          edad={edad}
          setEdad={setEdad}
          telefono={telefono}
          setTelefono={setTelefono}
          direccion={direccion}
          setDireccion={setDireccion}
        />
      )}
    </div>
  );
};
