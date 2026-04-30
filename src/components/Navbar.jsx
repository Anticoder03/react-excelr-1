//? First way to create navbar
{/*
    import React from 'react'
import './Navbar.css'
import Addition from './Addition';
const Navbar = () => {
    
  return (
    <>
      <ul className="navbar">
        <li className="item">Home</li>
        <li className="item">About</li>
        <li className="item">Contact</li>
        <li className="item">Login</li>
      </ul>
     <Addition/>
    </>
  )
}
  
export default Navbar
*/}


//? Secons way to create navbar using data from menus.js file
{/*
import React from 'react'
import menus from '../data/menus'
import './Navbar.css'
const Navbar = () => {
  return (
    <>
     <ul className="navbar">
         {menus.map((menu,index)=>{
        return <li key={index} className="item">{menu}</li>
      })}
     </ul>
    </>
  )
}

export default Navbar

*/}

//? Third way to create navbar using data from list
import React from 'react'
import './Navbar.css'
const Navbar = () => {
    let menus = ["home","about","contact","login"];
  return (
    <>
      <ul className="navbar">
            {menus.map((menu,index)=>{
                return <li key={index} className="item">{menu}</li>
            }
            )}
      </ul>
    </>
  )
}

export default Navbar
