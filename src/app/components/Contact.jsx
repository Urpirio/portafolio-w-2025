'use client';

import React from 'react';
import LinkMyContact from '../func/LinkMyContact';

export default function Contact() {
  return (
    <section className='flex flex-col gap-10 p-10' id='Contact'>
        <div className='flex flex-col items-center justify-center'>
            <div className='flex flex-col items-center gap-2'>
                <h2 className='text-4xl'>Contact</h2>
                <div className='h-1.5 w-7 bg-green-500 rounded-2xl'></div>
            </div>
            <div>
                <span className='flex text-[20px] text-center'>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</span>
            </div>
        </div>
        <div className='flex flex-wrap justify-center items-center sm:justify-around w-[100%] gap-10'>
            <form action="" className='flex flex-col w-[30%] min-w-80  gap-2 p-10 border-2 border-green-500  shadow-xl rounded-2xl'>
                <div>
                    <h2 className='text-[25px] font-semibold text-green-900'>Send me a message</h2>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="">Name</label>
                    <input className='h-10 p-1 outline-none border-1 border-gray-400 rounded-md' type="text" placeholder='Your name' required/>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="">Email</label>
                    <input className='h-10 p-1 outline-none border-1 border-gray-400 rounded-md' type="email" placeholder='Your email' required/>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="">Phone number</label>
                    <input className='h-10 p-1 outline-none border-1 border-gray-400 rounded-md' type="number" placeholder='Your number' required/>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="">Company</label>
                    <input className='h-10 p-1 outline-none border-1 border-gray-400 rounded-md' type="text" placeholder='Name of your company' required/>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="">Message</label>
                    <textarea className='h-20 p-1 outline-none border-1 resize-none border-gray-400 rounded-md' name="" id="" placeholder='Tell me about your project...' required></textarea>
                </div>
                <div>
                    <button className=' w-30 text-[18px] text-white font-bold border-1  p-1 rounded-md bg-green-500 cursor-pointer hover:opacity-75' type='submit'>Send</button>
                </div>
            </form>
            <div className='flex flex-col justify-center border-2 border-green-500 shadow-2xl bg-white rounded-2xl p-5 gap-10'>
                <div onClick={()=>{LinkMyContact(false)}} className='flex flex-col items-center transition-all duration-200 cursor-pointer hover:scale-110'>
                    <i className='bx bxl-whatsapp  text-5xl text-white rounded-[100%] h-14 w-14 bg-green-400' style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}></i>
                    <span  className=' text-[18px] text-green-500 font-semibold'>+1(829)-586-2316</span>
                </div>
                <div onClick={()=>{LinkMyContact(true)}} className='flex flex-col items-center transition-all duration-200 cursor-pointer hover:scale-110'>
                    <i className='bx bxs-envelope text-green-500 text-5xl' ></i>
                    <span  className='text-green-500 text-[18px] font-semibold'>Urpiriojunior@gmail.com</span>
                </div>
            </div>
        </div>
    </section>
  )
}
