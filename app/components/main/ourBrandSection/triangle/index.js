'use client'
import React from 'react'
import Lottie from 'lottie-react'
import animationData from '@/public/lottie/triangle.json'

const Triangle = () => {
  return (
    <div className="w-[40rem] h-[40rem] relative ml-[-25rem] mt-[-25rem]">
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        style={{ width: '100%', height: '100%', position:'absolute' }}
      />
    </div>
  )
}

export default Triangle