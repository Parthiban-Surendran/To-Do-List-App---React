import React from 'react'

export const Header = ({title}) => {
 
    

  return (
    //<header style={{backgroundColor:'yellow',color:'white'}}>
    <header>
        <h1>{title}</h1>
    </header>
  )
}
Header.defaultProps = {
  title:"TO-DO LIST"
}
export default Header