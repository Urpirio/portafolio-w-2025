'use client';
import React from 'react';
import '../styles/Globals.css';
import Logo from '../../public/LogoPortafolio.png';
import LinkLinkedin from './func/LinkLinkedin';
import LinkInstagram from './func/LinkInstagram';
import LinkGithud from './func/LinkGithud';
import { usePathname } from 'next/navigation';
import ChargeDescription from './Services/func/ChargeDescription';
import Header from './components/Header';
import Footer from './components/Footer';



export default function Layout({children}) {
  const pathBoleano = usePathname();
 
  
  return (

    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="I’m Urpirio Junior Moreno Vargas, a Full Stack Developer with 
        over a year of experience in web development. I use technologies like React, Node.js, and MySQL
        to build scalable, efficient applications with great user experiences. Explore my projects and 
        get in touch to collaborate." />
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
        <link rel="shortcut icon" href={Logo} type="image/x-icon" />
        <title>UrpirioDev</title>
    </head>
    <body onLoad={pathBoleano === '/Services' ? ChargeDescription : console.log('no es servicios') }>
      <Header/>
        {children}
      <Footer/>
    </body>
    </html>
  )
}
