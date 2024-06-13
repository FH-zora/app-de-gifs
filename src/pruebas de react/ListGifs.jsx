 import { motion } from 'framer-motion';
import React from 'react';
 
export const ListGifs = ({ gifs }) => {
  return (
    <div className='card-grid'> 

      {gifs && gifs.map((gif) => (
        <div key={gif.id} className='gif-item'>
          <motion.img
            src={gif.images.downsized_medium.url}
            alt={gif.title}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}/> 
          
        </div>
      ))}
    </div>
  );
};