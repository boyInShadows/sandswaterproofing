import React from 'react'
import Triangle from './triangle'

const OurBrandSection = () => {
  return (
    <div className='w-full h-[100vh] flex items-center justify-around'>
      {/* <Triangle/> */}
      <Triangle/>
      <div className=' h-full w-[30vw]'>
      <h1 className='font-heading text-5xl'>Our Brand</h1>
      <p className='font-body text-xl'>We work closely with architects, general contractors and owners to provide custom home designs that are beyond comparison.</p>
      </div>
    </div>
  )
}

export default OurBrandSection