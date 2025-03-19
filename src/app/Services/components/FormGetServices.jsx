'use client';

import React from 'react';
import SelectServices from '../func/SelectServices';
import OffSelectServices from '../func/OffSelectServices';
import MouseOverSelectServices from '../func/MouseOverSelectServices';
import OffDeployForm from './Subcomponents/func/OffDeployForm';
import SendForm from '../func/SendForm';
// import MouseLeaveSelectServices from '../func/MouseLeaveSelectServices';

export default function FormGetServices() {

  return (
    <div onClick={OffSelectServices}  className='hidden flex-col items-center justify-center backdrop-blur-xs shadow-2xl absolute  h-[100%] w-[100%] ' id='FormGetServices'>

          <form onMouseEnter={MouseOverSelectServices} onMouseLeave={MouseOverSelectServices} onSubmit={(e)=>{SendForm(e)}}  action="" className='flex flex-col gap-5  border-3 rounded-2xl bg-white border-green-500 p-5 min-w-80 w-[25%] '>
            
            <div>
              <h2 className='text-3xl text-green-800 font-bold'>Get the service</h2>
            </div>

            <div className='flex flex-col'>
              <label htmlFor="">Name</label>
              <input className='border-1 border-gray-400 rounded-md outline-none h-10 p-2 ' type="text" name="" id="NameF" placeholder='Your name' required/>
            </div>

            <div className='flex flex-col'>
              <label htmlFor="">Email</label>
              <input className='border-1 border-gray-400 rounded-md outline-none h-10 p-2' type="text" name="" id="EmailF" placeholder='Your Email' required/>
            </div>

            <div className='flex flex-col'>
              <label htmlFor="">Phone number</label>
              <input className='border-1 border-gray-400 rounded-md outline-none h-10 p-2' type="text" name="" id="PnumberF" placeholder='Your phone number' required/>
            </div>

            <div className='flex flex-col'>
              <label htmlFor="">Company</label>
              <input className='border-1 border-gray-400 rounded-md outline-none h-10 p-2' type="text" name="" id="CompanyF" placeholder='Name of your company' required/>
            </div>

            <div className='flex flex-col relative'>{/*Select services */}

              <div onClick={SelectServices} className='flex justify-between items-center p-1.5 border-1 border-gray-400 rounded-md bg-white shadow-xs text-sx font-bold text-gray-800'>
                <span id='selection' >Select a service</span><i className='bx bx-chevron-right text-3xl transition-all duration-200' id='ArrowSelect'></i>
              </div>
              <div className='hidden flex-col gap-1 absolute mt-11 border-1 border-gray-400 rounded-md bg-white w-[100%]' id='selectServices'>
                
              </div>

            </div>

            <div className='flex flex-col'>
              <label htmlFor="">Message</label>
              <textarea className='border-1 border-gray-400 rounded-md outline-none p-2 resize-none' name="" id="AboutProyect" placeholder='Tell me about your proyect...' required></textarea>
            </div>

            <div className='w-[100%] flex flex-col gap-2 items-center justify-between'>
              <button className='border-1 rounded-xl bg-green-500 shadow-xs p-1 text-white font-semibold w-50'>Send</button>
              <button onClick={OffDeployForm} className='border-1 border-gray-300 rounded-xl bg-gray-200 shadow-xs p-1 text-gray-600 font-semibold w-30'>Cancel</button>
            </div>
            
          </form>
        </div>
  )
};
