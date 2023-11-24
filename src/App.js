import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const base_url = 'https://railwaydrf-production.up.railway.app/index/';

  const [data, setData] = useState()

  useEffect(() => {
    axios.get(base_url)
      .then(response => {
        setData(response.data)
        console.log('Data from API:', response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div> 
      <h1>Estos son los resultados:</h1>
      
      <h2>{data}</h2>
      
    </div>
  );
}

export default App;
