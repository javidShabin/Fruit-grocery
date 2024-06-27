import React from 'react'
import { logo } from '../assets'

function Header() {
  return (
    <>
        <header className='flex justify-center items-center w-full h-[90px] shadow-lg'>
            <div className="container w-[90%] flex justify-between items-center">
                <div className="logo flex items-center">
                <img src={logo} className='w-10'/>
                    <span><b>Groce</b></span>
                </div>
                <ul className='hidden md:flex gap-8'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Items</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <div className="icons hidden md:flex gap-5 text-xl">
                    <i class="ri-user-fill"></i>
                    <i class="ri-shopping-cart-2-fill"></i>
                </div>
                <div className="toggle-icon text-2xl font-semibold md:hidden">
                    <i class="ri-menu-fill cursor-pointer"></i>
                </div>
            </div>
        </header>
    </>
  )
}

export default Header
