import React from 'react';
import DataCardServices from '../Data/DataCardServices';
import CardServices from './Subcomponents/CardServices';


export default function ContainerCardServices() {

    const Cardlist = DataCardServices.map(DCS => {
        return(
          <CardServices
          ServiceName = {DCS.ServiceName}
          DescriptionService = {DCS.DescriptionService}
          StandarPrice = {DCS.StandarPrice}
          id_Caracteristicas_Services = {DCS.id_Caracteristicas_Services}
          CardID = {DCS.CardID}
          />
        )
      });
  return (
    <div className='flex justify-center items-center flex-wrap gap-10 '>
        {Cardlist}
    </div>
  )
}
