import Image from 'next/image';
import LinkGithud from '@/app/func/LinkGithud';
import LinkDeploy from '../../func/LinkProyects/LinkDeploy';
import { IoLogoGithub } from "react-icons/io";
import DataProyects from '../../Data/DataProyects';
import DataProyects2 from '../../Data/DataProyects2';


export const ProyectsPage1 = () => {
  const Proyects = DataProyects.map( DP => {
    return(
      <article key={DP.key}  className='flex flex-col gap-2 shadow-xl border-2 border-gray-300 rounded-xl ' id={DP.id}>
        <div className='w-80 sm:w-[100%] sm:min-w-100'>
            <Image src={DP.Img[0].D} alt={DP.NameP} className='h-40 sm:w-[100%] w-80 sm:h-50 border-b-1 border-gray-200 rounded-t-xl object-cover'/>
        </div>
        <div className='p-2'>
          <h2 className='font-bold'>{DP.NameP}</h2>
          <p className='text-[14px] text-gray-500'>{DP.Descripcion}</p>
         </div>
        <div className='w-[100%]  p-2 flex justify-center gap-2'>
          <button name='See a proyect' onClick={()=>{LinkDeploy(DP.LinkDeploy)}} className=' h-10 w-[85%] border-1 rounded-xl bg-green-500 text-white shadow-2xs cursor-pointer transition-all duration-200 hover:opacity-75'>See project</button>
          <button name='Go to My GitHud' onClick={()=>{LinkGithud(DP.LinkGithud)}} className='flex justify-center items-center h-10 w-[15%] border-1 rounded-xl bg-gray-900 text-white shadow-2xs cursor-pointer text-2xl transition-all duration-200 hover:opacity-75'><IoLogoGithub/></button>
        </div>
    </article>
    )
  })

  return(Proyects)
} 

export const ProyectsPage2 = () => {
  const Proyects = DataProyects2.map( DP => {
    return(
      <article key={DP.key} className='flex flex-col gap-2 shadow-xl border-2 border-gray-300 rounded-xl ' id={DP.id}>
        <div className='w-80 sm:w-[100%] sm:min-w-100'>
            <Image src={DP.Img[0].D} alt={DP.NameP} className='h-40 sm:w-[100%] w-80 sm:h-50 border-b-1 border-gray-200 rounded-t-xl object-cover'/>
        </div>
        <div className='p-2'>
          <h2 className='font-bold'>{DP.NameP}</h2>
          <p className='text-[14px] text-gray-500'>{DP.Descripcion}</p>
         </div>
        <div className='w-[100%]  p-2 flex justify-center gap-2'>
          <button name='See project' onClick={()=>{LinkDeploy(DP.LinkDeploy)}} className=' h-10 w-[85%] border-1 rounded-xl bg-green-500 text-white shadow-2xs cursor-pointer transition-all duration-200 hover:opacity-75'>See project</button>
          <button name={'Go to My GitHud'} onClick={()=>{LinkGithud(DP.LinkGithud)}} className='flex justify-center items-center h-10 w-[15%] border-1 rounded-xl bg-gray-900 text-white shadow-2xs cursor-pointer text-2xl transition-all duration-200 hover:opacity-75'><IoLogoGithub/></button>
        </div>
    </article>
    )
  })

  return(Proyects)
} 
