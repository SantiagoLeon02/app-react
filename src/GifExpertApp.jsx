import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

    // const [categories, setCategories] = useState(["One Punch man","Naruto","Minecraft"]);
    const [categories, setCategories] = useState(["Naruto"]);

    const onAddCategory = (newCategory) => {
      setCategories([...categories, newCategory])
    }


  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory onAddCategories={onAddCategory}/>
        {
          categories.map( category =>(
            <GifGrid key={category} category={category} />
          ))
        }
    </>
  )
}
