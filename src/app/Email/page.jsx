'use client'
import React from 'react';
// import Send from './func/Send';
import { Send } from './func/Send';

export default function page() {
  return (
    <div className='h-dvh'>

        <button onClick={Send} className='bg-green-400 cursor-pointer p-2 rounded-2xl text-white'>Prueba</button>
    </div>
  )
}
