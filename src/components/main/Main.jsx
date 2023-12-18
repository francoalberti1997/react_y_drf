import React, { useEffect, useState } from 'react'
import "../../index.css"
import img_mia from "../main/img/profile_franco.jpg"



const Main = () => {

  const openPDF = () => {
    window.open('../main/REPRODUCCIÓN DE UNA MANIJA DE FRENOS DE ALUMINIO.pdf', '_blank');
  };

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
