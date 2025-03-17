import DataHoverNav from '@/app/Data/DataHoverNav';
import React from 'react';
import HoverNav from '@/app/func/HoverNav';



export default function SubLayout(props) {
  const L = () => {
    return(
      <div onMouseOver={HoverNav} onMouseLeave={HoverNav} className='cursor-pointer transition-all duration-300 hover:text-green-500'>
        {props.Nav}
        <div className='h-2 bg-green-400' id={props.id}></div>
    </div>
    )
  };
  

  const Navlist = DataHoverNav.map( DH => {
    return(
      <L Nav = {DH.Nav} id = {DH.id}/>
    )
  });

  return (
    <nav className='flex items-center justify-center gap-5 ml-10  text-[17px] '>
        {Navlist}
    </nav>
  )
}
