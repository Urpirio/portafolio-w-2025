import React from 'react';
import DataProyects from './Data/DataProyects';
import Cproyects from './components/Cproyects';
import Search from './func/Search';

export default function Proyects() {

  const proyectlist = DataProyects.map( DP => {
    return(
      <Cproyects 
      img = {DP.Img[0].D} 
      NameP = {DP.NameP}
      Description = {DP.Descripcion}
      id = {DP.id}
       />
    )
  });

 

  return (
    <section className='flex flex-wrap p-10 gap-5 justify-center items-center'>
      <div className='w-[100%] flex justify-center'>
        <span className='flex items-center justify-center border-1 border-gray-400 rounded-2xl h-10 w-[50%]  min-w-80 gap-1 '>
          <i className='bx bx-search text-2xl text-gray-400' ></i>
          <input onInput={Search} id="Search1" className='w-[90%] h-[100%]  pl-2 pr-2 outline-none ' type="text" name=""  placeholder='Search proyect'/>
          <i className='bx bx-x text-2xl' style={{display: 'none'}}></i>
        </span>
      </div>
      <div className=' flex flex-wrap min-h-100 justify-center items-center gap-5 w-[100%]'> 
                <span className='hidden' id='RenderProyects'>No results found</span>
        {proyectlist}
      </div>
    </section>
  )
}
