import { formatearStringUrlImagen } from "../lib/funciones";

const CatalogoMonturaCard = ({
  montura = {
    "id_montura": 10,
    "nombre_montura": "Nombre monturaaaaaaaaaaaaaaaaaaa",
    "imagen":
      '<img src="https://i.ibb.co/jHWcz8B/EBJ8-NK3-Ko81-301-C5-Frontal.png" alt="EBJ8-NK3-Ko81-301-C5-Frontal" border="0">',
    "marca": "Marca montura",
    "color": "Color montura",
    "material": "Material Montura",
  },
  monturaInventario = {
    "id_montura_inventario": 10,
    "id_montura": 8,
    "precio_unit": 90,
    "stock": 20,
    "codigo": "montura8",
  },
  setModalVerCarrito,
  setMontura,
  setMonturaInventario,
  setCarrito,
  carrito
}) => {
  const { src, alt, border } = formatearStringUrlImagen(montura["imagen"]);

  return (
    <div className="p-5 hover:bg-slate-50 w-[360px]">
      <div className="w-30 h-[150px] p-5">
        <img src={src} alt={alt} border={border} className="  mb-5" />
      </div>
      <div className="flex flex-col items-center">
        <h3 className="text-center px-6 w-full uppercase text-xl font-semibold truncate ">{montura["nombre_montura"]}</h3>
        <div className="flex flex-row gap-2 items-center">
          <p className="text-sm ">S/.
            <span className="text-2xl">
              {monturaInventario["precio_unit"]}
            </span>
          </p>
          <div className="hover:bg-slate-300 rounded-full p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-shopping-cart-plus"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#000000"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              onClick={(e) => {
                e.preventDefault();
                setMontura(montura);
                setMonturaInventario(monturaInventario);
                setModalVerCarrito(true)
                setCarrito([...carrito, {
                  "id_montura_inventario":monturaInventario["id_montura_inventario"],
                  "cantidad":1,
                  "precio":monturaInventario["precio_unit"],
                  "id_boleta": NaN
                }])
              }}
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
              <path d="M12.5 17h-6.5v-14h-2" />
              <path d="M6 5l14 1l-.86 6.017m-2.64 .983h-10.5" />
              <path d="M16 19h6" />
              <path d="M19 16v6" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogoMonturaCard;
