'use client';
import React from 'react';
import ContainerCardServices from './components/ContainerCardServices';
import FormGetServices from './components/FormGetServices';

export default function Services() {

  
  
  

  return (
    <section className='flex flex-col justify-center relative items-center p-10 sm:p-30' id='PageServices'>
       
      
        <FormGetServices/>
        <ContainerCardServices/>
    </section>
  )
}
