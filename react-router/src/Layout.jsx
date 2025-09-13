import React from 'react'
import Header from './COMPONENTS/header/Header'
import Home from './COMPONENTS/Home/Home'
import Footer from './COMPONENTS/footer/Footer'
import { Outlet } from 'react-router-dom'
function Layout() {
  return (
    <div>
      <Header></Header>
     <Outlet/>
      <Footer></Footer>
    </div>
  )
}

export default Layout
