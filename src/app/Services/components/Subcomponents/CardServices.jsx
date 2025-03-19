'use client';
import React from 'react';
import DeployForm from './func/DeployForm';


export default function CardServices(props) {
    const deploy = () => {
        DeployForm();
    };

  return (
   <article className=' h-100 w-[25%] min-w-80 flex flex-col items-center justify-center gap-5 p-5 border-1 border-gray-300 rounded-3xl bg-gray-50 shadow-xl' id={props.CardID}>
    <div className='flex flex-col w-[100%] gap-2'>
        <h2 className='m-0 text-3xl text-green-500 font-bold'>{props.ServiceName}</h2>
        <p className='m-0 text-gray-500'>{props.DescriptionService}</p>
    </div>
    <div className='w-[100%]'>
        <span className='text-green-700 text-xl font-bold'>{props.StandarPrice}</span>
    </div>
    <div className='flex flex-col w-[100%] text-2xs text-gray-800' id={props.id_Caracteristicas_Services}>
        
    </div>
    <div className='w-[100%] flex justify-center '>
        <button onClick={deploy} className='h-10 w-[100%] border-1 rounded-2xl text-white bg-green-500'>Get service</button>
    </div>
   </article>
  )
}
