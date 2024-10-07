import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from './navbar'
import './App.css'
import HomePage from './homepage/index.tsx'

function App() {

  return (
    <>
      <div className="container">
        <NavBar/>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
