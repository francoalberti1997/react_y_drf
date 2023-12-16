import React, { useEffect, useState } from 'react'
import "../../index.css"
import Modal from './modal/Modal'
import img_about from "../about/img1.jpg"

const About = () => {
  const [dynamicText, setDynamicText] = useState('');
  const words = ['Fullstack developer', 'Emprendedor', 'Estudiante de Ingeniería'];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  useEffect(() => {
    const typeEffect = () => {
      const currentWord = words[wordIndex];
      const currentChar = isDeleting
        ? currentWord.substring(0, charIndex - 1)
        : currentWord.substring(0, charIndex + 1);

      setDynamicText(currentChar);

      if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(typeEffect, 200);
      } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 100);
      } else {
        isDeleting = !isDeleting;
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1200);
      }
    };

    const intervalId = setTimeout(() => {
      typeEffect();
    }, 2000); // Start the typing effect after 2 seconds

    return () => clearTimeout(intervalId);
  }, []);


  return (
    <div id='about' className='about'>
        <h1 className='title' id='sobre-mi'>Sobre mí</h1>
        
        <div className='twdiv'><h1 className='tw-h1'>
        Soy <span>{dynamicText}</span>
      </h1></div>

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
