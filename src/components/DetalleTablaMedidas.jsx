import React from "react";

const DetalleTablaMedidas = ({ 
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
 }) => {
  return ( 
      <div className=" flex flex-col gap-5 w-[462.3px] items-center justify-center px-5 mt-5">
        <div className=" flex flex-col items-center justify-center">
          <h3 className="font-semibold text-gray-500 mb-2 uppercase ">Lejos</h3>
          <div className="w-full flex items-end mb-8">
            <div className="">
              <p className="h-[34.81px] pr-2 font-semibold text-gray-500 text-center">
                OD
              </p>
              <p className="h-[34.81px] pr-2 font-semibold text-gray-500 text-center">
                OI
              </p>
            </div>
            <table className="rounded-lg text-center border-2 table-fixed w-full border-separate lg:border-collapse h-[6.5rem]">
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
                  <td className="border">{esferaODlejos}</td>
                  <td className="border">{cilindroODlejos}</td>
                  <td className="border">{ejeODlejos}</td>
                  <td className="border">
                    {agudezavisualODlejos}
                  </td>
                </tr>
                <tr>
                  <td className="border">{esferaOIlejos}</td>
                  <td className="border">{cilindroOIlejos}</td>
                  <td className="border">{ejeOIlejos}</td>
                  <td className="border">
                    {agudezavisualOIlejos}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className=" flex flex-col items-center justify-center">
          <h3 className="font-semibold text-gray-500 mb-2 uppercase ">Cerca</h3>
          <div className="w-full flex items-end mb-8">
            <div className="">
              <p className="h-[34.81px] pr-2 font-semibold text-gray-500 text-center">
                OD
              </p>
              <p className="h-[34.81px] pr-2 font-semibold text-gray-500 text-center">
                OI
              </p>
            </div>
            <table className="w-full rounded-lg bg-white text-center border-2 table-fixed  border-separate lg:border-collapse h-[6.5rem]">
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
                  <td className="border">{esferaODcerca}</td>
                  <td className="border">{cilindroODcerca}</td>
                  <td className="border">{ejeODcerca}</td>
                  <td className="border">
                    {agudezavisualODcerca}
                  </td>
                </tr>
                <tr>
                  <td className="border">{esferaOIcerca}</td>
                  <td className="border">{cilindroOIcerca}</td>
                  <td className="border">{ejeOIcerca}</td>
                  <td className="border">
                    {agudezavisualOIcerca}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    
  );
};

export default DetalleTablaMedidas;
