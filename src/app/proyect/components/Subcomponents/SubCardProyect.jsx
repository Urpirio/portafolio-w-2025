import React from 'react';
import Image from 'next/image';
import LinkGithud from '@/app/func/LinkGithud';
import LinkDeploy from '../../func/LinkProyects/LinkDeploy';

export default function SubCardProyect(props) {
  return (
    <article className='flex flex-col gap-2 shadow-xl border-2 border-gray-300 rounded-xl' id={props.id}>
        <div className=''>
            <Image src={props.img} className='h-40 w-[100%] sm:w-100 sm:h-50 border-b-1 border-gray-200 rounded-t-xl'/>
        </div>
        <div className='p-2'>
            <h2 className='font-bold'>{props.NameP}</h2>
            <p className='text-[14px] text-gray-500'>{props.Description}</p>
        </div>
        <div className='w-[100%]  p-2 flex justify-center gap-2'>
            <button onClick={()=>{LinkDeploy(props.LinkDeploy)}} className=' h-10 w-[85%] border-1 rounded-xl bg-green-500 text-white shadow-2xs cursor-pointer transition-all duration-200 hover:opacity-75'>See project</button>
            <button onClick={()=>{LinkGithud(props.LinkGithud)}} className='h-10 w-[15%] border-1 rounded-xl bg-gray-900 text-white shadow-2xs cursor-pointer text-2xl transition-all duration-200 hover:opacity-75'><i class='bx bxl-github'></i></button>
        </div>
    </article>
  )
}
