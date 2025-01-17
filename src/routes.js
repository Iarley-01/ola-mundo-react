import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import Menu from './Componentes/Menu';
import Rodape from './Componentes/Rodape';
import PaginaPadrao from './Componentes/PaginaPadrao';
import ScrollToTop from './Componentes/ScrollToTop';

import Post from './Paginas/Post';
import Inicio from './Paginas/Inicio';
import SobreMim from './Paginas/SobreMim';
import NaoEncontrada from './Paginas/NaoEncontrada';

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Menu />
      
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />}/>
          <Route path="sobremim" element={<SobreMim />}/>
        </Route>
        <Route path="posts/:id/*" element={<Post />}/>
        <Route path="*" element={<NaoEncontrada />}/>
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
