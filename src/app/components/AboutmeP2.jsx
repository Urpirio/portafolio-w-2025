import React from 'react';
import SubAboutmeP2 from './Subcomponents/subAboutmeP2';
import DataAboutme from '../Data/DataAboutme';

export default function AboutmeP2() {

    const Skill_List = DataAboutme.map( DA =>{
        return(
            <SubAboutmeP2 Typebtn = {DA.Type}/>
        );
    })

  return (
    <section className='flex flex-wrap  sm:justify-around  '>
        <div className='flex flex-col  min-w-90 w-[40%] max-w-180 p-5 '>
            <div className='mb-5'>
                <h2 className='font-bold text-2xl m-0'>Get to Know me!</h2>
            </div>
            <div className=''>
                <p className='text-[16px] mb-5 '>I'm a Frontend Focused Web Developer building and managing
                    the Front-end of Websites and Web Applications that leads
                    to the success of the overall product. Check out some of my
                    work in the Projects section.</p>
                <p className='text-[16px] mb-5'>
                I also like sharing content related to the stuff that I have learned over the years
                 in Web Development so it can help other people of the Dev Community. Feel free to
                  Connect or Follow me on my <a href="" className='text-green-400 hover:border-b-1'>Linkedin</a> and <a href="" className='text-green-400 hover:border-b-1'>Instagram </a> 
                  where I post useful content related to Web Development and Programming.
                </p>
                <p className='text-[16px] mb-5'>
                 I'm open to Job opportunities where I can contribute, learn and grow. If you have
                 a good opportunity that matches my skills and experience then don't hesitate to contact me.
                </p>
            </div>
            <div>
                <button className='flex items-center justify-center h-10 border-1 w-50 rounded-sm bg-green-500 text-white font-bold shadow-2xl transition-all duration-300 cursor-pointer hover:opacity-80'>Contact</button>
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
