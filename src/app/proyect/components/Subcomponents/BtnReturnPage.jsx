'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import DataProyectsPage from '../../Data/DataProyectsPage';

export default function BtnReturnPage() {

    const Gpath = usePathname();
    const path = DataProyectsPage[0].LinkPage === Gpath;
    const path2 = DataProyectsPage[0].LinkNextPage === Gpath;

    const Direction = () => {
        if(path === false){
            window.location.href = DataProyectsPage[0].LinkPage;
        }else{
            
        }
    };

  return (
    <div>
        <button onClick={Direction}  className={`h-6 w-6 flex justify-center items-center border-1 rounded-sm cursor-pointer transition-all duration-200 hover:opacity-75
            ${path ? 'border-gray-200 rounded-xs bg-gray-200 text-gray-600' : 'bg-green-500 text-white'}`} id='ReturnPastProyects'>
                <i className='bx bx-chevron-left' ></i>
        </button>
    </div>
  )
}
