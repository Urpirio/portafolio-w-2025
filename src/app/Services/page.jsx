'use client';
import React from 'react';
import ContainerCardServices from './components/ContainerCardServices';
import FormGetServices from './components/FormGetServices';
import NamePage from './components/NamePage';

export default function Services() {

  
  
  

  return (
    <section className='flex flex-col justify-center relative items-center p-2 sm:p-30' id='PageServices'>
        <NamePage/>   
        <FormGetServices/>
        <ContainerCardServices/>
    </section>
  )
}
