import React from 'react';
import SubTopProyects from './Subcomponents/SubTopProyects';
import DataTopProyects from '../Data/DataTopProyects';

export default function TopProyects() {
    const TopListProyects = DataTopProyects.map(DTP => {
        return(
            <SubTopProyects
            Image = {DTP.Img[0].D}
            NameP = {DTP.NameP}
            description = {DTP.Descripcion}
            />
        )
    });

  return (
    <div className='flex flex-col items-center  gap-10 p-5'>
        <div className='flex flex-wrap justify-center gap-5 w-[90%]'>
        {TopListProyects}
        </div>
        <div>
            <button className='flex justify-center items-center h-10 p-2 border-1 rounded-[10px] font-bold bg-green-500 text-white cursor-pointer transition-all duration-200 hover:translate-y-[-10px] hover:opacity-75'>See more projects</button>
        </div>
        
    </div>
  )
}
