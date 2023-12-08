import React from 'react'
import img_about from "../about/img1.jpg"
import "../../index.css"

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
                    <div className="details-container">
                        <div class="img" id='img1'></div>
                        <div className="content-about">
                        <i class="fa-solid fa-screwdriver-wrench"></i>
                            <h3>Experience</h3>
                            <p>Conoce mi experiencia laboral </p>
                            <a href="#"><button>Ver Más</button></a>
                                {/* <p>Fundador y dueño de "Alberti Code" & "Tu Educación Alternativa"</p>
                                <p>5+ años de experiencia como emprendedor de negocios digitales</p>
                                <p>3+ años de experiencia como Full Stack Developer</p>                     */}
                        </div>
                       
                    </div>
                    <div className="details-container">
                        <div class="img" id='img2'></div>
                        <div className="content-about">
                            <i class="fa-solid fa-briefcase"></i>
                            <h3>Proyectos</h3>
                            <p>Conoce mis Emprendimientos</p>
                            <a href="#"><button>Ver Más</button></a>
                        </div>
                        
                        {/* <p>Alberti Code: Digitalización integral de negocios y desarrollo web<br/></p>
                        <p>Tu Educación Alternativa: Academia de Inglés</p> */}
                    </div>
                    <div className="details-container">
                        <div class="img" id='img3'></div>
                        <div className="content-about">
                            <i class="fa-solid fa-bolt-lightning"></i>
                            <h3>Skills</h3>
                            <p>Conoce mis habilidades <br /><br /></p>
                            <a href="#"><button>Ver Más</button></a>
                            {/* <p>Desarrollador Full Stack: Django & React</p>
                            <p>Conocimientos en Machine Learning</p>
                            <p>Fluidez en Inglés</p>
                            <p>Formación en Metalurgia</p>
                            <p>Experiencia en estrategias de campañas digitales y gestión de equipos</p>
                            <p>Especialista en la creación de plataformas digitales y la dirección de negocios en línea</p> */}
                        </div>
                       
                    </div>
                </div>
                {/* <div className="text-container">
                    <p> y ganar, ganar, ganar 🤭</p>
                </div> */}
            </div>
    </div>
    </div>
  )
}

export default About
