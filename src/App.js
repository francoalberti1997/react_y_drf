import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const base_url = 'https://railwaydrf-production.up.railway.app/index/';

  useEffect(() => {
    axios.get(base_url)
      .then(response => {
        console.log('Data from API:', response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div> 
      <h1>Estos son los resultados:</h1>
      
    </div>
  );
}

export default App;
