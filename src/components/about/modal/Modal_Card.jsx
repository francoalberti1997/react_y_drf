import axios from "axios";
import { useEffect, useState } from "react";


const Modal_Card = (props) => {
  
  const campo = props.campo;

  const campo_capitalize = props.campo;

  const textoCapitalizado = campo_capitalize.charAt(0).toUpperCase() + campo_capitalize.slice(1);



  const [titulos, setField] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Realizar la solicitud GET al montar el componente
    axios.get(`https://railwaydrf-production.up.railway.app/api/${campo}/`)
      .then(response => {
        // Actualizar el estado con los datos recibidos
        setField(response.data);
      })
      .catch(error => {
        // Manejar cualquier error ocurrido durante la solicitud
        setError(error);
      });
  }, []); // El segundo argumento [] indica que esto se ejecuta solo una vez al montar el componente

  return (
    <section className='experience'>
      <p className='section_text_p1'>Explore My</p>
      <h1 className='title'>{textoCapitalizado}</h1>
      <div className="experience-details-container">
        <div id='modal-about' className="about-containers">
          <div className='titulo-modal'>
            <h2 className='experience-sub-title'>{props.titulo}</h2>
          </div>
          <div className='about-containers'>

            {titulos ? titulos.map((titulo, index) => (
              <div className="details-container" key={index}>
                <article>
                  <div className="contenedor-modal-info">
                    <div className="contenedor-texto-modal">
                      <h2 className="experience-sub-title">{titulo.nombre}</h2>
                      <h3>{titulo.puesto}</h3>
                    </div>
                    <p className="descripcion-modal">{titulo.descripcion}</p>
                    <a href={titulo.link}><img src={titulo.img} alt="" width={"200px"} height={"200px"} className="img-modal"/></a>
                    {titulo.motivacion ? <p className="descripcion-modal">{titulo.motivacion}</p> : <></>}

                  </div>
                </article>
              </div>
            ))
            : (
              <p>Loading...</p>
            )
          }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Modal_Card;
