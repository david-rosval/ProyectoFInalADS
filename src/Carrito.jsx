import React, { useEffect, useState } from 'react'
import { CarritoItem } from './components/CarritoItem'
import { actualizarPut, cargarApi, obtenerEspecifico, registrarPost, obtenerGet } from "./lib/conexionApi";

export const Carrito = ({setCarrito, carrito, precioTotal, setPrecioTotal}) => {

  useEffect(() => {
    setPrecioTotal(carrito.reduce((total, carritoItem) => total + (carritoItem["cantidad"]*carritoItem["monturaInventario"]["precio_unit"]), 0))
  }, [])

  return (
    <div className='w-3/5'>
        <div className='flex justify-between'>
          <h1 className="my-10 text-4xl font-semibold text-center">Carrito de compras</h1>
          
          <button className='bg-slate-700 text-white my-8 rounded-lg hover:bg-slate-800 uppercase text-xl font-semibold px-5' onClick={()=>{

          }}>
              Continuar S/. {precioTotal}
          </button>
        </div>
        <div className='border-t border-black w-full'>
            {(carrito.length > 0) && carrito.map((item) => {
                return <CarritoItem key={item["monturaInventario"]["codigo"]} carritoItem={item} setCarrito={setCarrito} precioTotal={precioTotal} setPrecioTotal={setPrecioTotal} carrito={carrito} />
            })}
        </div>
    </div>
  )
}
