'use client';

import React from 'react';
import DataCardServices from './Data/DataCardServices';
import CardServices from './components/CardServices';

export default function Services() {

  const Cardlist = DataCardServices.map(DCS => {
    return(
      <CardServices
      ServiceName = {DCS.ServiceName}
      DescriptionService = {DCS.DescriptionService}
      StandarPrice = {DCS.StandarPrice}
      id_Caracteristicas_Services = {DCS.id_Caracteristicas_Services}
      
      />
    )
  });
  
  

  return (
    <section className='flex justify-center p-20'>
        <div>
            
        </div>
        <div className='flex justify-center items-center flex-wrap gap-10 '>
          {Cardlist}
        </div>
    </section>
  )
}
