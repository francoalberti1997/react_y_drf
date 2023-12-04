import React, { useState } from 'react';
import "../../index.css";
import logo from "../navbar/logo.svg"
import logo_n from "../navbar/fa_logo.jpg"


const Nav_c = () => {

  const [clicked, setClicked] = useState(false)

  return (
  <>
  <nav>
    <img src={logo} alt="" />
  <div>
    {/* {!clicked ? <ul id='navbar'>
      <li><a href="" className='active'>Home</a></li>
      <li><a href="">Sobre Mí</a></li>
      <li><a href="">Servicios</a></li>
      <li><a href="">Contacto</a></li>
    </ul> : <></>} */}
    
    <ul id='navbar' className={!clicked ? '#navbar' : '#navbar active'}>
      <li><a href="" className='active'>Home</a></li>
      <li><a href="">Sobre Mí</a></li>
      <li><a href="">Servicios</a></li>
      <li><a href="">Contacto</a></li>
      {clicked ? <li id='logo_li'><img src={logo_n} alt="" /></li> : <></>}
    </ul>

  </div>

  <div id="mobile" onClick={()=>{setClicked(!clicked)}}>
    {!clicked ? <i className='fas fa-bars'></i> : <i className='fas fa-times'></i>}
  </div>

  </nav>

  </>  
  )
}
export default Nav_c;
