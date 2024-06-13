//  en este jsx es donde se crea la app de react es la pagina principal 


import { useState } from "react";
 import { AddCategoris } from "./componets/AddCategoris";
import { GifGrid } from "./componets/GifGrid";



 
 export const GifExpertApp = () => {
    const [categoris, setCategoris] = useState(['naruto'])

      // agregar una nueva categoria.
        const onAddCategory =( NewCategory ) => {
       if (categoris.includes(NewCategory)) return;
        setCategoris ([ NewCategory, ...categoris]);};
         


 return (
    <>
    <h1> GifExpertApp </h1>
    <p> busca gifs de lo que decee</p>
    
    <AddCategoris
    onNewCategory = { (value) => onAddCategory (value)}/>

{
categoris.map(( categoris) => (
        <GifGrid 
          key={categoris}
           categoris={categoris} /> ))};
            </>)}
   
   
 
    
    
    
    
    
 