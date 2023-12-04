import React, { useState } from 'react';
import "../../index.css";
import logo from "../navbar/logo.svg";
import logo_n from "../navbar/fa_logo.jpg";

const Nav_c = () => {
  const [clicked, setClicked] = useState(false);

  const toggleMenu = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <nav>
        <img src={logo} alt="" />
        <div className='div-navbar'>
          <ul id='navbar' className={clicked ? 'active' : ''}>
            <li><a href="" className='active'>Home</a></li>
            <li><a href="">Sobre Mí</a></li>
            <li><a href="">Servicios</a></li>
            <li><a href="">Contacto</a></li>
            {/* {clicked ? <li id='logo_li'><img src={logo_n} alt="" /></li> : null} */}
          </ul>
        </div>

        <div id="mobile" onClick={toggleMenu}>
          {clicked ? <i className='fas fa-times'></i> : <i className='fas fa-bars'></i>}
        </div>
      </nav>
    </>
  );
};

export default Nav_c;
