'use client';

import React from 'react';
import Image from 'next/image';
import Logo from '../../../public/LogoPortafolio.png';
import HoverNav from '../func/HoverNav';
import HoverNav2 from '../func/HoverNav2';
import HoverNav3 from '../func/HoverNav3';
import HoverNav4 from '../func/HoverNav4';
import LinkLinkedin from '../func/LinkLinkedin';
import LinkInstagram from '../func/LinkInstagram';
import LinkGithud from '../func/LinkGithud';
import Linkproyect from '../func/LinkProyects';
import { usePathname } from 'next/navigation';
import LinkAboutMe from '../func/LinkAboutme';
import LinkContact from '../func/LinkContact';
import LinkHome from '../func/LinkHome';
import LinkServices from '../func/LinkServices';
import ChargeDescription from '../Services/func/ChargeDescription';
import ContactAndMenu from './Subcomponents/ContactAndMenu';

export default function Header() {

    const pathBoleano = usePathname();

  return (
    <header className='flex flex-col justify-center  p-2  bg-white border-1 border-gray-100 shadow-green-50 shadow-2xl sticky  top-[0] z-3' id='Header'>
        <div className='flex items-center justify-between w-[100%]'>
            <div onClick={LinkHome} className='flex justify-center items-center cursor-pointer'>
                <Image src={Logo} alt='logo' className='h-10 w-10'/>
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

                <div onMouseEnter={HoverNav4} onMouseLeave={HoverNav4} onClick={LinkServices} className={`cursor-pointer transition-all duration-300 hover:text-green-500 ${pathBoleano === '/Services' ? 'text-green-500' : '' }`}>
                    Services
                    <div className='h-1' id='HoverContact'></div>
                </div>

            </nav>
            <ContactAndMenu/>
        </div>
        
      </header>
  )
}
