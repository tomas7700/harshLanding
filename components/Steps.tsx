import React from 'react'
import { Button } from './ui/button'
import StepsCards from './Cards/StepsCards'
import { Loader, PackageOpen, Rocket } from 'lucide-react'
import Link from 'next/link'

function Steps() {
  return (
    <section className='flex  flex-col  text-[#fff] gap-4 px-3 '>
      <div className='flex  flex-col items-center'>
        <h2 className=' font-extrabold lg:text-6xl text-4xl  text-center'>Steps to High-Quality <br /> content </h2>
        <p className=' min-w-[300px] max-w-[700px] text-center text-[18px] mt-5'>
          Do you love watching videos? We do too!
          <br />
          <br />
          But sometimes, videos can be a little boring. They can be too long, or the sound can be too loud, or the pictures can be too blurry.
          That&apos;s where we come in. We can make your videos magical, shorter, and add music or sound effects. We can even make them look like they were filmed in a movie.
          <br />
          <br />
          <span className='font-extrabold text-2xl'> I make all this in three steps </span>
        </p>

      </div>



      <div className='flex flex-wrap justify-center   items-center gap-8'>

        <StepsCards title='Tell me your objectives' titleIcon={<Rocket className='animate-bounce' />} titleDesc='As a video editor I need to understand your needs' decription='I need tu understand your needs and style you like  for your video. I can copy any editing style , and make both log-form and short-form videos' />
        <StepsCards title='Wait...' titleDesc='Is less than you think' titleIcon={<Loader className='animate-spin ' />} decription='I will work on what you ask you fastest  way so you dont loose time  ' />
        <StepsCards title='Recieve the magic ' titleDesc='Start getting popular with your videos' titleIcon={<PackageOpen className='hover:animate-spin' />} decription='I will send you the result And so you can tell me if you want to change anything or if you love it' />

      </div>

      <div className=' flex justify-center items-center'>
        <Link href='http://wa.link/6ybp9f'>
          <Button variant="secondary">Contact Me Now </Button>
        </Link>
      </div>


    </section>
  )
}

export default Steps