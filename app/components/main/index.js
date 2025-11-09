import React from 'react'
import HeroSection from './heroSection'
import OurBrandSection from './ourBrandSection'
import OurCreationSection from './ourCreationSection'

const Main = () => {
  return (
    <div className='flex flex-col gap-[2rem]'>
    <HeroSection />
    <OurBrandSection />
    <OurCreationSection />
    </div>
  )
}

export default Main 