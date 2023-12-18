
import React from 'react'
import { Button } from './ui/button'
import FormatsBar from './FormatsBar'
import Link from 'next/link'



function Hero() {
  return (
    <section className='flex mb-10 text-[#fff] h-[100%] flex-col gap-4  p-8  '>
      <div className='flex h-[40%] gap-9 w-full flex-col justify-center items-center text-center'>
      <p className='font-extrabold text-4xl md:text-6xl lg:text-8xl text-center'>Increase Your Views with <br />Engaging Videos</p>
        <h1 className='text-2xl  md:text-3xl lg:text-5xl  font-extrabold'> video editing service</h1>
      </div>

      <div className='flex flex-col gap-9 h-[60%] pt-10  w-[100%]  justify-start items-center text-center'>
      <iframe
    
          src="./video-hero.mp4"
          title="videolabone"
          className=' w-[90%]  min-h-[300px] h-[80%] max-w-[600px]'>
        </iframe>
        <div className='flex flex-col gap-9 items-center w-full'>
        <Link href='http://wa.link/6ybp9f'>
          <Button variant='landing'> Get Started Now </Button>
          </Link>
        <FormatsBar/>
     
        </div>
      </div>





    </section>
  )
}

export default Hero