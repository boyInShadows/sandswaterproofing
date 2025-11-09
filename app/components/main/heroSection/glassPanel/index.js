import React from 'react'

// SVG
import PerkinSeastman from "@/public/SVG/perkinseastman"
import Gensler from "@/public/SVG/gensler"
import HKS from "@/public/SVG/hks"
import AECOM from "@/public/SVG/aecom"

const GlassPanel = () => {
  return (

 <div className="flex items-center justify-around w-[80%] mx-auto py-6 px-10 
                  bg-[#E4E4F2]/20 
                  backdrop-blur-2xl 
                  bg-gradient-to-r from-[#E4E4F2]/25 via-white/10 to-[#E4E4F2]/25 
                  rounded-2xl shadow-[0_8px_32px_rgba(31,38,135,0.15)] 
                  transition-all duration-700">
          <PerkinSeastman className="w-48 h-auto" />
          <Gensler className="w-48 h-auto" />
          <HKS className="w-48 h-auto" />
          <AECOM className="w-48 h-auto" />
          
      </div>

  )
}

export default GlassPanel