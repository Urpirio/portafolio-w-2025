'use client';

import SubTopProyects from './Subcomponents/SubTopProyects';
import Linkproyect from '../func/LinkProyects';

export default function TopProyects() {
    

  return (
    <div className='flex flex-col items-center  gap-10 p-1 sm:p-5 ' >
        <div className='flex flex-wrap justify-center gap-5 w-[90%]'>
        <SubTopProyects/>
        </div>
        <div>
            <button onClick={()=>{Linkproyect(true)}} className='flex justify-center items-center h-10 p-2 border-1 rounded-[10px] font-bold bg-green-500 text-white cursor-pointer transition-all duration-200 hover:translate-y-[-10px] hover:opacity-75'>See more projects</button>
        </div>
        
    </div>
  )
}
