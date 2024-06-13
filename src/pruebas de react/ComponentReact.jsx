 import React from 'react';


 export const ComponentReact = ({query , setQuery, ConsumirApi}) => {

    const handleSubmit = async (event) =>{
        event.preventDefault();
        if ( query.trim().length <= 2) return; 
        const gifs = await  ConsumirApi();
        setQuery('');}


   return (
    <form  onSubmit={handleSubmit}>
        <div>
            <input type="text"
                placeholder='buscar gifs'
                    value={query}
                        onChange={(e) => setQuery(e.target.value)} />
        </div> 
    </form>
     
     
   )
 }
 