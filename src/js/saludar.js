
import "../css/saludar.css";

export const saludar = (nombre)=>{

    console.log("Creando un etiqueta h1");
  
    const h1 = document.createElement("h1");
    
    h1.innerText= `Hola soy ${nombre} cómo estas ?`;

      document.body.append(h1);


}