import React, { useEffect, useState } from 'react'
import "../../index.css"
import Modal from './modal/Modal'
import img_about from "../about/img1.jpg"
import Footer from '../footer/Footer'


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
         
        

        <div className="dc-txt" >
          <h2 className='section__text_p2' >Mis Servicios <i class="fa-solid fa-bell-concierge"></i></h2>        
          <p className='section__text_p1'><i class="fa-solid fa-computer"></i>Me dedico a desarrollar presencia en línea a emprendimientos, utilizando la tecnología para potenciar su éxito.</p>
          <p className='section__text_p1'><i class="fa-regular fa-comment"></i>Ofrezco capacitación en inglés, centrada en el desarrollo de habilidades comunicativas efectivas.</p>
          <p className='section__text_p1'><i class="fa-solid fa-gear"></i>Exploro oportunidades en el ámbito de la metalurgia, con interés en proyectos innovadores y sostenibles.</p>
          <p className='section__text_p1'><i class="fa-regular fa-thumbs-up"></i>Escucho propuestas de emprendimiento que se alineen con mis intereses y objetivos.</p>
        </div>
        <div className='section-container'>
        
        <h1 className='title' id='sobre-mi'>Sobre mí</h1>

            <div className='section__pic-container'>
                <img src={img_about} alt="" className='about-pic'/>
            </div>

            <div className='twdiv'><h1 className='tw-h1' id='Servicios'>
        Soy <span>{dynamicText}</span>
      </h1></div>
        <div className='about-details-container'>
          <div className="about-containers">
            <Modal indice={"1"} campo={"experiencia"} texto={"Conoce más sobre mi Experiencia Laboral"}/>
            <Modal indice={"2"} campo={"proyecto"} texto={"Conoce más sobre mis actividades"} />
            <Modal indice={"3"} campo={"skills"} texto={"Conoce más sobre mis habilidades"} />
          </div>
        </div>
    </div>
    <Footer/>
    </div>
  )
}

export default About
