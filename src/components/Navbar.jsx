import React from 'react'
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

function Navbar() {
  return (
    <>
        <nav className='flex items-center justify-between '>
            <div className='logo'>
                <img src={logo} alt="logo" className='w-[100px]' />
            </div>
            <div className="navbar ">
                <ul className='m-auto flex'>
                    <li className='p-2.5'>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='p-2.5'>
                        <Link to="/about">About</Link>
                    </li>
                    <li className='p-2.5'>
                        <Link to="/shop">Shop</Link>
                    </li>
                    <li className='p-2.5'>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
            <div className="nav-options">
                
            </div>
        </nav>
    </>
  )
}

export default Navbar;