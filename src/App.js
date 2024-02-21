import './App.css';
import Comentarios from './pages/comentarios/comentarios';
import Contato from './pages/contato/contato';
import Fotos from './pages/fotos/fotos';
import Start from './pages/home';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {

  return(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Start />}/>
      <Route path='/contato' element={<Contato />}/>
      <Route path='/fotos' element={<Fotos />}/>
      <Route path='/comentarios' element={<Comentarios />}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
