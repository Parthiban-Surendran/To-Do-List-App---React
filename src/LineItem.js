import React from 'react'
import { FaTrash } from "react-icons/fa";
export const LineItem = ({item,handleCheck,handledelete}) => {
  return (
    <li className="item" key ={item.id}>
          <input 
          type ="checkbox"
          onChange={() => handleCheck(item.id)}
          checked = {item.checked}
          />

          <label
          style={(item.checked)?{textDecoration:'line-through'}:null}
          onDoubleClick={() => handleCheck(item.id)}
          >
            
            {item.item}
          </label>
          <FaTrash  
          role="button"
          onClick={()=>handledelete(item.id)}
          tabIndex="0"
          />
        </li>
  )
}
