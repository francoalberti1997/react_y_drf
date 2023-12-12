import React, { useState } from 'react'
import "../../index.css"
import Modal from './modal/Modal'
import img_about from "../about/img1.jpg"

const About = () => {
  

  return (
    <div id='about' className='about'>
        <p className='section__text_p1'>Conoce más</p>
        <h1 className='title'>Sobre mí</h1>
        
        <div className='section-container'>
            
            <div className='section__pic-container'>
                <img src={img_about} alt="" className='about-pic'/>
            </div>
        <div className='about-details-container'>
          <div className="about-containers">
            <Modal indice={"1"} campo={"experiencia"} texto={"Conoce más sobre mi Experiencia Laboral"}/>
            <Modal indice={"2"} campo={"proyecto"} texto={"Conoce más sobre mis actividades"} />
            <Modal indice={"3"} campo={"skills"} texto={"Conoce más sobre mis habilidades"} />
          </div>
        </div>
    </div>
    </div>
  )
}

export default About
