import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const base_url = 'https://railwaydrf-production.up.railway.app/api/propuestas/';

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(base_url)
      .then(response => {
        setData(response.data);
        console.log('Data from API:', response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div> 
      <h1>Estos son los resultados:</h1>
      {data.map((item) => (
        <div key={item.id}>
          <p>ID: {item.id}</p>
          <p>Nombre: {item.nombre}</p>
          <p>Apellido: {item.apellido}</p>
          <p>Edad: {item.edad}</p>
          <p>Propuesta: {item.propuesta}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;
