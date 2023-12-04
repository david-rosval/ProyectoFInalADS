import React from 'react'

const TablaMedidas = ({ 
    esferaODlejos, setEsferaODLejos,
    cilindroODlejos, setCilindroODlejos,
    ejeODlejos, setEjeODlejos,
    agudezavisualODlejos, setAgudezavisualODlejos,
    esferaOIlejos, setEsferaOIlejos,
    cilindroOIlejos, setCilindroOIlejos,
    ejeOIlejos, setEjeOIlejos,
    agudezavisualOIlejos, setAgudezavisualOIlejos,
    esferaODcerca, setEsferaODcerca,
    cilindroODcerca, setCilindroODcerca,
    ejeODcerca, setEjeODcerca,
    agudezavisualODcerca, setAgudezavisualODcerca,
    esferaOIcerca, setEsferaOIcerca,
    cilindroOIcerca, setCilindroOIcerca,
    ejeOIcerca, setEjeOIcerca,
    agudezavisualOIcerca, setAgudezavisualOIcerca 
}) => {
  return (
    <div className=" flex flex-col items-center justify-center mt-5 px-5">
            <h3 className="font-semibold text-gray-500 mb-2 uppercase ">
              Lejos
            </h3>
            <div className="w-full flex items-end mb-8">
              <div className="">
                <p className="h-[34.81px] pr-2 font-semibold text-gray-500 text-center">
                  OD
                </p>
                <p className="h-[34.81px] pr-2 font-semibold text-gray-500 text-center">
                  OI
                </p>
              </div>
              <table className="rounded-lg bg-white text-center border-2 table-fixed  border-separate lg:border-collapse h-[6.5rem]">
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
                    <td className="border">
                      <input
                        type="text"
                        className="text-center w-full h-full"
                        onChange={(e) =>
                          setEsferaODLejos(e.target.value)
                        }
                        value={esferaODlejos}
                      />
                    </td>
                    <td className="border">
                      <input
                        type="text"
                        className="text-center w-full h-full"
                        onChange={(e) =>
                          setCilindroODlejos(e.target.value)
                        }
                        value={cilindroODlejos}
                      />
                    </td>
                    <td className="border">
                      <input
                        type="text"
                        className="text-center w-full h-full"
                        onChange={(e) =>
                          setEjeODlejos(e.target.value)
                        }
                        value={ejeODlejos}
                      />
                    </td>
                    <td className="border">
                      <input
                        type="text"
                        className="text-center w-full h-full"
                        onChange={(e) =>                          
                          setAgudezavisualODlejos(e.target.value)
                        }
                        value={agudezavisualODlejos}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <input
                        type="text"
                        className="text-center w-full h-full"
                        onChange={(e) =>
                          setEsferaOIlejos(e.target.value)
                        }
                        value={esferaOIlejos}
                      />
                    </td>
                    <td className="border">
                      <input
                        type="text"
                        className="text-center w-full h-full"
                        onChange={(e) =>
                          setCilindroOIlejos(e.target.value)
                        }
                        value={cilindroOIlejos}
                      />
                    </td>
                    <td className="border">
                      <input
                        type="text"
                        className="text-center w-full h-full"
                        onChange={(e) =>
                          setEjeOIlejos(e.target.value)
                        }
                        value={ejeOIlejos}
                      />
                    </td>
                    <td className="border">
                      <input
                        type="text"
                        className="text-center w-full h-full"
                        onChange={(e) =>
                          setAgudezavisualOIlejos(e.target.value)
                        }
                        value={agudezavisualOIlejos}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className=" flex flex-col items-center justify-center mt-5">
              <h3 className="font-semibold text-gray-500 mb-2 uppercase ">
                Cerca
              </h3>
              <div className="w-full flex items-end mb-8">
                <div className="">
                  <p className="h-[34.81px] pr-2 font-semibold text-gray-500 text-center">
                    OD
                  </p>
                  <p className="h-[34.81px] pr-2 font-semibold text-gray-500 text-center">
                    OI
                  </p>
                </div>
                <table className="rounded-lg bg-white text-center border-2 table-fixed  border-separate lg:border-collapse h-[6.5rem]">
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
                      <td className="border">
                        <input
                          type="text"
                          className="text-center w-full h-full"
                          onChange={(e) =>
                            setEsferaODcerca(e.target.value)
                          }
                          value={esferaODcerca}
                        />
                      </td>
                      <td className="border">
                        <input
                          type="text"
                          className="text-center w-full h-full"
                          onChange={(e) =>
                            setCilindroODcerca(e.target.value)
                          }
                          value={cilindroODcerca}
                        />
                      </td>
                      <td className="border">
                        <input
                          type="text"
                          className="text-center w-full h-full"
                          onChange={(e) =>
                            setEjeODcerca(e.target.value)
                          }
                          value={ejeODcerca}
                        />
                      </td>
                      <td className="border">
                        <input
                          type="text"
                          className="text-center w-full h-full"
                          onChange={(e) =>
                            setAgudezavisualODcerca(e.target.value)
                          }
                          value={agudezavisualODcerca}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="border">
                        <input
                          type="text"
                          className="text-center w-full h-full"
                          onChange={(e) =>
                            setEsferaOIcerca(e.target.value)
                          }
                          value={esferaOIcerca}
                        />
                      </td>
                      <td className="border">
                        <input
                          type="text"
                          className="text-center w-full h-full"
                          onChange={(e) =>
                            setCilindroOIcerca(e.target.value)
                          }
                          value={cilindroOIcerca}
                        />
                      </td>
                      <td className="border">
                        <input
                          type="text"
                          className="text-center w-full h-full"
                          onChange={(e) =>
                            setEjeOIcerca(e.target.value)
                          }
                          value={ejeOIcerca}
                        />
                      </td>
                      <td className="border">
                        <input
                          type="text"
                          className="text-center w-full h-full"
                          onChange={(e) =>
                            setAgudezavisualOIcerca(e.target.value)
                          }
                          value={agudezavisualOIcerca}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
  )
}

export default TablaMedidas