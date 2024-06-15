import React, { useState,useEffect } from 'react';
import { ComponentReact } from './ComponentReact';
import { ListGifs } from './ListGifs';



export const AppReact = () => {

  const [query, setQuery] = useState('');
  const [gifs, setGifs] = useState([]);

  const ConsumirApi =  async ()=>{
    try {
      const ApiKey = 'qZn7T2znjjFwtA9cQATCjJXnx9cQc4VW';
      const url  =  `https://api.giphy.com/v1/gifs/search?api_key=${ApiKey}&q=${query}&limit=20`;

      const response = await fetch(url);
      const {data} =  await response.json();
      // setGifs(anteGifs => [...data,...anteGifs ]); es para poner listado de lo que se busca en el input.
      setGifs(data)          
    } catch (error) {
      console.error('Error fetching GIFs:', error); }};

  return (
    <>
    <h1> App de Gifs </h1>
    <h2> inserte el nombre del gif que desea encontar</h2>
     <ComponentReact query={query} setQuery={setQuery} ConsumirApi ={ ConsumirApi}/> 
      < ListGifs gifs = {gifs}/>
      
  </>)
}

// apikey  y el link de los gifs
// `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=12`
// 'qZn7T2znjjFwtA9cQATCjJXnx9cQc4VW'