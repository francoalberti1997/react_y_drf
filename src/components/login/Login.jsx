import React, { useState } from 'react';
import axios from 'axios';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [status_res, setStatus_res] = useState(false);

  const[contactos, setContactos] = useState()

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/login/', {
        username: username,
        password: password
      },  {headers: {
        'Content-Type': 'application/json' // Set headers if required
      }});

      console.log(response.data.contacto); // Maneja la respuesta del backend como sea necesario
      if(response.status == 200){
        setStatus_res(!status_res);
        setContactos(response.data.contacto)
      }
    } catch (error) {
      console.error('El Error ha sido:', error);
    }
  };

  return (
    <>{!status_res ? <>
    <form onSubmit={handleSubmit}>
    <div className="title-form">Contacto</div>
    <div className="input-container ic1">
      <input
        id="firstname"
        className="input"
        type="text"
        placeholder=""
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <div className="cut"></div>
      <label htmlFor="firstname" className="placeholder">
        Username
      </label>
    </div>

    <div className="input-container ic2">
      <input
        id="lastname"
        className="input"
        type="password"
        placeholder=""
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="cut"></div>
      <label htmlFor="celular" className="placeholder">
        Password
      </label>
    </div>
    <button type="submit">Enviar</button>
  </form>
    </>
    : 
            <div className='contenedor-contacto'>
                {contactos.map((contacto, index) => {
                return (
                    <div className='form' key={index} >
                        <p className=''>Nombre: {contacto.nombre}</p>
                        <p className=''>Mail: {contacto.mail}</p>
                        <p className=''>Celular: {contacto.celular}</p>
                        <p className=''>Mensaje:{contacto.mensaje}</p>
                    {/* Aquí muestra otros campos del contacto */}
                    </div>
                    );
                })}
            <button className='btn btn-color-2'><a href="">Log Out</a></button>
            </div>
       }</>
  );
}

export default LoginForm;
