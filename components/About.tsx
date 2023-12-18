
import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import Link from 'next/link'



function About() {


  return (
    <section className='flex  flex-col text-[#fff]  px-8  pt-5'>
      <div className='mb-10'>
        <h2 className=' font-extrabold text-[300%] text-center'>Do you want your videos to be more  than just a collection of images and sounds </h2>
      </div>

      <div className='flex lg:flex-row flex-col gap-3 '>
        <div className='flex flex-col   py-10 items-center justify-center gap-5'>
          <p className=' text-[20px] lg:w-[70%]      font-bold '>
            With my experience as a video editor and 3D animator, I can help you create videos that tell stories, convey messages, and connect with your audience.
            <br />
            I can replicate any editing style, from elegant and sophisticated to dynamic and exciting. I am also an expert in 3D animation, which allows me to create visually striking and engaging videos.
            <br />
            No matter if you need a video for your company, your organization, or your own personal project, I can help you create it.
            <br />
            I am a serious and committed professional, and I am always willing to give my best.
          </p>
          
          <Link href='http://wa.link/6ybp9f'>
          <Button variant='landing'> Get In Touch With Me Now </Button>
          </Link>
  
        </div>
        <div className='flex items-center justify-center' >
         <Image alt='video editing service by a freelancer' src='/video-editing.webp' width={900} height={400} className=' shadow-xl rounded-3xl' /> 
        </div>
      </div>

    </section>
  )
}

export default About