import { useEffect, useState } from "react";
import {
  actualizarPut,
  cargarApi,
  encontrarMedidas,
  obtenerEspecifico,
  registrarPost,
} from "./lib/conexionApi";
import ModalAgregarCliente from "./components/ModalAgregarCliente";
import ModalPrescripcion from "./components/ModalPrescripcion";
import TablaMedidas from "./components/TablaMedidas";
import BarraBusquedaCliente from "./components/BarraBusquedaCliente";
import DatosCliente from "./components/DatosCliente";
import { Navigate } from "react-router-dom";
import ErrorMessage from "./components/ErrorMessage";

const fecha = new Date();
let dia = fecha.getDate();
let mes = fecha.getMonth() + 1; // Los meses en JavaScript empiezan desde 0
let año = fecha.getFullYear();

// Asegurándose de que el día y el mes sean de dos dígitos
if (dia < 10) dia = "0" + dia;
if (mes < 10) mes = "0" + mes;

const fechaFormateada = dia + "/" + mes + "/" + año;

export const Prescripcion = () => {
  // States para la búsqueda de clientes
  const [clienteBusqueda, setClienteBusqueda] = useState("");
  const [clientes, setClientes] = useState([]);
  const [cliente, setCliente] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [openModalPrescripcion, setOpenModalPrescripcion] = useState(false);

  // States para medidas
  const [idMedidas, setIdMedidas] = useState(0);
  const [noHayMedidas, setNoHayMedidas] = useState(false);

  // MEDIDAS ********************************************************

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

  // MEDIDAS ********************************************************

  // States para crear nuevo cliente
  const [txtnombresYApellidos, setTxtNombresYApellidos] = useState("");
  const [txtEdad, setTxtEdad] = useState("");
  const [txtTelefono, setTxtTelefono] = useState("");
  const [direccion, setDireccion] = useState("");

  // States para crear nueva prescripción
  const [notaAdicional, setNotaAdicional] = useState("");
  const [prescripcionRegistrada, setPrescripcionRegistrada] = useState(false);

  // validaciiones para el botón emitir prescripción
  const [errorNotaAdicionalVacía, setErrorNotaAdicionalVacía] = useState(false)
  const [errorMedidasVacías, setErrorMedidasVacías ] = useState(false)
  const [errorMedidasNumericas, setErrorMedidasNumericas] = useState(false)

  // validación para ir a catalogo
  const [emisionPrescripcionFinalizada, setEmisionPrescripcionFinalizada] = useState(false)


  // error de busqueda cliente
  const [error, setError] = useState(false);

  useEffect(() => {
    cargarApi();
  }, []);


  // BUSCAR CLIENTE ********************************************************
  const handleButtonBuscarCliente = (e) => {
    e.preventDefault();
    // condición de si el input de búsqueda de cliente está vacío
    if (clienteBusqueda !== "") {
      // llama a la función obtenerEspecífico de ConexionApi.js para buscar clientes de nombre similar
      obtenerEspecifico(
        "clientes/busqueda",
        { "nombres_y_apellidos": clienteBusqueda },
        setClientes,
        setError
      );
      console.log(clientes);
    } else {
      setError(true);
      console.log("no se encuentran clientes con nombre similar");
    }
    //console.log(clientes);
  };

  const handleSeleccionarCliente = (e, cli) => {
    e.preventDefault();

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

    setCliente(cli); // cliente almacenado

    // limpia los campos
    setClientes([]);
    setClienteBusqueda("");

    setNoHayMedidas(false)

    setNotaAdicional("");

    setIdMedidas(0)

    encontrarMedidas(
      cli,

      setEsferaODLejos,
      setCilindroODlejos,
      setEjeODlejos,
      setAgudezavisualODlejos,
      setEsferaOIlejos,
      setCilindroOIlejos,
      setEjeOIlejos,
      setAgudezavisualOIlejos,

      setEsferaODcerca,
      setCilindroODcerca,
      setEjeODcerca,
      setAgudezavisualODcerca,
      setEsferaOIcerca,
      setCilindroOIcerca,
      setEjeOIcerca,
      setAgudezavisualOIcerca,

      setNoHayMedidas,
      setIdMedidas
    );
    
  };



  const handleSubmitEmitirPrescripcion = (e) => {
    e.preventDefault()
    console.log('submit')

    setErrorNotaAdicionalVacía(false)
    setErrorMedidasVacías(false)
    setErrorMedidasNumericas(false)

    // validación de nota adicional vacía
    if (notaAdicional === "") {
      setErrorNotaAdicionalVacía(true)
      console.log('nota adicional vacía');
      return
    } 

    // validación de campos de medidas vacíos
    if (
      esferaODlejos === "" ||
      cilindroODlejos === "" ||
      ejeODlejos === "" ||
      agudezavisualODlejos === "" ||
      esferaOIlejos === "" ||
      cilindroOIlejos === "" ||
      ejeOIlejos === "" ||
      agudezavisualOIlejos === "" ||
      esferaODcerca === "" ||
      cilindroODcerca === "" ||
      ejeODcerca === "" ||
      agudezavisualODcerca === "" ||
      esferaOIcerca === "" ||
      cilindroOIcerca === "" ||
      ejeOIcerca === "" ||
      agudezavisualOIcerca === ""
    ) {
      setErrorMedidasVacías(true)
      console.log('medidas vacías');
    } else if ( // validación de datos numéricos
      isNaN(parseFloat(esferaODlejos))  ||
      isNaN(parseFloat(cilindroODlejos))  ||
      isNaN(parseFloat(ejeODlejos))  ||
      isNaN(parseFloat(agudezavisualODlejos))  ||
      isNaN(parseFloat(esferaOIlejos))  ||
      isNaN(parseFloat(cilindroOIlejos))  ||
      isNaN(parseFloat(ejeOIlejos))  ||
      isNaN(parseFloat(agudezavisualOIlejos))  ||
      isNaN(parseFloat(esferaODcerca))  ||
      isNaN(parseFloat(cilindroODcerca))  ||
      isNaN(parseFloat(ejeODcerca))  ||
      isNaN(parseFloat(agudezavisualODcerca))  ||
      isNaN(parseFloat(esferaOIcerca))  ||
      isNaN(parseFloat(cilindroOIcerca))  ||
      isNaN(parseFloat(ejeOIcerca))  ||
      isNaN(parseFloat(agudezavisualOIcerca))
    ) {
      setErrorMedidasNumericas(true)
      console.log('datos no numéricos');
    } else {
      console.log('todos los campos están correctamente válidos');
      setOpenModalPrescripcion(true)
    }
 

  } 

  return (
    <div className=" w-3/5 flex flex-row my-5 p-5 h-auto">
      <div className="w-2/5">
        {error &&
          (clienteBusqueda === "" ? (
            <ErrorMessage mensaje={"El campo está vacío"} />
          ) : (
            <ErrorMessage mensaje={"No se encontraron resultados"} />
          ))}
        <div className=" flex flex-row">
          <div className="w-full pr-5">
            {/* BARRA DE BÚSQUEDA DE CLIENTE */}
            <BarraBusquedaCliente
              clienteBusqueda={clienteBusqueda}
              setClienteBusqueda={setClienteBusqueda}
              handleButtonBuscarCliente={handleButtonBuscarCliente}
              setError={setError}
              setClientes={setClientes}
            />

            {/* DROPDOWN DE CLIENTES ENCONTRADOS */}

            {clientes.lenght !== 0 && clienteBusqueda !== "" ? (
              <ul>
                {clientes.map((cli) => {
                  return (
                    <li
                      key={cli["id_cliente"]}
                      onClick={(e) => {
                        handleSeleccionarCliente(e, cli);
                      }}
                      className="cursor-pointer hover:font-semibold hover:bg-slate-50 p-2 "
                    >
                      <p>{cli["nombres_y_apellidos"]}</p>
                      <p className="text-sm text-slate-400">{cli["edad"]}</p>
                      <p className="text-sm text-slate-400">
                        {cli["telefono"]}
                      </p>
                      <p className="text-sm text-slate-400">
                        {cli["direccion"]}
                      </p>
                    </li>
                  );
                })}
              </ul>
            ) : (
              ""
            )}
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
        </div>
      </div>

      {/* MOSTRAR CLIENTE SELECCIONADO */}
      {Object.keys(cliente).length !== 0 ? (
        <form
          onSubmit={(e) => {
            handleSubmitEmitirPrescripcion(e)
          }}
          className="px-5  flex flex-col w-3/5 h-full pb-5 border-l-2"
        >
          <DatosCliente
            cliente={cliente}
            notaAdicional={notaAdicional}
            setNotaAdicional={setNotaAdicional}
          />

          {noHayMedidas && (
            <p className="mt-5 text-center text-xl text-gray-500">
              - Nuevo cliente - 
            </p>
          )}

          <TablaMedidas
            esferaODlejos={esferaODlejos}
            setEsferaODLejos={setEsferaODLejos}
            cilindroODlejos={cilindroODlejos}
            setCilindroODlejos={setCilindroODlejos}
            ejeODlejos={ejeODlejos}
            setEjeODlejos={setEjeODlejos}
            agudezavisualODlejos={agudezavisualODlejos}
            setAgudezavisualODlejos={setAgudezavisualODlejos}
            esferaOIlejos={esferaOIlejos}
            setEsferaOIlejos={setEsferaOIlejos}
            cilindroOIlejos={cilindroOIlejos}
            setCilindroOIlejos={setCilindroOIlejos}
            ejeOIlejos={ejeOIlejos}
            setEjeOIlejos={setEjeOIlejos}
            agudezavisualOIlejos={agudezavisualOIlejos}
            setAgudezavisualOIlejos={setAgudezavisualOIlejos}
            esferaODcerca={esferaODcerca}
            setEsferaODcerca={setEsferaODcerca}
            cilindroODcerca={cilindroODcerca}
            setCilindroODcerca={setCilindroODcerca}
            ejeODcerca={ejeODcerca}
            setEjeODcerca={setEjeODcerca}
            agudezavisualODcerca={agudezavisualODcerca}
            setAgudezavisualODcerca={setAgudezavisualODcerca}
            esferaOIcerca={esferaOIcerca}
            setEsferaOIcerca={setEsferaOIcerca}
            cilindroOIcerca={cilindroOIcerca}
            setCilindroOIcerca={setCilindroOIcerca}
            ejeOIcerca={ejeOIcerca}
            setEjeOIcerca={setEjeOIcerca}
            agudezavisualOIcerca={agudezavisualOIcerca}
            setAgudezavisualOIcerca={setAgudezavisualOIcerca}
          />
          {errorNotaAdicionalVacía && <ErrorMessage mensaje={"El detalle de las lunas es un campo obligatorio"} />}
          {errorMedidasVacías && <ErrorMessage mensaje={"Todas las medidas son campos obligatorios"} />}
          {errorMedidasNumericas && <ErrorMessage mensaje={"Todas las medidas deben ser datos numéricos"} />}
          <button
            type="submit"
            className="rounded-md w-full py-3 mt-10 bg-slate-700 hover:bg-slate-800 text-white font-semibold uppercase "
          >
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
        <ModalAgregarCliente
          openModal={openModal}
          setOpenModal={setOpenModal}
          txtnombresYApellidos={txtnombresYApellidos}
          setTxtNombresYApellidos={setTxtNombresYApellidos}
          txtEdad={txtEdad}
          setTxtEdad={setTxtEdad}
          txtTelefono={txtTelefono}
          setTxtTelefono={setTxtTelefono}
          direccion={direccion}
          setDireccion={setDireccion}
          setError={setError}
          setClienteBusqueda={setClienteBusqueda}
        />
      )}
      {openModalPrescripcion && (
        <ModalPrescripcion
          setOpenModalPrescripcion={setOpenModalPrescripcion}

          cliente={cliente}
   
          esferaODlejos={esferaODlejos} 
          cilindroODlejos={cilindroODlejos} 
          ejeODlejos={ejeODlejos} 
          agudezavisualODlejos={agudezavisualODlejos} 
          esferaOIlejos={esferaOIlejos} 
          cilindroOIlejos={cilindroOIlejos} 
          ejeOIlejos={ejeOIlejos} 
          agudezavisualOIlejos={agudezavisualOIlejos} 
          esferaODcerca={esferaODcerca} 
          cilindroODcerca={cilindroODcerca} 
          ejeODcerca={ejeODcerca} 
          agudezavisualODcerca={agudezavisualODcerca} 
          esferaOIcerca={esferaOIcerca} 
          cilindroOIcerca={cilindroOIcerca} 
          ejeOIcerca={ejeOIcerca} 
          agudezavisualOIcerca={agudezavisualOIcerca}

          fechaFormateada={fechaFormateada}
          notaAdicional={notaAdicional}
  
          noHayMedidas={noHayMedidas}
          idMedidas={idMedidas}
          setIdMedidas={setIdMedidas}

          setEmisionPrescripcionFinalizada={setEmisionPrescripcionFinalizada}
        />
      )}
      {emisionPrescripcionFinalizada && <Navigate to="/catalogo" replace={true} />}
    </div>
  );
};
