'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Triangle from './triangle'
import OurBrandTextBlock from './OurBrandText'

const OurBrandSection = () => {
  return (
    <section className="relative w-full h-[100vh] flex items-center justify-between px-[6rem] bg-Fog overflow-hidden">
      
      {/* Decorative background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-Forest/10 via-Sand/10 to-transparent opacity-80"></div>

      {/* Animated Triangles */}
      <div className="relative flex-1 flex items-center justify-center">
        <Triangle />
      </div>

      <OurBrandTextBlock />
      
          </section>
  )
}

export default OurBrandSection
