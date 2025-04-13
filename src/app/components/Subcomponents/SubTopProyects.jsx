'use client';

import Image from 'next/image';
import DataTopProyects from '@/app/Data/DataTopProyects';

export default function SubTopProyects() {

  
  const TopList = DataTopProyects.map(DTP => {

    const LinkProyects = () => {
      window.location.href = DTP.Link;
    };
  
    return(
      <div key={DTP.Key} onClick={LinkProyects} className='flex flex-col justify-center items-center w-100 p-2 gap-3  border-2  border-green-400 rounded-2xl shadow-2xl  cursor-pointer transition-all duration-100 hover:shadow-green-200  hover:scale-105'>
        <Image className='h-50 w-[100%] rounded-xl object-cover ' src={DTP.Img[0].D} alt={DTP.NameP}/>
        <div>
            <h3 className='text-green-950 font-bold'>{DTP.NameP}</h3>
            <span>{DTP.Descripcion}</span>
        </div>
      </div>
    )
  })

  return (TopList)
};
