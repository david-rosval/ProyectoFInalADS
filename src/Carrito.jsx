import React, { useEffect, useState } from 'react'
import { CarritoItem } from './components/CarritoItem'
import { actualizarPut, cargarApi, obtenerEspecifico, registrarPost, obtenerGet } from "./lib/conexionApi";
import ModalBoleta from './components/ModalBoleta';

export const Carrito = ({setCarrito, carrito, precioTotal, setPrecioTotal, fecha, prescripcion}) => {

  const [modalBoleta, setModalBoleta] = useState(false)
  const [adelanto, setAdelanto] = useState('')

  useEffect(() => {
    setPrecioTotal(carrito.reduce((total, carritoItem) => total + (carritoItem["cantidad"]*carritoItem["monturaInventario"]["precio_unit"]), 0))
  }, [])

  return (
    <div className='w-3/5'>
        <div className='flex justify-between'>
          <h1 className="my-10 text-4xl font-semibold text-center">Carrito de compras</h1>
          
          <button className='bg-slate-700 text-white my-8 rounded-lg hover:bg-slate-800 uppercase text-xl font-semibold px-5' onClick={()=>{
            setModalBoleta(true)
          }}>
              Continuar S/. {precioTotal}
          </button>
        </div>
        <div className='border-t border-black w-full'>
            {(carrito.length > 0) && carrito.map((item) => {
                return <CarritoItem key={item["monturaInventario"]["codigo"]} carritoItem={item} setCarrito={setCarrito} precioTotal={precioTotal} setPrecioTotal={setPrecioTotal} carrito={carrito} />
            })}
        </div>
        <div className='flex justify-end mt-10 items-center'>
          <label htmlFor="input-buscar-cliente" className='mr-2 font-semibold'>Adelanto: S/.</label>
            <input
              className="border w-[6rem] py-2 px-3 rounded-md text-right"
              id="input-buscar-cliente "
              type="text"
              placeholder="00.00"
              onChange={(e) => {
                setAdelanto(e.target.value)
              }}
              value={adelanto}
            />
          </div>
        {(modalBoleta && precioTotal !== 0) && (
          <ModalBoleta fecha={fecha} setModalBoleta={setModalBoleta} precioTotal={precioTotal} carrito={carrito} prescripcion={prescripcion} adelanto={adelanto} />
        )}

    </div>
  )
}
