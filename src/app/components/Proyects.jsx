import React from 'react'

export default function Proyects() {
  return (
    <section className='flex flex-col items-center p-10'>
        <div className='flex flex-col items-center gap-3 '>
            <h2 className=' text-4xl'>Proyects</h2>
            <div className='h-1.5  bg-green-400 w-7 rounded-2xl'></div>
        </div>
        <div className='flex items-center justify-center'>
            <span className='text-[20px] text-center'>
            Here you will find some of the personal and clients
            projects that I created with each project containing its own case study
            </span>
        </div>
    </section>
  )
}
