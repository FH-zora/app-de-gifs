
// este es el archivo  que manda a GifItem la informacion para mandar las imagenes a la pagina principal

import { useEffect, useState } from "react";
import { getGisfs } from "./carpetaApi/getGifs";
import { GifItem } from "./GifItem";

 export const GifGrid = ({ categoris }) => {


   const [imagenes, setImagenes] = useState([]);

    const getImagenes = async() =>{
      const newImagnes = await getGisfs( categoris);
      setImagenes(newImagnes);
    }
      useEffect(() => {
         getImagenes(categoris);}, [])
  
   return (
    <>
    <h3> { categoris} </h3>

    <div className="card-grid">
      {
        
        imagenes.map((imagenes) =>(
          <GifItem key={ imagenes.id }
             { ...imagenes} />))}
          
    </div>
      </> )
 }
      
  
    
     
     
  
 