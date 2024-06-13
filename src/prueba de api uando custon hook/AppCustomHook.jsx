import { useState } from "react";
import { useCustomHooks } from "./CustomHooks";
import { GaleriaDeImages } from "./GaleriaDeImages";

 
 export const AppCustomHook = () => {
  const [query, setQuery] = useState('');
  const {  images, loading,error} = useCustomHooks(query);


  const handleSubmit = (event) =>{
    event.preventDefault();
    if( query.trim().length <= 2 ) return;
    setQuery('');
  };

   return (   <form onSubmit={ handleSubmit }>        
                <div>
                    <h1>  AppCustomHook </h1>
                    <input type="text"
                     placeholder=" search images"
                      value={ query }
                       onChange={ (even) => setQuery(even.target.value)}
                       />
                      

{loading ? (
        <p>escriba la imagen que decea.</p>
      ) : error ? (
        <p>Ocurrió un error: {error.message}</p>
      ) : (
        <GaleriaDeImages images={images} />
      ) }
   
    </div>
    </form>
  );
}; 