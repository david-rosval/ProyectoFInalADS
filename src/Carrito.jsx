import React from 'react'
import { CarritoItem } from './components/CarritoItem'

export const Carrito = ({setCarrito, carrito}) => {
  return (
    <div className='w-3/5'>
        <div>
        <h1 className="my-10 text-5xl font-semibold text-center">Carrito de compras</h1>
        </div>
        <div className='border-t border-black w-full'>
            {(carrito.length > 0) && carrito.map((item) => {
                return <CarritoItem key={item["monturaInventario"]["codigo"]} carritoItem={item} setCarrito={setCarrito} />
            })}
        </div>
    </div>
  )
}
