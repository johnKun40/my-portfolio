import React, {useState, useEffect, useRef} from 'react';
import Head from 'next/head';
import Image from 'next/image';
import About from '../components/About';
import Contact from '../components/Contact';
import Main from '../components/Main';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import HashLoader from "react-spinners/HashLoader";
import Slideshow from '../components/Slideshow';




export default function Home() {
  
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000)
  }, [])




  return (
    <div>
  
      {
        loading ? ( 
        <div className='flex justify-center items-center w-full h-screen'>
        <HashLoader color={'#0B102E'} loading={loading} size={250} />
        </div>
        ):(

      <div>
      <Head>
        <title>John Adesina | Front-End Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/JAlogo.ico" />
      </Head>

      
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
      </div>
      )

      }
      
    </div>
  )
}
