import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Nav_c from './components/navbar/Nav';
import Main from './components/main/Main';

function App() {
  const base_url = 'https://railwaydrf-production.up.railway.app/api/propuestas/';

  return (
    <>
    <Nav_c/>
    <Main/> 
    </>
  )
}

export default App;
