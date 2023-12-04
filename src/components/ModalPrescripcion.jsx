import React from "react";

const ModalPrescripcion = ({setOpenModalPrescripcion}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white p-10 w-1/3 shadow-md rounded-lg">
        <form>
          <h3 className="text-center text-2xl text-bold mb-8">
            ¿Estás seguro que deseas continuar?
          </h3>
          <div className="flex gap-5">
            <button
              className="cursor-pointer py-2 w-1/2 bg-slate-300 hover:bg-slate-400 text-gray-700 font-semibold text-center rounded-md mt-2"
              onClick={(e) => {
                e.preventDefault();
                console.log("No");
                setOpenModalPrescripcion(false)
              }}
            >
              No
            </button>
            <button
              type="submit"
              className="cursor-pointer py-2 w-1/2 bg-slate-700 hover:bg-slate-800 text-white font-semibold text-center rounded-md mt-2"
              onClick={(e) => {
                e.preventDefault();
                console.log("Sí");
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
