// input que se usa para la entrada de la peticion

import { useState } from "react"

export const AddCategoris = ({ onNewCategory })=>{

  const [ inputValue, setInputValue] = useState('');
    const onInput = ({target})=>{  
      setInputValue(target.value); }; 
   // el parametro que se usa en el onSubmit es la key.
      const onSubmit1 =(key)=>{
      key.preventDefault();
      if( inputValue.trim().length <= 2) return;
      onNewCategory (inputValue.trim());
       setInputValue('');};

    return(
      <form onSubmit={onSubmit1} > 
         <input type="text" 
         onChange={onInput}
        placeholder=" search gif"
        value={ inputValue}  />
        </form> )}

 

   

    
   

