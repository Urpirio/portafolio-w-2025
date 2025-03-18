'use client';

import React from 'react';
import Image from 'next/image';

export default function SubTopProyects(props) {

  const LinkProyects = () => {
    window.location.href = props.link;
  };


  return (
    <div onClick={LinkProyects} className='flex flex-col justify-center items-center w-100 p-2 gap-3  border-2  border-green-400 rounded-2xl shadow-2xl  cursor-pointer transition-all duration-100 hover:shadow-green-200  hover:scale-105'>
        <Image className='h-50 w-[100%] rounded-[12px]' src={props.Image} alt={props.NameP}/>
        <div>
            <h3 className='text-green-950 font-bold'>{props.NameP}</h3>
            <span>{props.description}</span>
        </div>
    </div>
  )
}
