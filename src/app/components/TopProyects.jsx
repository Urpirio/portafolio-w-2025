import React from 'react';
import SubTopProyects from './Subcomponents/SubTopProyects';
import DataTopProyects from '../Data/DataTopProyects';

export default function TopProyects() {
    const TopListProyects = DataTopProyects.map(DTP => {
        return(
            <SubTopProyects
            Image = {DTP.Img[0].D}
            NameP = {DTP.NameP}
            description = {DTP.Descripcion}
            />
        )
    });

  return (
    <div className='flex flex-wrap justify-center gap-5 p-10'>
        {TopListProyects}
    </div>
  )
}
