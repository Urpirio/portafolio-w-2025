'use client';
import { usePathname } from 'next/navigation';
import { ProyectsPage1, ProyectsPage2 } from './Subcomponents/SubCardProyect';

export default function CardProyects() {

    const path = '/proyect/page2' == usePathname();

  return (
    <div className=' flex flex-wrap min-h-120 justify-center items-center gap-5'> 
                <span className='hidden' id='RenderProyects'>No results found</span>
        {path ? <ProyectsPage2/> : <ProyectsPage1/>}
      </div>
  )
}
