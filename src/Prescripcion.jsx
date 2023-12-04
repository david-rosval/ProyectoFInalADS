import { useEffect, useState } from "react";
import { obtenerEspecifico, registrarPost } from "./lib/conexionApi";
import Modal from "./components/Modal";
import ModalPrescripcion from "./components/ModalPrescripcion";
import TablaMedidas from "./components/TablaMedidas";
import DropdownClientesItem from "./components/DropdownClientesItem";
import BarraBusquedaCliente from "./components/BarraBusquedaCliente";
import DatosCliente from "./components/DatosCliente";

const fecha = new Date();
let dia = fecha.getDate();
let mes = fecha.getMonth() + 1; // Los meses en JavaScript empiezan desde 0
let año = fecha.getFullYear();

// Asegurándose de que el día y el mes sean de dos dígitos
if (dia < 10) dia = '0' + dia;
if (mes < 10) mes = '0' + mes;

const fechaFormateada = dia + '/' + mes + '/' + año;


export const Prescripcion = ({setPrescripcion}) => {
  // States para la búsqueda de clientes
  const [clienteBusqueda, setClienteBusqueda] = useState("");
  const [btnBuscarClick, setBtnBuscarClick] = useState(false);
  const [clientes, setClientes] = useState([]);
  const [cliente, setCliente] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [openModalPrescripcion, setOpenModalPrescripcion] = useState(false)

  // States para medidas
  const [medidas, setMedidas] = useState([]);
  const [medidasEncontradas, setMedidasEncontradas] = useState(false);
  const [asignacionNuevasMedidas, setAsignacionNuevasMedidas] = useState(false)

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
  const [prescripcionLista, setPrescripcionLista] = useState(false)

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
      console.log('medidas encontradas');
    } else return;
  }, [cliente, asignacionNuevasMedidas]);

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

  useEffect(() => {
    if (medidas.length !== 0) {
      const nuevaPrescripcion = {
        "id_medidas": medidas[0]["id_medidas"],
        "detalle_lunas": notaAdicional,
        "fecha": fechaFormateada,
      }
      if (prescripcionLista) {
        registrarPost('prescripciones', nuevaPrescripcion)
      } else {
        console.log('no se ha emitido prescripcion');
      }
    }
  }, [prescripcionLista])

  const handleButtonBuscarCliente = (e) => {
    
    e.preventDefault();
    if (clienteBusqueda !== "") {
      setBtnBuscarClick(true);
    } else setBtnBuscarClick(false);
    //console.log(clientes);
  };

  const handleSubmitEmitirPrescripcion = (e) => {
    e.preventDefault()
    const nuevoMonturas = {
      "Esfera_OD_lejos": parseFloat(esferaODlejos),
      "Cilindro_OD_lejos": parseFloat(cilindroODlejos),
      "Eje_OD_lejos": parseFloat(ejeODlejos),
      "Agudeza_visual_OD_lejos": parseFloat(agudezavisualODlejos),
      "Esfera_OI_lejos": parseFloat(esferaOIlejos),
      "Cilindro_OI_lejos": parseFloat(cilindroOIlejos),
      "Eje_OI_lejos": parseFloat(ejeOIlejos),
      "Agudeza_visual_OI_lejos": parseFloat(agudezavisualOIlejos),
      "Esfera_OD_cerca": parseFloat(esferaODcerca),
      "Cilindro_OD_cerca": parseFloat(cilindroODcerca),
      "Eje_OD_cerca": parseFloat(ejeODcerca),
      "Agudeza_visual_OD_cerca": parseFloat(agudezavisualODcerca),
      "Esfera_OI_cerca": parseFloat(esferaOIcerca),
      "Cilindro_OI_cerca": parseFloat(cilindroOIcerca),
      "Eje_OI_cerca": parseFloat(ejeOIcerca),
      "Agudeza_visual_OI_cerca": parseFloat(agudezavisualOIcerca),
      "id_cliente": cliente["id_cliente"],
    };
    if (!medidasEncontradas && Object.keys(cliente).length !== 0) {

      registrarPost('medidas', nuevoMonturas)
      console.log('medidas registradas');
      setAsignacionNuevasMedidas(true)
      console.log('medidas encontradas');
    } else {
      if (medidasEncontradas && Object.keys(cliente).length !== 0) {

      }


    }

    setOpenModalPrescripcion(true)
    
    console.log('submit');
  }

  return (
    <div className=" w-3/5 flex flex-row my-5 p-5 h-auto">
      <div className="w-2/5 pr-5">
        {/* BARRA DE BÚSQUEDA DE CLIENTE */}
        <BarraBusquedaCliente 
        clienteBusqueda = {clienteBusqueda}
        setClienteBusqueda = {setClienteBusqueda}
        setBtnBuscarClick = {setBtnBuscarClick}
        setAsignacionNuevasMedidas = {setAsignacionNuevasMedidas}
        handleButtonBuscarCliente = {handleButtonBuscarCliente}
        />

        {/* DROPDOWN DE CLIENTES ENCONTRADOS */}
        <ul>
          {clientes && clienteBusqueda !== "" && btnBuscarClick !== false
            ? clientes.map((cli) => {
                return (
                  <DropdownClientesItem 
                  cli={cli} 
                  setBtnBuscarClick={setBtnBuscarClick}
                  setCliente={setCliente}
                  setClienteBusqueda={setClienteBusqueda}
                  setNotaAdicional={setNotaAdicional}
                  />
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
          <DatosCliente 
            cliente={cliente}
            notaAdicional={notaAdicional}
            setNotaAdicional={setNotaAdicional}
          />

          {!medidasEncontradas && (
            <p className="mt-5 text-center text-xl text-gray-500">
              Llena las medidas del nuevo cliente
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
      {openModalPrescripcion && (
        <ModalPrescripcion 
        setOpenModalPrescripcion={setOpenModalPrescripcion} setPrescripcion={setPrescripcion}
        cliente={cliente}
        medidas={medidas}
        fechaFormateada={fechaFormateada}
        notaAdicional={notaAdicional}
        />
      )}
    </div>
  );
}
