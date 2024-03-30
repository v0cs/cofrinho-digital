import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Login from '../pages/login/Login';
import Home from '../pages/home/home';

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Login/>
  },
  {
    path: "/home",
    element: <Home/>
  }
])
  
export default Routes;