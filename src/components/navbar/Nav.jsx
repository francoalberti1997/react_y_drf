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
        <img src={logo} alt=""  id='logo-nav'/>
        <div className='div-navbar'>
          <ul id='navbar' className={clicked ? 'active' : ''}>
            <li><a href="#profile" onClick={toggleMenu} className='active'>Home <i class="fa-solid fa-house"></i></a></li>
            <li><a href="#Servicios">Servicios <i class="fa-solid fa-bell-concierge"></i></a></li>
            <li><a href="#sobre-mi" onClick={toggleMenu}>Sobre Mí<i class="fa-solid fa-user-tie"></i></a></li>
            <li><a href="#formularios">Contacto <i class="fa-solid fa-address-book"></i></a></li>
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
