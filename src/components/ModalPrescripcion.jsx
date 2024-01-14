import React, { useState } from "react";
import DetalleTablaMedidas from "./DetalleTablaMedidas";
import DetalleClienteModalPrescripcion from "./DetalleClienteModalPrescripcion";
import { actualizarPut, obtenerGet, obtenerUltimoRegistro, prescripcionPdff, registrarPost, registrarPostRetornarUltimo } from "../lib/conexionApi";

const ModalPrescripcion = ({
  setOpenModalPrescripcion, 
  cliente, 
  //medidas 
  esferaODlejos, 
  cilindroODlejos, 
  ejeODlejos, 
  agudezavisualODlejos, 
  esferaOIlejos, 
  cilindroOIlejos, 
  ejeOIlejos, 
  agudezavisualOIlejos, 
  esferaODcerca, 
  cilindroODcerca, 
  ejeODcerca, 
  agudezavisualODcerca, 
  esferaOIcerca, 
  cilindroOIcerca, 
  ejeOIcerca, 
  agudezavisualOIcerca,
  fechaFormateada, 
  notaAdicional,
  noHayMedidas,
  idMedidas,
  setIdMedidas,

  setEmisionPrescripcionFinalizada
}) => {

  const [errorObtenerTodasMedidas, setErrorObtenerTodasMedidas] = useState(false)
  const [medidasTodas, setMedidasTodas] = useState([])

  const handleBtnConfirmarEmitirPrescripcion = (e) => {
    e.preventDefault()

    console.log(noHayMedidas);

    let medidasListas = {
      "Esfera_OD_lejos": esferaODlejos,
      "Cilindro_OD_lejos": cilindroODlejos,
      "Eje_OD_lejos": ejeODlejos,
      "Agudeza_visual_OD_lejos": agudezavisualODlejos,
      "Esfera_OI_lejos": esferaOIlejos,
      "Cilindro_OI_lejos": cilindroOIlejos,
      "Eje_OI_lejos": ejeOIlejos,
      "Agudeza_visual_OI_lejos": agudezavisualOIlejos,
      "Esfera_OD_cerca": esferaODcerca,
      "Cilindro_OD_cerca": cilindroODcerca,
      "Eje_OD_cerca": ejeODcerca,
      "Agudeza_visual_OD_cerca": agudezavisualODcerca,
      "Esfera_OI_cerca": esferaOIcerca,
      "Cilindro_OI_cerca": cilindroOIcerca,
      "Eje_OI_cerca": ejeOIcerca,
      "Agudeza_visual_OI_cerca": agudezavisualOIcerca,
      "id_cliente": cliente["id_cliente"]
    }

    
    const registrarOActualizarPrescripcion = async () => {
      const url = import.meta.env.VITE_API_URL

      // si es cliente nuevo -> registrar medidas y prescripcion
      if (noHayMedidas) { 
        console.log("registro");
         await registrarPost('medidas', medidasListas)

        const medidasUltima = await obtenerUltimoRegistro('medidas')

        console.log(medidasUltima["id_medidas"]); 

        let prescripcionSeleccionada = await registrarPostRetornarUltimo('prescripcion/ultimoRegistro', {
          "id_medidas": medidasUltima["id_medidas"],
          "detalle_lunas": notaAdicional,
          "fecha": fechaFormateada,
        }) 
        
        console.log(prescripcionSeleccionada);// retorna un arreglo con la prescripcion registrada

        await prescripcionPdff(prescripcionSeleccionada[0]["id_prescripcion"])

        setEmisionPrescripcionFinalizada(true)


      } else { 
        // si es cliente   existente -> actualizar medidas y registrar prescripcion
        medidasListas = {
          "id_medidas": idMedidas,
          "Esfera_OD_lejos": esferaODlejos,
          "Cilindro_OD_lejos": cilindroODlejos,
          "Eje_OD_lejos": ejeODlejos,
          "Agudeza_visual_OD_lejos": agudezavisualODlejos,
          "Esfera_OI_lejos": esferaOIlejos,
          "Cilindro_OI_lejos": cilindroOIlejos,
          "Eje_OI_lejos": ejeOIlejos,
          "Agudeza_visual_OI_lejos": agudezavisualOIlejos,
          "Esfera_OD_cerca": esferaODcerca,
          "Cilindro_OD_cerca": cilindroODcerca,
          "Eje_OD_cerca": ejeODcerca,
          "Agudeza_visual_OD_cerca": agudezavisualODcerca,
          "Esfera_OI_cerca": esferaOIcerca,
          "Cilindro_OI_cerca": cilindroOIcerca,
          "Eje_OI_cerca": ejeOIcerca,
          "Agudeza_visual_OI_cerca": agudezavisualOIcerca,
          "id_cliente": cliente["id_cliente"]
        }

        console.log("actualizo");

        await actualizarPut('medidas', medidasListas, idMedidas)

        let prescripcionSeleccionada = await registrarPostRetornarUltimo('prescripcion/ultimoRegistro', {
          "id_medidas": idMedidas,
          "detalle_lunas": notaAdicional,
          "fecha": fechaFormateada,
        }) 

        await prescripcionPdff(prescripcionSeleccionada[0]["id_prescripcion"])

        setEmisionPrescripcionFinalizada(true)

      }
    }

    registrarOActualizarPrescripcion()

  }


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

            
                 <DetalleTablaMedidas 
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
                 /> 
              </div>
            </div>
          </div>
          <h3 className="text-center text-2xl text-bold mb-8">
            ¿Estás seguro?
          </h3>
          <div className="flex gap-5">
            <button
              className="cursor-pointer py-2 w-1/2 bg-slate-300 hover:bg-slate-400 text-gray-700 font-semibold text-center rounded-md mt-2"
              onClick={(e) => {
                e.preventDefault();
                console.log("No");
                setOpenModalPrescripcion(false);
                
              }}
            >
              No
            </button>
            
              <button
                type="submit"
                className="w-1/2 mt-2 cursor-pointer py-2  bg-slate-700 hover:bg-slate-800 text-white font-semibold text-center rounded-md "
                onClick={(e) => {
                  handleBtnConfirmarEmitirPrescripcion(e);
                          
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
