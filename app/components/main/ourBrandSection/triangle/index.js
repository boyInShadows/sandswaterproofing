'use client'
import React, { useRef, useEffect } from 'react'
import Lottie from 'lottie-react'
// import animationData from '@/public/lottie/triangle.json'
import animationData from '@/public/lottie/triangleBorder.json'

const Triangle = () => {
  const lottieRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (lottieRef.current) {
        lottieRef.current.play()
      }
    }, 1500) // Delay in milliseconds (1000ms = 1 second)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="w-[40rem] h-[40rem] relative mt-[-25rem]">
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        style={{ width: '100%', height: '100%', position:'absolute' }}
      />
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        loop={true}
        autoplay={false}
        style={{ width: '100%', height: '100%', position:'absolute', left:'7.5rem', top:'4rem' }}
      />
    </div>
  )
}

export default Triangle