import React, { useState } from 'react'
import { formatearStringUrlImagen } from '../lib/funciones'

export const CarritoItem = ({carritoItem, setCarrito}) => {

    const imagen = carritoItem["montura"]["imagen"]

    const { src, alt, border } = formatearStringUrlImagen(imagen);

    const [cantidad, setCantidad] = useState(carritoItem["cantidad"])

  return (
    <div className='w-full p-10 flex justify-between items-center border-b border-black'>
        <div className=''>
        <img width={200} src={src} alt={alt} border={border}/>
        </div>
        <div className='block w-[350px]'>
            <p className='truncate uppercase text-xl font-semibold'>{carritoItem["montura"]["nombre_montura"]}</p>
            <p className='mb-3 text-gray-500'>{carritoItem["montura"]["marca"]}</p>
            <p>Material: <span className='uppercase'>{carritoItem["montura"]["material"]}</span></p>
            <p>Color:  <span className='uppercase'>{carritoItem["montura"]["color"]}</span></p>
        </div>
        <div className='w-[80px] text-center'>S/.{carritoItem["monturaInventario"]["precio_unit"]} c/u</div>
        <div className='flex'>
            <button className='bg-gray-200 h-8 w-8 text-lg hover:bg-gray-300' onClick={()=>{
                // falta implementar
                carritoItem["cantidad"] = cantidad - 1
                setCantidad(cantidad - 1)
                console.log(carritoItem);
            }}>-</button>
            <p className='mx-2 h-8 w-10 text-center'>{cantidad}</p>
            <button className='bg-gray-200 h-8 w-8 text-lg hover:bg-gray-300' onClick={()=>{
                // falta implementar
                carritoItem["cantidad"] = cantidad + 1
                setCantidad(cantidad + 1)
                console.log(carritoItem);
            }}>+</button>
        </div>
        <div className='w-[80px] text-center text-sm font-semibold'>S/. <span className='text-2xl'>{cantidad*carritoItem["monturaInventario"]["precio_unit"]}</span></div>
    </div>
  )
}
