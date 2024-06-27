import React from 'react'
import { logo } from '../assets'

function Header() {
  return (
    <>
        <header>
            <div className="container">
                <div className="logo">
                    <span><img src={logo} /><b>Groce</b></span>
                </div>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Items</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <div className="icons">
                    <i class="ri-user-fill"></i>
                    <i class="ri-shopping-cart-2-fill"></i>
                </div>
            </div>
        </header>
    </>
  )
}

export default Header
