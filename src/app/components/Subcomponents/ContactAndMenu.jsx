

import React from 'react';
import { usePathname } from 'next/navigation';
import LinkContact from '@/app/func/LinkContact';
import BtnMenu from './func/BtnMenu';


export default function ContactAndMenu() {//componente del menu
  
  const pathBoleano = usePathname();

  return (
    <div className=''>
        <button onClick={()=>{LinkContact(pathBoleano)}} className=' hidden sm:flex h-10 p-5  border-1 justify-center items-center rounded-2xl shadow-2xl shadow-green-200 bg-green-400 text-white font-bold cursor-pointer hover:opacity-75 '>Contact</button>
        <button onClick={BtnMenu} className='text-4xl sm:hidden flex'><i className='bx bx-menu' id='IconMenu' ></i></button>
    </div>
  )
}
