import React, { useEffect, useState } from 'react'
import "../../../index.css"
import Modal_Card from './Modal_Card'
import axios from 'axios';

const Modal = (props) => {

 
  
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
    
    const body = document.querySelector('body');
    const html = document.querySelector('html');
    const root = document.querySelector('#root');

    if (body && html && root) {
        setModal(prevModalState => !prevModalState);

        if (!modal) {
            body.classList.add('nueva-clase-body');
            html.classList.add('nueva-clase-html');
            root.classList.add('nueva-clase-root');
        } else {
            body.classList.remove('nueva-clase-body');
            html.classList.remove('nueva-clase-html');
            root.classList.remove('nueva-clase-root');
        }

        console.log("Activado");
    } else {
        console.log("Elemento no encontrado");
    }
};
  return(
        <>
        {/* indice, campo, texto,  */}
            <div className="details-container" onClick={toggleModal}>
                <div className="img" id={`img${props.indice}`}></div>
                <div className="content-about">
                <i class="fa-solid fa-screwdriver-wrench"></i>
                    <h3>{props.campo.charAt(0).toUpperCase() + props.campo.slice(1)}</h3>
                    <p>{props.texto} </p>
                    <a href="#"><button>Ver Más</button></a>
                        {/* <p>Fundador y dueño de "Alberti Code" & "Tu Educación Alternativa"</p>
                        <p>5+ años de experiencia como emprendedor de negocios digitales</p>
                        <p>3+ años de experiencia como Full Stack Developer</p>                     */}
                </div>
            </div>

            {modal && (
                <div className="modal">
                <div className="overlay"></div>
                <div className="modal-content">
                   <Modal_Card titulo={props.titulo} campo={props.campo}/>
                    <button className="close-modal" onClick={toggleModal}>
                        {modal ? <i className='fas fa-times'></i> : <i className='fas fa-bars'></i>}
                    </button>
                </div>
                </div>
      )}

        
        </>
  )
}

export default Modal
