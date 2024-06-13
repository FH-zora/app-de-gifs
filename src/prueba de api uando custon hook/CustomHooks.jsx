

import React, { useEffect,useState } from 'react'

export const useCustomHooks = (query) => {

    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);


       useEffect(() => {

        if (!query)return;

        const fetchImages = async () =>{
            setLoading(true);
            setError(false);
            try {
                const response = await fetch(`https://pixabay.com/api/?key=44156118-e11715a500e6b411e38525ddb&q=${encodeURIComponent(query)}&per_page=10`)

                if(!response.ok){
                    throw new Error ('fallo el response');
                }

                const data = await response.json();
                setImages(data.hits);
                 console.log(data);   
            } catch (err) {
                setError(err);             
            } finally {
                setLoading(false);
            }
        };
        fetchImages();
     }, [query]);
     return { images, loading, error};}


            
        

        
      

    




  

