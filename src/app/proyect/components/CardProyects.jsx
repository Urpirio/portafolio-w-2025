'use client';
import { usePathname } from 'next/navigation';
import { ProyectsPage1, ProyectsPage2 } from './Subcomponents/SubCardProyect';

export default function CardProyects() {

    const path = '/proyect/page2' == usePathname();

  return (
    <div className='flex flex-col justify-center items-center' id='ContainerProyects'> 
        <div className='hidden justify-center items-center' id='RenderProyects'>
         <span >No results found</span>
        </div>       
        <div className='flex flex-wrap min-h-120 justify-center items-center gap-5'>
          {path ? <ProyectsPage2/> : <ProyectsPage1/>}
        </div>
      </div>
  )
}
