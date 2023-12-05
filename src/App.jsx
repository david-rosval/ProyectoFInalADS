import { Route, Routes } from "react-router-dom";
import { NavBar } from "./NavBar";
import { Prescripcion } from "./Prescripcion";
import { Catalogo } from "./Catalogo";
import { useEffect, useState } from "react";
import { Carrito } from "./Carrito";
import { obtenerGet } from "./lib/conexionApi";

const Home = () => {
  return <div>Home</div>;
};

const Pedidos = () => {
  return <div>Pedidos</div>;
};

export default function App() {

  const [carrito, setCarrito] = useState([])
  const [monturas, setMonturas] = useState([]);
  const [errorConsultaMonturas, setsetErrorConsultaMonturas] = useState(false);
  useEffect(() => {
    obtenerGet("monturas", setMonturas, setsetErrorConsultaMonturas);
  }, []);

  return (
    <div className="flex flex-col items-center h-screen">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pedidos" element={<Pedidos />} />
        <Route path="/prescripcion" element={<Prescripcion />} />
        <Route path="/catalogo" element={<Catalogo setCarrito={setCarrito} carrito={carrito} monturas={monturas} setMonturas={setMonturas}/>} />
        <Route path="/carrito" element={<Carrito setCarrito={setCarrito} carrito={carrito}/>} monturas={monturas} />
      </Routes>
    </div>
  );
}
