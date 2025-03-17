import React from 'react';
import Section1 from './components/Section1';
import Aboutme from './components/Aboutme';
import AboutmeP2 from './components/AboutmeP2';
import Proyects from './components/Proyects';
import TopProyects from './components/TopProyects';

export default function HomePage() {
  return (
   <main>
    <Section1/>
    <Aboutme/>
    <AboutmeP2/>
    <Proyects/>
    <TopProyects/>
   </main>
  )
}
