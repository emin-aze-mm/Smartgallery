import React from 'react'
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
        <footer className='bg-black py-12 '>
            <div></div>
            <div className="max-w-screen-2xl px-4 sm:px-6 text-gray-800 sm:grid lg:grid-cols-5 sm:grid-cols-2 mx-auto">
              <div className='p-5'>
                <h2 className="mb-6 text-sm font-semibold text-gray-400 uppercase text-white50">Information</h2>
                <ul className="text-white dark:text-gray-400 ">
                    <li >   
                        <Link to="/" className='mb-1 block'>About Us</Link>
                    </li>
                    <li>
                        <Link to="/" className='mb-1 block'>About Zip </Link>
                    </li>        
                    <li >   
                        <Link to="/" className='mb-1 block'>Privacy Policy</Link>
                    </li>
                    <li >   
                        <Link to="/" className='mb-1 block'>Search</Link>
                    </li>
                    <li >   
                        <Link to="/" className='mb-1 block'>Terms</Link>
                    </li>
                    <li >   
                        <Link to="/" className='mb-1 block'>Orders and Returns</Link>
                    </li>
                    <li >   
                        <Link to="/">Contact Us</Link>
                    </li>
                    <li >   
                        <Link to="/" className='mb-1 block'>Advanced</Link>
                    </li>
                    <li >   
                        <Link to="/" className='mb-1 block'>Search</Link>
                    </li>
                    <li >   
                        <Link to="/" className='mb-1 block'>Newsletter</Link>
                    </li>
                    <li >   
                        <Link to="/" className='mb-1 block'>Subscription</Link>
                    </li>
                </ul>
              </div>
              <div className='p-5'>
                  <h2 className="mb-6 text-sm font-semibold text-gray-400 uppercase text-white50">Pc Parts</h2>
                  <ul className="text-white dark:text-gray-400 ">
                      <li>
                          <Link href="#" className='mb-1 block' >CPUS</Link>
                      </li>     
                      <li>
                          <Link href="#" className='mb-1 block'>Add On Cards</Link>
                      </li>   
                      <li>
                          <Link href="#" className='mb-1 block'>Hard Drives(Internal)</Link>
                      </li>   
                      <li>
                          <Link href="#" className='mb-1 block'> Graphic Cards</Link>
                      </li>   
                      <li>
                          <Link href="#" className='mb-1 block'>Keyboards / Mice</Link>
                      </li>   
                      <li>
                          <Link href="#" className='mb-1 block'>Cases / Power Supplies / Cooling</Link>
                      </li>   
                      <li>
                          <Link href="#" className='mb-1 block'>RAM (Memory)</Link>
                      </li>   
                      <li>
                          <Link href="#" className='mb-1 block'>Software</Link>
                      </li>   
                      <li>
                          <Link href="#" className='mb-1 block'>Speakers / Headsets</Link>
                      </li>   
                      <li>
                          <Link href="#" className='mb-1 block'>Motherboards</Link>
                      </li>   
                      
                  </ul>
              </div>
              <div className='p-5'>
                  <h2 className="mb-6 text-sm font-semibold text-gray-400 uppercase text-white50">Desktop PCs</h2>
                  <ul className="text-white dark:text-gray-400 ">
                      <li>
                          <Link href="#" className='mb-1 block'>Custom PCs</Link>
                      </li>
                      <li>
                          <Link href="#" className='mb-1 block'>Servers</Link>
                      </li>
                      <li>
                          <Link href="#" className='mb-1 block'>MSI All-In-One PCs</Link>
                      </li>
                      <li>
                          <Link href="#" className='mb-1 block'>HP/Compaq PCs</Link>
                      </li>
                      <li>
                          <Link href="#" className='mb-1 block'>ASUS PCs</Link>
                      </li>
                      <li>
                          <Link href="#" className='mb-1 block'>Tecs PCs</Link>
                      </li>
                  </ul>
              </div>
              <div className='p-5'>
                  <h2 className="mb-6 text-sm font-semibold text-gray-400 uppercase text-white50">Laptops</h2>
                  <ul className="text-white dark:text-gray-400 ">
                      <li>
                          <Link href="#" className='mb-1 block'>Evryday Use Notebooks</Link>
                      </li>
                      <li>
                          <Link href="#" className='mb-1 block'>MSI Workstation Series</Link>
                      </li>
                      <li>
                          <Link href="#" className='mb-1 block'>MSI Prestige Series</Link>
                      </li>
                      <li>
                          <Link href="#" className='mb-1 block'>Tablets and Pads</Link>
                      </li>
                      <li>
                          <Link href="#" className='mb-1 block'>Netbooks</Link>
                      </li>
                      <li>
                          <Link href="#" className='mb-1 block'>Infinity Gaming Notebooks</Link>
                      </li>
                  </ul>
              </div>
              <div className='p-5'>
                  <h2 className="mb-6 text-sm font-semibold text-gray-400 uppercase text-white50">Address</h2>
                  <ul className="text-white dark:text-gray-400 ">
                      <li>
                          <h6>Address:</h6>
                          <p>1234 Street Adress City Address, 1234</p>
                      </li>
                      <li>
                          <h6>Phones:</h6>
                          <p>(00) 1234 5678</p>
                      </li>
                      <li>
                          <h6>We are open:</h6>
                          <p>Monday-Thursday: 9:00 AM - 5:30 PM Friday: 9:00 AM - 6:00 PM Saturday: 11:00 AM - 5:00 PM</p>
                      </li>
                      <li>
                          <h6>E-mail:</h6>
                          <p>Smart@email.com</p>
                      </li>
                      
                  </ul>
              </div> 
            </div>
        </footer>
    </>
  )
}

export default Footer;