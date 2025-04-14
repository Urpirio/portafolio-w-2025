'use client';
import DataCardServices from '../../Data/DataCardServices';
import DeployForm from './func/DeployForm';


export default function CardServices() {

   const Cards = DataCardServices.map( DCS => {
        return(
            <article key={DCS.key} className=' w-[25%] min-w-80 flex flex-col items-center justify-center gap-5 p-5 border-1 border-gray-300 rounded-3xl bg-gray-50 shadow-xl hover:scale-105 transition-all duration-200' id={DCS.CardID} >
                <div className='flex flex-col w-[100%] gap-2'>
                    <h2 className='m-0 text-3xl text-green-500 font-bold'>{DCS.ServiceName}</h2>
                    <p className='m-0 text-gray-500'>{DCS.DescriptionService}</p>
                </div>
                <div className='w-[100%]'>
                    <span className='text-green-700 text-xl font-bold'>{DCS.StandarPrice}</span>
                </div>
                <div className='flex flex-col justify-center gap-1 w-[100%] text-2xs text-gray-800'>
                    {DCS.Feature.map( F => {
                        return(
                            <span key={F.key}>{F.service}</span>
                        )
                    })}
                </div>
                <div className='w-[100%] flex justify-center items-end flex-grow basis-0 '>
                    <button onClick={DeployForm} className='h-10 w-[100%] border-1 rounded-2xl text-white bg-green-500 hover:opacity-75 cursor-pointer transition-all duration-200'>Get service</button>
                </div>
            </article>
        )
    })

  return (Cards)
}
