'use client';

import { useState } from "react";

const ProductsTemplate = ({children}:{children:React.ReactNode}) => {
    const [inputValue, setInputValue] = useState("");
    const onChangeHandler = (e:{target:{value:string}})=>{
        setInputValue(e.target.value);
    }
    return (
      <>
      <h2>Products Template</h2>
      <input className="p-2 border-2 border-solid border-black" type="text" placeholder="type here ..."  value={inputValue} onChange={onChangeHandler}/>
      {children}
      </>
      
      
    )
  }
  
  export default ProductsTemplate