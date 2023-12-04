import { Route, Routes } from "react-router-dom";
import { NavBar } from "./NavBar";
import { Prescripcion } from "./Prescripcion";
import { useState } from "react";

const Home = () => {
  return <div>Home</div>;
};

const Pedidos = () => {
  return <div>Pedidos</div>;
};

export default function App() {

  const [prescripcion, setPrescripcion] = useState([])

  return (
    <div className="flex flex-col items-center h-screen">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pedidos" element={<Pedidos />} />
        <Route path="/prescripcion" element={<Prescripcion setPrescripcion={setPrescripcion} />} />
      </Routes>
    </div>
  );
}
