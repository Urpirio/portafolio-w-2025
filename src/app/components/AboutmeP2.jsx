import React from 'react';
import SubAboutmeP2 from './Subcomponents/subAboutmeP2';
import DataAboutme from '../Data/DataAboutme';
import LinkContact from '../func/LinkContact';

export default function AboutmeP2() {

    const Skill_List = DataAboutme.map( DA =>{
        return(
            <SubAboutmeP2 Typebtn = {DA.Type}/>
        );
    })

  return (
    <section className='flex flex-wrap  sm:justify-around  ' >
        <div className='flex flex-col  min-w-90 w-[40%] max-w-180 p-5 '>
            <div className='mb-5'>
                <h2 className='font-bold text-2xl m-0'>Get to Know me!</h2>
            </div>
            <div className=''>
                <p className='text-[16px] mb-5 '>I'm a Full Stack Developer with over a year of experience building
                modern and scalable web applications. I work with technologies like React, Next.js, JavaScript, 
                Tailwind, and Sass to create intuitive, fast, and responsive interfaces.
                </p>
                <p className='text-[16px] mb-5'>
                On the backend, I use Node.js and MySQL to manage servers, databases, and API integrations, ensuring
                efficient and secure performance. My focus is on building complete applications that deliver a great
                user experience.
                </p>
                <p className='text-[16px] mb-5'>
                I'm always learning and sharing knowledge with the tech community. Passionate about developing 
                innovative and optimized solutions. If you're looking for a versatile and dedicated developer,
                let's connect! 🚀
                </p>
            </div>
            <div>
                <button onClick={LinkContact} className='flex items-center justify-center h-10 border-1 w-50 rounded-xl bg-green-500 text-white font-bold shadow-2xl transition-all duration-300 cursor-pointer hover:opacity-80'>Get in Touch!</button>
            </div>
        </div>
        <div className=' flex flex-col items-center min-w-90 w-[40%] max-w-180  p-5 gap-[22]'>
            <div className='w-[100%]'>
                <h2 className='font-bold text-2xl m-0' >My Skills</h2>
            </div>
            <div className='flex flex-wrap items-center gap-2 w-[100%]'>
                {Skill_List}
            </div>
        </div>
    </section>
  )
}
