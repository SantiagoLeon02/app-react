import { useEffect, useState } from 'react';
import { GifItem } from './GifItem';
import { getGifs } from './Helpers/getGifs';



export const GifGrid = ({category}) => {
  const[images, setImages] = useState([]);

  const getImages = async() =>{
    const newImages = await getGifs(category);
    setImages(newImages);
  }

  useEffect( () =>{
    getImages();
  },[]);


  return (
    <>
        <div>
          
          <h1>{category}</h1>
          <div className='card-grid'>
          {
            images.map( image => (
              
              <GifItem 
                key={image.id} 
                {... image}
              />
            ))
          } 

          </div>

        </div>
    </>
  )
}
