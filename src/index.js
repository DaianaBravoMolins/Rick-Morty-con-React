import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import Characters from './Pages/Characters/characters';
import './Componentes/BotonInicio/boton'

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Characters' element={<Characters/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
    </Router>
  </React.StrictMode> 
);

 // <uniquifier>: Use a unique and descriptive class name
// <weight>: Use a value from 100 to 900

