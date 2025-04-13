'use client'
import { TfiMenu } from "react-icons/tfi";
import { IoMdClose } from "react-icons/io";
import { usePathname } from 'next/navigation';
import LinkContact from '@/app/func/LinkContact';
import { Deploymenu } from "./func/Deploymenu";
import { IsDeployMovilMenu } from "./func/Deploymenu";
import { useEffect, useState } from "react";




export default function ContactAndMenu() {//componente del menu

  const [Prueba,setPrueba] = useState(<TfiMenu/>)
  const pathBoleano = usePathname();

  useEffect(()=>{
    if(IsDeployMovilMenu[0].Boolean === false){
      setPrueba(<TfiMenu/>)
    }else{
      setPrueba(<IoMdClose/>)
    }
  })

  return (
    <div className='flex flex-grow basis-0 justify-end' >
        <button onClick={()=>{LinkContact(pathBoleano)}} className=' hidden sm:flex h-10 p-5  border-1 justify-center items-center rounded-2xl shadow-2xl shadow-green-200 bg-green-400 text-white font-bold cursor-pointer hover:opacity-75 '>Contact</button>
        <button onClick={Deploymenu} className='text-4xl sm:hidden flex' id='MenuNav'>
          {Prueba}
        </button>
    </div>
  )
}
