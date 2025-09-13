import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home'
import { Routes, Route, Link, Links } from 'react-router-dom' 
import About from './About'

function App() {
  return (
    <>
    <Link to="/">HOME PAGE</Link>
    <br />
     <Link to="/about">ABOUT PAGE</Link>
<Routes>
  <Route path='/' element = {  <Home></Home>}></Route>
  <Route path='/about' element = {  <About></About>}></Route>

</Routes>
    </>
  )
}

export default App
