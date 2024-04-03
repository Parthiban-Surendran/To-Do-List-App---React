import React from 'react'
import { ItemsList } from './ItemsList';

import { useState } from 'react';    //reacthooks  ->  'State' = dynamic changing data ; 



//NOTE: reacthooks can't be used inside Class Component

//NOTE: It shouldn't be used inside any conditional statements

//NOTE: useState() always returns array of two elements which can be stored inside a variable 



const Content = ({items,handleCheck,handledelete}) => {

  /*const [name , setName] = useState("Earn");
    function handleNameChange(){
        const names=["Earn","Grow","Build"];
        const int=Math.floor(Math.random()*3);
        setName(names[int])
      }*/



    /*  const handleClick = (e) => { 
        console.log(e.target.innerText);
      }
      const handleClick2 = (name) => { 
        console.log('Thanks for support');
        //console.log('Thanks for support ${name}');

      }*/

      /* return (
         <p onDoubleClick={() => handleClick2('Bala')}>Let's {handleNameChange()} Money</p>
    <button onClick={(e)=>{handleClick(e)}}> Subscribe</button>
   
      )*/

     /* function namee() {
        return console.log("Parthiban");
      }

      const [count , setCount] = useState(99);*/





      //const [name , setName]= useState(namee())      -->  It makes the function to repeat themselves for every onclick action , to avoid use it as anonymous  function

      //const [name , setName]= useState(() => namee())  ->. use like this to avoid unwanted print

      //const [name , setName]= useState({count:99 , text:"Parthiban.S"});    -> For like using two or more objects passing at same time reflects some error by using same variable (i.e: count,setCount)  , so use different usestate() for different objects like(i.e: count,text)

      
    

    /*  function incrementFunction() {
        setCount(count+1)
      }  


      function decrementFunction() {
        setCount(prevCount => { return prevCount-1})
      }  */
      

 /* return (
    <main>
      <p> Let's {name} Money</p>
      <button onClick = {handleNameChange}>Subscribe</button>
      <button onClick={decrementFunction}>-</button>
      <span>{count}</span>
      <button onClick={incrementFunction}>+</button>
  </main>
  )*/


  /*return {
    // <button onClick={handleClick2}> Subscribe</button>
 //    <button onClick={()=>{handleClick2('Thanks')}}> Subscribe</button>

  }
  */

 /* const numbers = [-2,-1,0,1,2]
    const itemss = numbers.filter(n => n>0).map(n => ({number:n}) )
 console.log(itemss) */
 return(
  <>
    {(items.length) ? (
      <ItemsList
      items={items}
      handleCheck={handleCheck}
      handledelete={handledelete}
      />

     
      
    /*<ul>
      {items.map((item) =>(
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
      ))}
    </ul>*/
    ):
    (
      <p style={{marginTop:'2rem'}}>You Don't Have any Task </p>
 )}

  </>
 )

}

export default Content