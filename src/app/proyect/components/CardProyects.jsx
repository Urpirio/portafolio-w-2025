'use client';
import React from 'react';
import DataProyects from '../Data/DataProyects';
import SubCardProyect from './Subcomponents/SubCardProyect';
import { usePathname } from 'next/navigation';
import DataProyects2 from '../Data/DataProyects2';


export default function CardProyects() {

    const path = '/proyect/page2' == usePathname();

    const proyectlist = DataProyects.map( DP => {
        return(
          <SubCardProyect 
          img = {DP.Img[0].D} 
          NameP = {DP.NameP}
          Description = {DP.Descripcion}
          id = {DP.id}
          LinkDeploy = {DP.LinkDeploy}
          LinkGithud = {DP.LinkGithud}
           />
        )
      });

      const proyectlist2 = DataProyects2.map( DP => {
        return(
          <SubCardProyect 
          img = {DP.Img[0].D} 
          NameP = {DP.NameP}
          Description = {DP.Descripcion}
          id = {DP.id}
          LinkDeploy = {DP.LinkDeploy}
          LinkGithud = {DP.LinkGithud}
           />
        )
      });


  return (
    <div className=' flex flex-wrap min-h-100 justify-center items-center gap-5 w-[100%]'> 
                <span className='hidden' id='RenderProyects'>No results found</span>
        {path ? proyectlist2 : proyectlist}
      </div>
  )
}
