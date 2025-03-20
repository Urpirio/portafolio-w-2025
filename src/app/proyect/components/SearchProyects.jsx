import React from 'react';
import Search from '../func/Search';

export default function SearchProyects() {
  return (
    <div className='w-[100%] flex justify-center'>
        <span className='flex items-center justify-center border-1 border-gray-400 rounded-2xl h-10 w-[50%]  min-w-80 gap-1 '>
          <i className='bx bx-search text-2xl text-gray-400' ></i>
          <input onInput={Search} id="Search1" className='w-[90%] h-[100%]  pl-2 pr-2 outline-none ' type="text" name=""  placeholder='Search proyect'/>
          <i className='bx bx-x text-2xl' style={{display: 'none'}}></i>
        </span>
    </div>
  )
}
