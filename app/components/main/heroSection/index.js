'use client'

import React,{useState,useEffect} from 'react'
import { motion } from "framer-motion";



// Icons
import { ChevronLeft, ChevronRight } from 'lucide-react'

// Images
import Item1 from "@/public/Hero/1.jpg"
import Item2 from "@/public/Hero/1.1.jpg"
import Item3 from "@/public/Hero/2.jpg"
// import Item4 from "@/public/Hero/2.2.jpg"
import Item5 from "@/public/Hero/3.jpg"
import Item6 from "@/public/Hero/3.3.jpg"
import Item7 from "@/public/Hero/4.jpg"
import Item8 from "@/public/Hero/4.4.jpg"
import GlassPanel from './glassPanel'

const HeroSection = () => {
  // const images = ["/Hero/1.jpg", "/Hero/4.jpg", "/Hero/3.jpg"];
const [currentImage, setCurrentImage] = useState(0);

// useEffect(() => {
//   const interval = setInterval(() => {
//     setCurrentImage((prev) => (prev + 1) % images.length);
//   }, 6000);
//   return () => clearInterval(interval);
// }, []);
  return (
    <div
  className="relative w-full h-[100vh] flex flex-col items-center justify-center overflow-hidden"
>
    <div
      className="absolute inset-0 bg-cover bg-center transition-opacity duration-[2000ms]"
      // style={{     backgroundImage: `url(${images[currentImage]})`}}
      style={{ backgroundImage: `url('/Hero/1.jpg')` }}
    >
      <div className='h-[80vh] flex flex-col items-center justify-center gap-10 '>
        
      <motion.h1
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.4, ease: "easeOut" }}
  className="uppercase text-6xl md:text-7xl font-michorma font-bold text-Forest tracking-[0.3rem] neon-text flicker "
    style={{textShadow: '0 0 8px rgba(228,228,242,0.25)'}}
>
  sandswaterproofing
</motion.h1>

<motion.h2
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.6, delay: 0.5, ease: "easeOut" }}
  className="uppercase text-5xl md:text-6xl font-michorma text-Sand tracking-[0.2rem] neon-text"
  style={{textShadow: '0 0 8px rgba(228,228,242,0.25)'}}

>
  architecture
</motion.h2>
      </div>
      {/* <div className='w-[50rem] h-[25rem] rounded-[1rem] bg-Fog/50 flex items-center justify-center'>
      <ChevronLeft size={80} className='cursor-pointer'/>
      <p>Hero Section</p>
      <ChevronRight size={80} className='cursor-pointer'/>
      </div> */}
    <motion.div
  animate={{ y: [0, -8, 0] }}
  transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
  className="relative z-10 w-full"
>
  <GlassPanel />
</motion.div>
    </div>
    <div className="absolute inset-0 bg-gradient-to-b from-Forest/30 via-transparent to-transparent"></div>

    </div>
  )
}

export default HeroSection