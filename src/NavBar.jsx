import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <header className="w-full ">
      <div className="bg-slate-500 text-white text-center pt-20 pb-10">
        <h1 className="text-5xl font-semibold ">Óptica Arte Visual</h1>
        <p className="mt-5">La mejor calidad en monturas con modelos exclusivos y resinas de alta calidad</p>
      </div>
      <nav className="bg-slate-700">
        <ul id="nav-ul" className="flex flex-row justify-center text-xl">
          <NavLink className="w-1/3 text-center" to="/">
            <li className="hover:bg-slate-800 text-white py-2 hover:font-semibold">
              Home
            </li>
          </NavLink>
          <NavLink className="w-1/3 text-center" to="/pedidos">
            <li className="hover:bg-slate-800 text-white py-2 hover:font-semibold">
              Pedidos
            </li>
          </NavLink>
          <NavLink className="w-1/3 text-center" to="/prescripcion">
            <li className="hover:bg-slate-800 text-white py-2 hover:font-semibold">
              Emitir Prescripción
            </li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};
