import React from 'react'
import Discord from '../Icons/Discord'
import NextArrow from '../Icons/NextArrow'
function Hero() {
  return (
    <section
      id="hero"
      className=" w-full overflow-hidden p-6 lg:px-24 xl:px-52 "
    >
      <div
        style={{ zIndex: -1 }}
        className="absolute top-0 left-0 right-0 bottom-0"
      >
        <img
          style={{ objectFit: 'cover', height: '100vh', width: '100vw' }}
          src="/images/hero/bg.png"
          alt="bg"
        />
      </div>
      <div className="relative h-80vh w-full">
        <div className="hero-images relative flex w-full justify-center">
          <div className="shogun-warriors absolute top-0 w-full lg:w-8/12">
            <img src="/images/hero/img2.png" />
          </div>
          <div className="hero-warrior shogun-warriors w-full lg:w-10/12">
            <img src="/images/hero/img1.png" />
          </div>
        </div>
        <div className="info absolute left-0 right-0 bottom-20 text-center text-sm md:text-lg  text-gray-300 md:bottom-0 ">
          <p>
            If they stand behind you, protect them · If they stand beside you,<br className='hidden sm:block'/>
            respect them · If they stand against you, defeat them.
          </p>
          <div className="center pt-4 text-xs">
            <a href="https://google.com">
              <button className="btn text-xs primary ">
                <span>Public Mint</span>
                <span>
                  <NextArrow />
                </span>
              </button>
            </a>
            <button className="btn text-xs outline-btn ">
              <span>Join Our Discord</span>
              <span>
                <Discord />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
