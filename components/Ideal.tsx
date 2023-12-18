import React from 'react'
import IdealCard from './Cards/IdealCard'
import { Button } from './ui/button'
import { Building2, Podcast, Twitch } from 'lucide-react'
import Link from 'next/link'

function Ideal() {
  return (

    <section className='flex flex-col text-[#fff]  gap-4 p-8 '>
    <div >
      <h2 className=' font-extrabold  text-4xl text-center'> Find out if my service is ideal for you </h2>
    </div>

    <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 h-[80%] p-10 items-center  gap-8 '>
    
    <IdealCard title='If you are an entrepreneur' titleDesc={<Building2 width={40} height={40} />} decription='Videos can help you connect with your audience, generate leads, and increase sales. With my video editing skills, I can help you create engaging and engaging videos that effectively convey your message and lead to action.'/>
    <IdealCard title='If you are a content creator' titleDesc={<Twitch width={40} height={40}/>} decription='Videos are a powerful way to connect with your audience and generate more engagement. With my video editing skills, I can help you create high-quality, original and creative videos that will help you reach a wider audience and keep them engaged.'/>
    <IdealCard title='If you have a podcast'  titleDesc={<Podcast width={40} height={40}/>} decription='Videos can be a great way to promote your podcast. With my video editing skills, I can help you create engaging, entertaining videos that convey your podcasts message and lead to action.'/>
    </div>

    <div className='flex items-center justify-center'>
    <Link href='http://wa.link/6ybp9f'>
          <Button variant='landing'> Started Now With Me </Button>
          </Link>
</div>


  </section>
  )
}

export default Ideal