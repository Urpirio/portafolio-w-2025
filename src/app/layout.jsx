import React from 'react';
import '../styles/Globals.css';
import Image from 'next/image';
import Logo from '../../public/LogoPortafolio.png';
import HoverNav from './func/HoverNav';
import HoverNav2 from './func/HoverNav2';
import HoverNav3 from './func/HoverNav3';
import HoverNav4 from './func/HoverNav4';

export default function Layout({children}) {


 
  
  return (

    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
        <title>UrpirioDev</title>
    </head>
    <body>
      <header className='flex items-center justify-between pr-3 pl-3 h-15   bg-white border-1 border-gray-100 shadow-green-50 shadow-2xl sticky  top-[0] z-3'>
        <div className='flex justify-center items-center cursor-pointer'>
          <Image src={Logo} className='h-10 w-10'/>
          <h1 className='font-bold text-2xl'>Dev</h1>
        </div>
        <nav className='flex items-center justify-center gap-5 ml-10  text-[17px] '>
          <div onMouseEnter={HoverNav} onMouseLeave={HoverNav} className='cursor-pointer transition-all duration-300 hover:text-green-500'>
            Home
            <div className='h-1' id='HoverHome'></div>
          </div>
          <div onMouseEnter={HoverNav2} onMouseLeave={HoverNav2} className='cursor-pointer transition-all duration-300 hover:text-green-500'>
            About
            <div className='h-1 transition-all duration-300' id='HoverAbout'></div>
          </div>
          <div onMouseEnter={HoverNav3} onMouseLeave={HoverNav3} className='cursor-pointer transition-all duration-300 hover:text-green-500'>
            Proyects
            <div className='h-1' id='HoverProyects'></div>
          </div>
          <div onMouseEnter={HoverNav4} onMouseLeave={HoverNav4} className='cursor-pointer transition-all duration-300 hover:text-green-500'>
            Contacts
            <div className='h-1' id='HoverContact'></div>
          </div>
        </nav>
        <div className=''>
          <button className=' flex h-10 p-5  border-1 justify-center items-center rounded-2xl shadow-2xl shadow-green-200 bg-green-400 text-white font-bold  '>Contact</button>
        </div>
      </header>
        {children}
    </body>
    </html>
  )
}
