'use client';
import '../styles/Globals.css';
import Logo from '../../public/LogoPortafolio.png';
import Header from './components/Header';
import Footer from './components/Footer';



export default function Layout({children}) {
 
  return (

    <html lang="en">
    <head>
        {/* <meta charset="UTF-8" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="I’m Urpirio Junior Moreno Vargas, a Full Stack Developer with 
        over a year of experience in web development. I use technologies like React, Node.js, and MySQL
        to build scalable, efficient applications with great user experiences. Explore my projects and 
        get in touch to collaborate." />
        <title>UrpirioDev</title>
    </head>
    <body>
      <Header/>
        {children}
      <Footer/>
    </body>
    </html>
  )
}
