import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Login from '../pages/login/Login';
import Movimentacao from '../pages/movimentacao/movimentacao';
import Relatorio from '../pages/relatorio/relatorio';
import Usuario from '../pages/usuario/usuario';

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Login/>
  },
  {
    path: "/movimentacao",
    element: <Movimentacao/>
  },
  {
    path: "/relatorio",
    element: <Relatorio/>
  },
  {
    path: "/usuario",
    element: <Usuario/>
  },
])
  
export default Routes;