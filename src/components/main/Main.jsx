import React from 'react'
import "../../index.css"
import img_mia from "../main/img/profile_franco.jpg"

const Main = () => {

  const openPDF = () => {
    window.open('../main/REPRODUCCIÓN DE UNA MANIJA DE FRENOS DE ALUMINIO.pdf', '_blank');
  };

  return (
    <>
      <section id="profile" className='main'>
        {/* <div className='section__pic-container'>
          <img src={img_mia} alt="" />
        </div> */}

        <div className='section__text'>
          <p className='section__text_p1'>
            Hello, I´m 
          </p>
          <h1 className='title'>
            Franco Alberti
          </h1>
          <p className='section__text_p2'>
            Especialista en Negocios Digitales
          </p>

          <div className='btn-container'>
            <button onClick={openPDF} className='btn btn-color-2'>Abrir PDF</button>
            <button className='btn btn-color-1'>Contact Info</button>
          </div>

          <div id='socials-container'>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-github"></i>          
          </div>  
        </div>
      </section>
    </>
  )
}

export default Main
