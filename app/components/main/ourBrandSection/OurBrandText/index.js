import React from 'react'

const OurBrandTextBlock = () => {
  return (
    <section className="w-full h-[100vh] flex items-center justify-center bg-Forest px-[4rem] md:px-[8rem] text-left">
      <div className="max-w-[60rem]">
        
        {/* Hook */}
        <h1 className="text-Sand font-michorma text-[5rem] md:text-[6rem] mb-8 leading-none">
          you.
        </h1>

        {/* Main stacked lines */}
        <h2 className="text-Fog font-extrabold text-[2.8rem] md:text-[3.6rem] leading-tight">
          first, you look at the walls,
        </h2>
        <h2 className="text-Fog font-extrabold text-[2.8rem] md:text-[3.6rem] leading-tight mb-3">
          the glass, the structure.
        </h2>

        {/* Accent connector */}
        <p className="text-Rust text-[2rem] md:text-[2.2rem] font-semibold italic mb-6">
          then you realize it’s not just architecture…
        </p>

        {/* Emotional follow-up */}
        <p className="text-Fog text-[2.2rem] md:text-[2.5rem] font-bold mb-8">
          it’s how silence and light talk to each other.
        </p>

        {/* Supporting paragraph */}
        <p className="text-Fog/80 text-[1.1rem] leading-relaxed mb-8">
          Every curve, every shadow, every drop of water — designed to last.  
          That’s the language we build in: timeless design with human depth.
        </p>

        {/* Brand signature */}
        <p className="text-Sand font-michorma uppercase tracking-wide text-[1.3rem]">
          we are sands waterproofing architecture.
        </p>
      </div>
    </section>
  )
}

export default OurBrandTextBlock
