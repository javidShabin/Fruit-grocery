import React from 'react';
import { heroImg } from '../assets';
// import { bg } from '../assets';

export default function Hero() {
  return (
    <div className="hero bg-[#bff9c4] w-full h-[50vh]">
        <div className="container flex justify-between items-center overflow-hidden">
            <div className="left ml-10 mt-10">
                <h1 className='font-bold text-[30px]'>Dont miss our daily amazing deal</h1>
                <p>Save up to 60% off on your first order</p>
            </div>
            <div className="right">
                <img src={heroImg} className='hidden'/>
            </div>
        </div>
    </div>
  );
}

// className="container bg-cover bg-center h-screen w-full"
// style={{ backgroundImage: `url(${bg})` }}
