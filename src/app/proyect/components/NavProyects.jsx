'use client';
import BtnNextPage from './Subcomponents/BtnNextPage';
import BtnReturnPage from './Subcomponents/BtnReturnPage';
import SubNavProyects from './Subcomponents/SubNavProyects';


export let IsPageTwo;
export default function NavProyects() {






  return (
    <div className='flex items-center gap-5'>
       <BtnReturnPage/>
       <SubNavProyects/>
       <BtnNextPage/>
  </div>
  )
}
