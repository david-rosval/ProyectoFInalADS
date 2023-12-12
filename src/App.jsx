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

const fecha = new Date();
let dia = fecha.getDate();
let mes = fecha.getMonth() + 1; // Los meses en JavaScript empiezan desde 0
let año = fecha.getFullYear();

// Asegurándose de que el día y el mes sean de dos dígitos
if (dia < 10) dia = '0' + dia;
if (mes < 10) mes = '0' + mes;

const fechaFormateada = dia + '/' + mes + '/' + año;

export default function App() {
  const [carrito, setCarrito] = useState([]);
  const [monturas, setMonturas] = useState([]);
  const [errorConsultaMonturas, setsetErrorConsultaMonturas] = useState(false);
  const [precioTotal, setPrecioTotal] = useState(0);
  const [prescripcion, setPrescripcion] = useState([]);
  const [fecha, setFecha] = useState('')

  useEffect(() => {
    obtenerGet("monturas", setMonturas, setsetErrorConsultaMonturas);
  }, []);

  useEffect(() => {
    setFecha(fechaFormateada)
  }, []);

  return (
    <div className="flex flex-col items-center h-screen">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pedidos" element={<Pedidos />} />
        <Route path="/prescripcion" element={<Prescripcion />} />
        <Route
          path="/catalogo"
          element={
            <Catalogo
              setCarrito={setCarrito}
              carrito={carrito}
              monturas={monturas}
              setMonturas={setMonturas}
              setPrecioTotal={setPrecioTotal}
              setPrescripcion={setPrescripcion}
              prescripcion={prescripcion}
            />
          }
        />
        <Route
          path="/carrito"
          element={
            <Carrito
              setCarrito={setCarrito}
              carrito={carrito}
              precioTotal={precioTotal}
              setPrecioTotal={setPrecioTotal}
              fecha={fecha}
              prescripcion={prescripcion}
              setPrescripcion={setPrescripcion}
            />
          }
        />
      </Routes>
    </div>
  );
}
