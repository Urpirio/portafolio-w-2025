import React from 'react'

export default function Aboutme() {
  return (
    <section className='flex flex-col border-t-1 border-gray-200 justify-center items-center p-5'>
        <div className='flex flex-col items-center gap-2'>
            <h2 className='text-4xl'>About me</h2>
            <div className='h-1.5 w-7 bg-green-400 rounded-2xl'></div>
        </div>
        <div className='flex justify-center items-center'>
            <span className='text-[20px] text-center'>Here you will find more information about me, what I do, and my
             current skills mostly in terms of programming and technology</span>
        </div>
    </section>
  )
}
