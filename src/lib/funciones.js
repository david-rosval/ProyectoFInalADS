import { obtenerGet, registrarPost } from "./conexionApi";

export function formatearStringUrlImagen(stringImagen='<img src="https://i.ibb.co/TTmWTjV/df-BBqw-TYjvfrontal-tom-silver-optimania.png" alt="df-BBqw-TYjvfrontal-tom-silver-optimania" border="0">') {
    // Crear un elemento temporal para parsear el string HTML
    const tempElement = document.createElement('div');
    tempElement.innerHTML = stringImagen;
  
    // Obtener los atributos necesarios del elemento
    const src = tempElement.querySelector('img').getAttribute('src');
    const alt = tempElement.querySelector('img').getAttribute('alt');
    const border = tempElement.querySelector('img').getAttribute('border');
  
    // Crear un objeto con los valores obtenidos
    const imagenObj = {
      src: src,
      alt: alt,
      border: border
    };
  
    return imagenObj;
  }

