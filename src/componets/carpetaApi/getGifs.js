//  este archivo es el que contiene el API. 
 
 
 export const getGisfs =  async(categoris)=>{
    const url =`https://api.giphy.com/v1/gifs/search?api_key=qZn7T2znjjFwtA9cQATCjJXnx9cQc4VW&q=${categoris}&limit=12`

    const respuesta = await fetch(url);
    const {data} = await respuesta.json();

    const gifs = data.map(img => ({
       id:img.id,
       title:img.title,
       url:img.images.downsized_medium.url   

    }));
    return gifs;
}