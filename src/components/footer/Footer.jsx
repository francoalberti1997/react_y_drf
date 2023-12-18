import React, { useEffect, useState } from 'react'
import "../../index.css"
import axios from 'axios';

const Footer = () => {

  const [nombre, setNombre] = useState()

  const [celular, setCelular] = useState()

  const [mail, setEmail] = useState()

  const [mensaje, setMensaje] = useState()

  const [formulario, setFormulario] = useState(false)

  const [mostrarElemento, setMostrarElemento] = useState(false);
  
    const handleClick = () => {
      if (formulario == true){
        setMostrarElemento(!mostrarElemento);
      }
    };

  const enviarDatos = async () => {
    try {
      const payload = {
        nombre: nombre,
        celular: celular,
        mail: mail,
        mensaje: mensaje
      };
  
      const respuesta = await axios.post('https://railwaydrf-production.up.railway.app/api/contacto/', payload, {
        headers: {
          'Content-Type': 'application/json' // Set headers if required
        }
      });
  
      if(respuesta.status == 201){
        setFormulario(prevState => !prevState);
      }

    } catch (error) {
      if (error.response) {
        // Request made and server responded with an error status
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an error
        console.log('Error', error.message);
      }
      console.error('Error al enviar la petición:', error);
    }
  };
  


  const handleSubmit = (event) => {
    event.preventDefault(); 
    
    enviarDatos();
  };

  useEffect(() => {
    console.log("Estado del formulario actualizado:", formulario);
  }, [formulario]);
  

  

  return (
    <>
    {!formulario ? <form action="" onSubmit={handleSubmit}>
    <div class="form" id='formularios'>
      <div class="title-form">Contacto</div>
      <div class="input-container ic1">
        <input id="firstname" class="input" type="text" placeholder=" " value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          />
        <div class="cut"></div>
        <label for="firstname" class="placeholder">Nombre</label>
      </div>

      <div class="input-container ic2">
        <input id="lastname" class="input" type="text" placeholder=" " value={celular}
          onChange={(e) => setCelular(e.target.value)}/>
        <div class="cut"></div>
        <label for="celular" class="placeholder">Celular</label>
      </div>

      <div class="input-container ic2">
        <input id="email" class="input" type="text" placeholder=" " value={mail}
          onChange={(e) => setEmail(e.target.value)}/>
        <div class="cut cut-short"></div>
        <label for="email" class="placeholder">Email</label>
      </div>
      <div className="input-container ic2" id="">
      <textarea
        id="mensaje"
        className="input"
        style={{ resize: "none", width: "100%", height: "80px" }} // Establecer un ancho y alto fijo
        placeholder=" " value={mensaje} type="text"
        onChange={(e) => setMensaje(e.target.value)}
      ></textarea>
      <div className="cut cut-short"></div>
      <label htmlFor="mensaje" className="placeholder">
        Mensaje
      </label>
    </div>
      <button type="submit" className="submit" onClick={handleClick}>Submit</button>
    </div>
  </form> : 
  
  <div className={`form ${formulario ? 'active' : ''}`}>
    <p className='section__text_p1'>Gracias por tu Mensaje. Me contactaré contigo pronto.</p>
  </div>


  }
    </>
        )
}

export default Footer
