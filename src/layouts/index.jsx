import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/Footer';
const MainLayout = () => {
  return (
    <div>
      <Navbar/> 
      <Footer/>
      <Outlet/>
    </div>
  )
}

export default MainLayout