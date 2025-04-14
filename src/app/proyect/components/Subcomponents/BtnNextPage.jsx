'use client';
import { IoIosArrowForward } from "react-icons/io";
import { usePathname } from 'next/navigation';
import DataProyectsPage from '../../Data/DataProyectsPage';


export default function BtnNextPage() {
    const Gpath = usePathname()
    const path = DataProyectsPage[0].LinkPage === Gpath;
    const path2 = DataProyectsPage[0].LinkNextPage === Gpath;   

    const Direction = () => {
        if(path === true){
            window.location.href = '/proyect/page2';
        }else{

        }
    };

  return (
    <div>
         <button onClick={Direction} className={`h-6 w-6 flex justify-center items-center border-1  rounded-xs shadow-xl cursor-pointer transition-all duration-200 hover:opacity-75 
            ${path2 ? 'bg-gray-200 border-gray-200 text-gray-600' : 'bg-green-500 text-white' }`} id='NextProyect'>
            <IoIosArrowForward/>
        </button>
    </div>
  )
}
