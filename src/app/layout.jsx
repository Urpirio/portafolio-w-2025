'use client';
import React from 'react';
import '../styles/Globals.css';
import Image from 'next/image';
import Logo from '../../public/LogoPortafolio.png';
import HoverNav from './func/HoverNav';
import HoverNav2 from './func/HoverNav2';
import HoverNav3 from './func/HoverNav3';
// import HoverNav4 from './func/HoverNav4';
import LinkLinkedin from './func/LinkLinkedin';
import LinkInstagram from './func/LinkInstagram';
import LinkGithud from './func/LinkGithud';
import Linkproyect from './func/LinkProyects';
import { usePathname } from 'next/navigation';
import LinkAboutMe from './func/LinkAboutme';
import LinkContact from './func/LinkContact';
import LinkHome from './func/LinkHome';



export default function Layout({children}) {
  const pathBoleano = usePathname();
 
  
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
        <div onClick={LinkHome} className='flex justify-center items-center cursor-pointer'>
          <Image src={Logo} className='h-10 w-10'/>
          <h1 className='font-bold text-2xl'>Dev</h1>
        </div>
        <nav className='items-center hidden justify-center gap-5 ml-5  text-[17px] sm:flex '>
          <div onMouseEnter={HoverNav} onMouseLeave={HoverNav} onClick={LinkHome} className={`cursor-pointer transition-all duration-300 hover:text-green-500 ${pathBoleano === '/' ? 'text-green-500' : ''} `} >
            Home
            <div className='h-1' id='HoverHome'></div>
          </div>
          <div onMouseEnter={HoverNav2} onMouseLeave={HoverNav2} onClick={()=>{LinkAboutMe(pathBoleano)}} className='cursor-pointer transition-all duration-300 hover:text-green-500'>
            About
            <div className='h-1 transition-all duration-300' id='HoverAbout'></div>
          </div>
          <div onMouseEnter={HoverNav3} onMouseLeave={HoverNav3} onClick={()=>{Linkproyect(true)}} 
          className={`cursor-pointer transition-all duration-300 hover:text-green-500 ${pathBoleano === '/proyect' ? 'text-green-500' : ''}`}>
            Proyects
            <div className='h-1' id='HoverProyects'></div>
          </div>
          {/* <div onMouseEnter={HoverNav4} onMouseLeave={HoverNav4} className='cursor-pointer transition-all duration-300 hover:text-green-500'>
            Contacts
            <div className='h-1' id='HoverContact'></div>
          </div> */}
        </nav>
        <div className=''>
          <button onClick={()=>{LinkContact(pathBoleano)}} className=' flex h-10 p-5  border-1 justify-center items-center rounded-2xl shadow-2xl shadow-green-200 bg-green-400 text-white font-bold cursor-pointer hover:opacity-75 '>Contact</button>
        </div>
      </header>
        {children}
        <footer className='flex flex-col ' >
          <section className='flex pb-5 pt-5 gap-5  sm:p-5  justify-around bg-gray-900 flex-wrap'>
            <div className='flex flex-col w-[30%] min-w-80 text-center sm:text-left  gap-2'>
              <h3 className='text-2xl font-bold text-green-500'>Urpirio Junior</h3>
              <span className='text-gray-200'>A Frontend focused Web Developer building the Frontend of Websites
                 and Web Applications that leads to the success of the overall product</span>
            </div>
            <div className='flex flex-col w-[30%] min-w-80 items-center gap-2 '>
              <h3 className='text-2xl font-bold text-green-500'>Social networks</h3>
              <div className='flex gap-5'>
                <i onClick={LinkLinkedin} class='bx bxl-linkedin-square text-4xl text-white cursor-pointer transition-all duration-200 hover:scale-110 hover:text-green-500' ></i>
                <i onClick={LinkInstagram} class='bx bxl-instagram-alt text-4xl text-white cursor-pointer transition-all duration-200 hover:scale-110 hover:text-green-500 ' ></i>
                <i onClick={LinkGithud} class='bx bxl-github text-4xl text-white cursor-pointer transition-all duration-200 hover:scale-110 hover:text-green-500' ></i>
              </div>
            </div>
          </section>
          <section className='flex justify-center items-center text-center p-5 text-white text-xl font-bold border-t-1 bg-gray-900'>
            <span>Copyright © 2025 Urpsoft. Todos los derechos reservados.</span>
          </section>
        </footer>
    </body>
    </html>
  )
}
