import React from 'react';
import NavProyects from './components/NavProyects';
import CardProyects from './components/CardProyects';
import SearchProyects from './components/SearchProyects';

export default function Proyects() {

  return (
    <section className='flex flex-wrap p-10 gap-5 justify-center items-center'>
     <SearchProyects/>
     <CardProyects/>
     <NavProyects/>
    </section>
  )
}
