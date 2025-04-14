'use client';
import '../styles/Globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Deploymenu } from './components/Subcomponents/func/Deploymenu';


export default function Layout({children}) {
 
  return (

    <html lang="en">
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="I’m Urpirio Junior Moreno Vargas, a Full Stack Developer with 
        over a year of experience in web development. I use technologies like React, Node.js, and MySQL
        to build scalable, efficient applications with great user experiences. Explore my projects and 
        get in touch to collaborate." />
        <title>UrpirioDev</title>
    </head>
    <body onTouchMove={()=>{Deploymenu(false)}} >
      <Header/>
        {children}
      <Footer/>
    </body>
    </html>
  )
}
