import React from "react";

const DetalleTablaMedidas = ({ medidas }) => {
  return (
    (medidas && medidas.length) > 0 && (
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
                  <td className="border">{medidas[0]["Esfera_OD_lejos"]}</td>
                  <td className="border">{medidas[0]["Cilindro_OD_lejos"]}</td>
                  <td className="border">{medidas[0]["Eje_OD_lejos"]}</td>
                  <td className="border">
                    {medidas[0]["Agudeza_visual_OD_lejos"]}
                  </td>
                </tr>
                <tr>
                  <td className="border">{medidas[0]["Esfera_OI_lejos"]}</td>
                  <td className="border">{medidas[0]["Cilindro_OI_lejos"]}</td>
                  <td className="border">{medidas[0]["Eje_OI_lejos"]}</td>
                  <td className="border">
                    {medidas[0]["Agudeza_visual_OI_lejos"]}
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
                  <td className="border">{medidas[0]["Esfera_OD_cerca"]}</td>
                  <td className="border">{medidas[0]["Cilindro_OD_cerca"]}</td>
                  <td className="border">{medidas[0]["Eje_OD_cerca"]}</td>
                  <td className="border">
                    {medidas[0]["Agudeza_visual_OD_cerca"]}
                  </td>
                </tr>
                <tr>
                  <td className="border">{medidas[0]["Esfera_OI_cerca"]}</td>
                  <td className="border">{medidas[0]["Cilindro_OI_cerca"]}</td>
                  <td className="border">{medidas[0]["Eje_OI_cerca"]}</td>
                  <td className="border">
                    {medidas[0]["Agudeza_visual_OI_cerca"]}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  );
};

export default DetalleTablaMedidas;
