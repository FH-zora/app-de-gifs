

export const GaleriaDeImages = ({images}) => {
  return (

    <div className=" card-grid">
          {images && images.length > 0 ? (
            images.map((image) => (
              <div key={image.id}>
                <img src={image.webformatURL} alt={image.tags} />
              </div>
            ))
          ) : (
            <p>No se encontraron imágenes</p>
          )} </div>
    
  )
}
