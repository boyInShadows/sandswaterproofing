import React from 'react'
import Image from 'next/image'


// Components
import Nav from './nav'
import Search from './search'

// Images
import Logo from '@/public/Logo/Logo.png'


const Header = () => {
  return (
    <div className='fixed px-[3rem] w-full bg-[#E4E4F2]/20
    h-[12vh] 
                  backdrop-blur-2xl 
                  bg-gradient-to-r from-[#E4E4F2]/25 via-white/10 to-[#E4E4F2]/25 
                  rounded-b-xl shadow-[0_8px_32px_rgba(31,38,135,0.15)] 
                  transition-all duration-700 z-50'>
      <div className='flex justify-between items-center  '>
        <Image src={Logo} alt='Logo' className='w-[7.5rem] '/>
        <Nav />
        <Search />
    </div>
    </div>
  )
}

export default Header