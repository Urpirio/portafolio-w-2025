
import React from 'react';
import SearchProyects from '../components/SearchProyects';
import CardProyects from '../components/CardProyects';
import NavProyects from '../components/NavProyects';

export default function page() {
  return (
    <section className='flex flex-wrap p-10 gap-5 justify-center items-center'>
        <SearchProyects/>
        <CardProyects/>
        <NavProyects/>
    </section>
  )
}
