import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <header className="w-4/5">
      <h1 className="text-5xl font-extrabold mt-20 mb-20 text-center">
        Óptica Arte Visual
      </h1>
      <nav>
        <ul className="flex flex-row justify-center text-xl">
          
          <Link className="w-1/3 text-center" to="/">
            <li className="hover:bg-slate-700 hover:text-white py-2 hover:font-semibold">
              Home
            </li>
          </Link>
          <Link className="w-1/3 text-center" to="/pedidos">
            <li className="hover:bg-slate-700 hover:text-white py-2 hover:font-semibold">
              Pedidos
            </li>
          </Link>
          <Link className="w-1/3 text-center" to="/prescripcion">
            <li className="hover:bg-slate-700 hover:text-white py-2 hover:font-semibold">
              Emitir Prescripción
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};
