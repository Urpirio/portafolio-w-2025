"use client";
import "../styles/Globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";

export default function Layout({ children }) {

  const [DeployMenu,setDeployMenu] = useState(false);


  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="I’m Urpirio Junior Moreno Vargas, a Full Stack Developer with 
        over a year of experience in web development. I use technologies like React, Node.js, and MySQL
        to build scalable, efficient applications with great user experiences. Explore my projects and 
        get in touch to collaborate."
        />
        <title>UrpirioDev</title>
        <link
          rel="shortcut icon"
          href="https://www.urpiriodev.online/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogoPortafolio.11f8eaae.png&w=1920&q=75"
          type="image/x-icon"
        />
      </head>
      <body
        onTouchMove={() => {
          setDeployMenu(false);
        }}
      >
        <Header setDeployMenu={setDeployMenu} DeployMenu={DeployMenu} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
