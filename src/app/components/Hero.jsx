"use client"

import React from 'react'
import motion from 'framer-motion'
import { styles } from '../style'
import { ComputersCanvas } from './canvas'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex-row items-start gap-5 `}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-sky-600' />
          <div className='w-1 sm:h-80 h-40 bg-red-600' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>Hi, I'm <span className='text-[#915eff]'>Hatsune Miku</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Testing how to develope 3d website <br className='sm:block hidden' />
            Learn how to develop a game
          </p>
        </div>
      </div>

      <ComputersCanvas />

    </section>
  )
}


export default Hero