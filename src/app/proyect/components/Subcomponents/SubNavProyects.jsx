import { usePathname } from 'next/navigation';
import LinkProyectNav from '../../func/LinkProyectNav';
import DataProyectsPage from '../../Data/DataProyectsPage';

export default function SubNavProyects() {


  const pathBoleano = '/proyect/page2' == usePathname();
  const pathBoleano2 = '/proyect' == usePathname();
  const Path = usePathname();
  
  const ProyectBtns = DataProyectsPage.map(DPP => {

      return(
        <div key={DPP.key} className='flex gap-2'>
          <button onClick={()=>{LinkProyectNav(DPP.LinkPage,DPP.LinkNextPage,Path)}} className={`flex justify-center items-center h-10 w-10 border-1 p-1 rounded-xl  shadow-xs cursor-pointer transition-all duration-200 hover:opacity-75 
          ${pathBoleano2 ? 'bg-green-500 text-white' : 'border-gray-200 bg-gray-100 text-gray-600' }`}>{DPP.Page}</button>

          <button onClick={()=>{LinkProyectNav(DPP.LinkPage,DPP.LinkNextPage,Path)}} className={`flex justify-center items-center h-10 w-10 border-1  p-1 rounded-xl  shadow-xs cursor-pointer transition-all duration-200 hover:opacity-75 
          ${pathBoleano ? 'border-green-500 bg-green-500 text-white' : 'border-gray-200 bg-gray-100 text-gray-600' }`}>{DPP.NextPage}</button>
        </div>
      )
  });

  return(ProyectBtns)

 
};
