import React, {useState} from 'react'
import { logo } from '../assets'

function Header() {
    const [showToggleBar, setShowToggleBar] = useState("")

    // Toggle bar function state managing
    const handleMenuBar = () => {
        setShowToggleBar(prevState => (prevState === "" ? "active" : ""))
    }
  return (
    <>
        <header className='flex justify-center items-center w-full h-[90px] shadow-lg'>
            <div className="container w-[90%] flex justify-between items-center relative">
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
                    <i className="ri-user-fill"></i>
                    <i className="ri-shopping-cart-2-fill"></i>
                </div>

                {/* Toggle Bar */}
                <div className={`toggle-bar ${showToggleBar} absolute top-[75px] bg-[#ebebeba6] w-full h-[50vh] rounded-lg flex justify-center items-center md:hidden`}>
                <ul className='text-lg'>
                    <li><a href="#">Home</a></li>
                    <li className='mt-8'><a href="#">About</a></li>
                    <li className='mt-8'><a href="#">Items</a></li>
                    <li className='mt-8'><a href="#">Contact</a></li>
                <div className="icons mt-8">
                    <i className="ri-user-fill mr-5 text-xl"></i>
                    <i className="ri-shopping-cart-2-fill text-xl"></i>
                </div>
                </ul>
                
                </div>
            
                <div className="toggle-icon text-2xl font-semibold md:hidden">
                    {/* Toggle menu button */}
                    <i className="ri-menu-fill cursor-pointer" onClick={handleMenuBar}></i>
                </div>
            </div>
        </header>
    </>
  )
}

export default Header
