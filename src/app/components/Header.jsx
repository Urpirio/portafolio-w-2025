'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Logo from '../../../public/LogoPortafolio.png';
import HoverNav from '../func/HoverNav';
import HoverNav2 from '../func/HoverNav2';
import HoverNav3 from '../func/HoverNav3';
import HoverNav4 from '../func/HoverNav4';
import Linkproyect from '../func/LinkProyects';
import { usePathname } from 'next/navigation';
import LinkAboutMe from '../func/LinkAboutme';
import LinkHome from '../func/LinkHome';
import LinkServices from '../func/LinkServices';
import ContactAndMenu from './Subcomponents/ContactAndMenu';

export default function Header({setDeployMenu,DeployMenu}) {

    const pathBoleano = usePathname();
   
  return (
    <header className='flex justify-center  p-2  bg-white border-1 border-gray-100 shadow-green-50 shadow-2xl sticky  top-[0] z-50' id='Header'>
            <div onClick={LinkHome} className='flex justify-start flex-grow basis-0 items-center cursor-pointer'>
                <Image src={Logo} alt='logo' className='h-10 w-10'/>
                 <h1 className='font-bold text-2xl'>Dev</h1>
            </div>
            <nav className='items-center hidden justify-center gap-5 text-[17px] sm:flex '>
          
                <div onMouseEnter={HoverNav} onMouseLeave={HoverNav} onClick={LinkHome} 
                    className={`cursor-pointer transition-all duration-300 hover:text-green-500 
                    ${pathBoleano === '/' ? 'text-green-500' : ''} `} >
                    Home
                    <div className='h-1 rounded-2xl' id='HoverHome'></div>
                </div>

                <div onMouseEnter={HoverNav2} onMouseLeave={HoverNav2} onClick={()=>{LinkAboutMe(pathBoleano)}} 
                    className='cursor-pointer transition-all duration-300 hover:text-green-500'>
                    About me
                    <div className='h-1 rounded-2xl' id='HoverAbout'></div>
                </div>

                <div onMouseEnter={HoverNav3} onMouseLeave={HoverNav3} onClick={()=>{Linkproyect(true,pathBoleano)}} 
                    className={`cursor-pointer transition-all duration-300 hover:text-green-500 
                    ${pathBoleano === '/proyect' ? 'text-green-500' : 
                    pathBoleano ==='/proyect/page2' ? 'text-green-500' : '' }`}>
                    Proyects
                    <div className='h-1 rounded-2xl' id='HoverProyects'></div>
                </div>

                <div onMouseEnter={HoverNav4} onMouseLeave={HoverNav4} onClick={LinkServices} 
                className={`cursor-pointer transition-all duration-300 hover:text-green-500 
                ${pathBoleano === '/Services' ? 'text-green-500' : '' }`}>
                    Services
                    <div className='h-1 rounded-2xl' id='HoverContact'></div>
                </div>

            </nav>
            <ContactAndMenu setDeployMenu={setDeployMenu} DeployMenu={DeployMenu}/>

            <div className={`${DeployMenu ? 'flex' : 'hidden'} flex-col absolute border-b mt-12 w-full items-center bg-white border-b-gray-300 py-5 px-5 rounded-b-2xl shadow-xl justify-between gap-2`}>
                <div onMouseEnter={HoverNav} onMouseLeave={HoverNav} onClick={LinkHome} 
                    className={`cursor-pointer transition-all duration-300 hover:text-green-500 text-md 
                    ${pathBoleano === '/' ? 'text-green-500 font-semibold' : ''} `} >
                    Home
                    {/* <div className='h-1 rounded-2xl' id='HoverHome'></div> */}
                </div>

                <div onMouseEnter={HoverNav2} onMouseLeave={HoverNav2} onClick={()=>{LinkAboutMe(pathBoleano)}} 
                    className='cursor-pointer transition-all duration-300 hover:text-green-500 text-md '>
                    About me
                    {/* <div className='h-1 rounded-2xl' id='HoverAbout'></div> */}
                </div>

                <div onMouseEnter={HoverNav3} onMouseLeave={HoverNav3} onClick={()=>{Linkproyect(true,pathBoleano)}} 
                    className={`cursor-pointer transition-all duration-300 hover:text-green-500  text-md 
                    ${pathBoleano === '/proyect' ? 'text-green-500 font-semibold' : 
                    pathBoleano ==='/proyect/page2' ? 'text-green-500 font-semibold' : '' }`}>
                    Proyects
                    {/* <div className='h-1 rounded-2xl' id='HoverProyects'></div> */}
                </div>

                <div onMouseEnter={HoverNav4} onMouseLeave={HoverNav4} onClick={LinkServices}  
                className={`cursor-pointer transition-all duration-300 hover:text-green-500 text-md
                ${pathBoleano === '/Services' ? 'text-green-500 font-semibold' : '' }`}>
                    Services
                    {/* <div className='h-1 rounded-2xl' id='HoverContact'></div> */}
                </div>
                <button className="flex h-10 w-full p-5  border-1 justify-center items-center rounded-2xl shadow-2xl shadow-green-200 bg-green-500 text-white font-bold cursor-pointer hover:opacity-75 ">
                    Contact
                </button>
            </div>
      </header>
  )
}
