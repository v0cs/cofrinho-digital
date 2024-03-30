import { useState } from 'react'
import './App.css'
import Routes from './routes/Routes.jsx'
import { RouterProvider } from 'react-router-dom'

function App() {
  return (
    <>
      <RouterProvider router={Routes}/>
    </>
  )
}

export default App
