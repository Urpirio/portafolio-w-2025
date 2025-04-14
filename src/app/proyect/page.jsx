import React from 'react';
import NavProyects from './components/NavProyects';
import CardProyects from './components/CardProyects';
import SearchProyects from './components/SearchProyects';

export default function Proyects() {

  return (
    <section className='flex flex-col flex-wrap  gap-5 justify-center items-center'>
      <div className='flex flex-col justify-center items-center gap-2 text-4xl font-semibold sm:hidden'>
        <h1>Proyects</h1>
        <div className='h-2 w-5 bg-green-500 rounded-2xl '></div>
      </div>
     <SearchProyects/>
     <CardProyects/>
     <NavProyects/>
    </section>
  )
}
