import React from 'react'
import { useState } from 'react'

export const AddCategory = ({onAddCategories}) => {
  const [inputValue, setInputValue] = useState('');

  function onInputChage(e){
    setInputValue(e.target.value)
  }

  function onSubmitChange(e){
    e.preventDefault();
    if(inputValue.trim().length <= 3)return;
    onAddCategories(inputValue);
    setInputValue("");
  }

  return (
    <div>
      <form onSubmit={onSubmitChange}>
        <input 
          type="text"
          placeholder='Buscar gifs'
          value={inputValue}
          onChange={onInputChage}
        />
      </form>
    </div>
  )
}
