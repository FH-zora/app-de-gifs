//   este archivo es un jemplo de como hacer que el input cambie de estado cuando todos los caracteres sean lo que el usuario decee, inpidiendo 
//   que el estado cambien con cada caracter que se agregue al input de la busqueda....

// NOTA: para lograr esto el USEEFFECT no debe ser implemnetado a la hora de consumir una api de este estilo 
 

import { useState, } from 'react'
 
 export const ApiComplete = () => {
const [valorInput, setValorInput] = useState('');
const [gifs, setGifs] = useState([]);


const consumoDeApi =  async ()=>{
    const Api = 'qZn7T2znjjFwtA9cQATCjJXnx9cQc4VW';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${Api}&q=${valorInput}&limit=12`;

    const response = await fetch(url);
    const {data}  = await response.json();
    console.log(data);
    setGifs(data)
   
}
 const handleSubmit = async (e)=>{
    e.preventDefault(); 
    const gifs =  await consumoDeApi();}

   return (
<div className=' ApiComplete'>
    <form  onSubmit={handleSubmit}>
        <h1>ApiComplete</h1>

        <input type="text"
          placeholder='buscar'
           value={ valorInput}
            onChange={(e) => setValorInput(e.target.value)}/>
    </form>
                            <div className='card-grid'>
                        {gifs && gifs.map((gif) => (
                            <div key={gif.id} className='gif-item'>
                              <img src={gif.images.downsized.url} alt={gif.title}  />
                                <p> {gif.title} </p>
                             </div>))}
  
                            </div>
                            </div>
   )
 }



                            
                            
                       
                       



    