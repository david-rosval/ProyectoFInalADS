import React, { useEffect, useState } from "react";
import { obtenerEspecifico, obtenerGet, procesarBoleta, registrarPost } from "../lib/conexionApi";
import { Navigate } from "react-router";

const ModalBoleta = ({ 
  fecha, 
  setModalBoleta, 
  precioTotal, 
  carrito, 
  prescripcion, 
  adelanto, 
  precioLunas, 
  setPrescripcion,
  setPrecioTotal,
  setCarrito 
}) => {

    const [clienteBoleta, setClienteBoleta] = useState({})
    const [errorClienteBoleta, setErrorClienteBoleta] = useState(false)
    const [boleta, setBoleta] = useState({})
    const [errorBoleta, setErrorBoleta] = useState(false)

    const [boletaEmitida, setBoletaEmitida] = useState(false)

    useEffect(() => {
        obtenerEspecifico("clientes/prescripcion", { "id_prescripcion": prescripcion[0]["id_prescripcion"] }, setClienteBoleta, setErrorClienteBoleta)
    }, [])

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white p-10 shadow-md rounded-lg w-[50rem]">
        <div className="  flex flex-col w-full h-full ">
          <div className="flex flex-col w-full h-full p-5 px-10 mb-5 border-2 pt-5 rounded-lg">
            <p className="text-4xl font-bold mb-2">Arte Visual</p>
            <div className="flex">
              <div className="w-2/3">
                <p>Av. Los Héroes 632 S. J. M</p>
                <div className="flex gap-1 mb-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-brand-whatsapp"
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
                    strokeWidth="1"
                    stroke="#000000"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                    <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
                  </svg>
                  <p>902 501 054/968 600 415</p>
                </div>
                <p>Señor(a): {clienteBoleta["nombres_y_apellidos"]}</p>
                <p>Dirección: {clienteBoleta["direccion"]}</p>
                <p>Teléfono: {clienteBoleta["telefono"]}</p>
              </div>
              <div className="w-1/3 text-right">
                <p className="uppercase">NOTA DE PEDIDO</p>
                <p>00000{prescripcion[0]["id_prescripcion"]}</p>
                <p>Fecha: {fecha}</p>
              </div>
            </div>
            <p className="mt-8">Tabla de productos</p>
            <div className="flex justify-center items-center w-full my-5">
              <table className="rounded-lg bg-white text-center border-2 table-fixed w-full border-separate lg:border-collapse">
                <thead className="border-2">
                  <tr>
                    <th className="border w-[7rem] font-semibold">Cantidad</th>
                    <th className="border font-semibold">Descripción</th>
                    <th className="border w-[8rem] font-semibold">Precio Unit.</th>
                    <th className="border w-[8rem] font-semibold">Importe</th>    
                  </tr>
                </thead>
                <tbody>
                    {carrito.map(item => {
                        return (
                            <tr key={item["monturaInventario"]["codigo"]}>
                                <td className="border">{item["cantidad"]}</td>
                                <td className="border">{item["montura"]["nombre_montura"]}</td>
                                <td className="border">S/.{item["monturaInventario"]["precio_unit"]}</td>
                                <td className="border">S/.{item["monturaInventario"]["precio_unit"]*item["cantidad"]}</td>
                            </tr>
                        )
                    })}
                    <tr>
                      <td className="border">{1}</td>
                      <td className="border">detalle de lunas: {prescripcion[0]["detalle_lunas"]}</td>
                      <td className="border">S/.{parseFloat(precioLunas)}</td>
                      <td className="border">S/.{1*parseFloat(precioLunas)}</td>
                    </tr>
                </tbody>
              </table>
            </div>
            <div className="flex justify-between">
              <p>Adelanto: S/.{adelanto}</p>
              <p>Saldo: S/.{precioTotal-adelanto}</p>
              <p>Total: S/.{precioTotal}</p>
            </div>
          </div>
          <h3 className="text-center text-2xl text-bold mb-8">
            ¿Emitir boleta?
          </h3>
          <div className="flex gap-5">
            <button
              className="cursor-pointer py-2 w-1/2 bg-slate-300 hover:bg-slate-400 text-gray-700 font-semibold text-center rounded-md mt-2"
              onClick={(e) => {
                setModalBoleta(false)
              }}
            >
              No
            </button>

            <button
              type="submit"
              className="w-1/2 mt-2 cursor-pointer py-2  bg-slate-700 hover:bg-slate-800 text-white font-semibold text-center rounded-md "
              onClick={async (e) => {
                const finalizarEmisionBoleta = async () => {
                  await procesarBoleta(precioTotal, carrito, adelanto, prescripcion[0]["id_prescripcion"], prescripcion[0]["detalle_lunas"], precioLunas );
                  // reiniciar precioTotal carrito, prescripcion, 
                  await setPrecioTotal(0)
                  await setCarrito([])
                  await setPrescripcion([])
                  
                }
                finalizarEmisionBoleta()
                setBoletaEmitida(true)
              }}
            >
              Sí
            </button>
          </div>
        </div>
      </div>
      {boletaEmitida && (
        <Navigate to="/" replace={true}/>
      )}
    </div>
  );
};

export default ModalBoleta;
