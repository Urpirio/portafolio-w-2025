import React from 'react';
import Image from 'next/image';

export default function Cproyects(props) {
  return (
    <article className='flex flex-col gap-2 shadow-xl border-2 border-gray-300 rounded-xl' id={props.id}>
        <div className=''>
            <Image src={props.img} className='h-50 w-100 border-b-1 border-gray-200 rounded-t-xl'/>
        </div>
        <div className='p-4'>
            <h2 className='font-bold'>{props.NameP}</h2>
            <p className='text-[14px] text-gray-500'>{props.Description}</p>
        </div>
        <div className='w-[100%]  p-2 flex justify-center'>
            <button className=' h-10 w-[100%] border-1 rounded-xl bg-green-500 text-white shadow-2xs cursor-pointer'>See more</button>
        </div>
    </article>
  )
}
