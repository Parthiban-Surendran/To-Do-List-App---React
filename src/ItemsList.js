import React from 'react'
//import { FaTrash } from "react-icons/fa";
import { LineItem } from './LineItem';
export const ItemsList = ({items,handleCheck,handledelete}) => {
  return (
       
    <ul>
      {items.map((item) =>(
        
        <LineItem
            item={item}
            key ={item.id}
            handleCheck={handleCheck}
            handledelete={handledelete}


        />
      ))}
    </ul>
  )
}