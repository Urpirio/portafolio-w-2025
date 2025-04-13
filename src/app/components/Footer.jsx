import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoGithub } from "react-icons/io";
import LinkLinkedin from '../func/LinkLinkedin';
import LinkInstagram from '../func/LinkInstagram';
import LinkGithud from '../func/LinkGithud';

export default function Footer() {
  return (
    <footer className='flex flex-col ' >
          <section className='flex pb-5 pt-5 gap-5  sm:p-5  justify-around bg-gray-900 flex-wrap'>
            <div className='flex flex-col w-[30%] min-w-80 text-center sm:text-left  gap-2'>
              <h3 className='text-2xl font-bold text-green-500'>Urpirio Junior</h3>
              <span className='text-gray-200'>A Frontend focused Web Developer building the Frontend of Websites
                 and Web Applications that leads to the success of the overall product</span>
            </div>
            <div className='flex flex-col w-[30%] min-w-80 items-center gap-2 '>
              <h3 className='text-2xl font-bold text-green-500'>Social networks</h3>
              <div className='flex gap-5'>
                <FaLinkedin onClick={LinkLinkedin} className='text-4xl text-white cursor-pointer transition-all duration-200 hover:scale-110 hover:text-green-500'/>
                <RiInstagramFill  onClick={LinkInstagram} className="text-4xl text-white cursor-pointer transition-all duration-200 hover:scale-110 hover:text-green-500" />
                <IoLogoGithub onClick={LinkGithud} className='text-4xl text-white cursor-pointer transition-all duration-200 hover:scale-110 hover:text-green-500'/>
              </div>
            </div>
          </section>
          <section className='flex justify-center items-center text-center p-5 text-white text-xl font-bold border-t-1 bg-gray-900'>
            <span>Copyright © 2025 Urpsoft. Todos los derechos reservados.</span>
          </section>
    </footer>
  )
}
