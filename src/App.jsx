import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Nav_c from './components/navbar/Nav';
import Main from './components/main/Main';
import About from './components/about/About';
import Footer from './components/footer/Footer';

import Login from './components/login/Login';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";

function App() {
  const base_url = 'https://railwaydrf-production.up.railway.app/api/propuestas/';

  return (
    <Router>

    <Routes>
      <Route path='/' element={<>
        <Nav_c />
        <Main />
        <About />
      </>} />
      <Route path='/login' element={<Login />} />
      <Route path='*' element={<Navigate to='/' />} />

    </Routes>
  </Router>
  )
}

export default App;
