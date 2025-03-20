import React from 'react';
import { usePathname } from 'next/navigation';
import LinkProyectNav from '../../func/LinkProyectNav';

export default function SubNavProyects(props) {

    const pathBoleano = '/proyect/page2' == usePathname();
    const pathBoleano2 = '/proyect' == usePathname();

  return (
    <div className='flex gap-2'>
        <button onClick={()=>{LinkProyectNav(props.LinkPage,props.LinkNextPage,props.path)}} className={`flex justify-center items-center h-10 w-10 border-1 p-1 rounded-xl  shadow-xs cursor-pointer transition-all duration-200 hover:opacity-75 
        ${pathBoleano2 ? 'bg-green-500 text-white' : 'border-gray-200 bg-gray-100 text-gray-600' }`}>{props.Page}</button>

        <button onClick={()=>{LinkProyectNav(props.LinkPage,props.LinkNextPage,props.path)}} className={`flex justify-center items-center h-10 w-10 border-1  p-1 rounded-xl  shadow-xs cursor-pointer transition-all duration-200 hover:opacity-75 
        ${pathBoleano ? 'border-green-500 bg-green-500 text-white' : 'border-gray-200 bg-gray-100 text-gray-600' }`}>{props.NextPage}</button>
    </div>
  )
}
