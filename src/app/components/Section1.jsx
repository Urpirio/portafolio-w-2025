'use client';
import React from 'react';
import Image from 'next/image';
import Linkproyect from '../func/LinkProyects';
import PerfilDev from '../../../public/image.png';
import LinkLinkedin from '../func/LinkLinkedin';
import LinkGithud from '../func/LinkGithud';
import LinkInstagram from '../func/LinkInstagram';



export default function Section1() {




  return (
    <section className=' flex flex-col  items-start  gap-10 p-5 sm:p-20 bg-white  relative z-0'>
        <div className='absolute hidden flex-col rounded-2xl border-gray-300 border-1 gap-2 p-1 bg-white shadow-2xl shadow-green-100 sm:flex'>
            <i onClick={LinkLinkedin} className='bx bxl-linkedin-square text-5xl text-green-500 cursor-pointer transition-all duration-300 hover:opacity-75'></i>
            <i onClick={LinkGithud} className='bx bxl-github text-5xl text-green-500 cursor-pointer transition-all duration-300 hover:opacity-75' ></i>
            <i onClick={LinkInstagram} className='bx bxl-instagram-alt text-5xl text-green-500 cursor-pointer transform-all duration-300 hover:opacity-75' ></i>
        </div>
    <div className='w-[100%] flex justify-center items-center'>
        <Image src={PerfilDev} alt='Foto del Desarrollador' className='h-80 min-w-80 w-[100%] max-w-80 rounded-[100%] '/>
    </div>
    <div className='flex flex-col items-center w-[100%] gap-2'>
      <h1 className=' font-extrabold text-4xl sm:text-5xl text-center'>Hey, I'm  Urpirio Junior</h1>
      <p className=' text-xl sm:text-2xl text-gray-600 text-center'>A results-driven Web Developer
      focused on building and optimizing websites and web applications to enhance user experience and drive product success.</p>
    </div>
    <div className='w-[100%] flex justify-center items-center' id='Aboutme'>
      <button onClick={()=>{Linkproyect(false)}} className='bg-green-500 shadow-3xl h-12 w-40 text-white rounded-xl text-[18px] cursor-pointer transition-all duration-300 hover:opacity-75'>Proyects</button>
    </div>
  </section>
  )
}
