// este archivo es el que interpreta el api y lo manda en a la pantalla principal

import React from 'react'

export const GifItem = ({title, url,id}) => {


  return (
    <div  className='card'>
      <img src={url} alt={ title} />
      <p> {title} </p>

    </div>
  )
}
