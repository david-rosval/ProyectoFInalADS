import React from 'react'
// cantidad 1 prescripcion[0]["detalle_lunas"] input precio precio*cantidad
export const CarritoItemLunas = ({ prescripcion, precioLunas, setPrecioLunas, setPrecioTotal, precioTotal }) => {
  return (
    <div className="w-full p-10 flex justify-between items-center border-b border-black">
      <div className="">
        <img width={200} src="../src/assets/lunas.jpg" alt="lunas" border="0" />
      </div>
      <div className="block w-[350px]">
        <p className="truncate text-xl ">
          Detalle de lunas: <span className='font-semibold uppercase'>{ prescripcion.length !== 0 && prescripcion[0]["detalle_lunas"] }</span>
        </p>
      </div>
      
      <div className="flex">
        <button
          className="bg-gray-200 h-8 w-8 text-lg hover:bg-gray-300 disabled:cursor-default disabled:text-gray-400 disabled:hover:bg-gray-200"
          onClick={() => {
            
          }}
          disabled={true}
        >
          -
        </button>
        <p className="mx-2 h-8 w-10 text-center">{1}</p>
        <button
          className="bg-gray-200 h-8 w-8 text-lg hover:bg-gray-300 disabled:cursor-default disabled:text-gray-400 disabled:hover:bg-gray-200"
          onClick={() => {
            
          }}
          disabled={true}
        >
          +
        </button>
      </div>
      <div className="w-[80px] flex items-end">
          <p className='text-sm'>S/.</p>
          <input className='text-2xl border w-20 text-center ml-2' type="text" placeholder='00.00' value={precioLunas} onChange={e => {
            setPrecioLunas(e.target.value)
            //setPrecioTotal(pre)
            }} />
       

      </div>
      
    </div>
  )
}
