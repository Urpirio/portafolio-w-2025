

import React from 'react';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Deploymenu from './func/Deploymenu';

export default function ContactAndMenu() {
    const pathBoleano = usePathname();
    const [ ChangeClass, SetChangeClass] = useState(false);

    const DeployMenu = () => {
        SetChangeClass(!ChangeClass);
        Deploymenu(ChangeClass);
    };

  return (
    <div className=''>
        <button onClick={()=>{LinkContact(pathBoleano)}} className=' hidden sm:flex h-10 p-5  border-1 justify-center items-center rounded-2xl shadow-2xl shadow-green-200 bg-green-400 text-white font-bold cursor-pointer hover:opacity-75 '>Contact</button>
        <button onClick={DeployMenu} className='text-4xl sm:hidden flex'><i className={ ChangeClass ? 'bx bx-x' : 'bx bx-menu' } ></i></button>
    </div>
  )
}
