import React from 'react'
import TestimonialsCards from './Cards/TestimonialsCards'
import { Button } from './ui/button'
import Link from 'next/link'

function Testimonials() {
  return (
    <section className='flex flex-col  text-[#fff] gap-4 pt-9 px-8 '>
    <div className=' w-[100%] '>
        <h2 className=' font-extrabold text-[300%] text-center'>Testimonials</h2>

    </div>
    
    <div className='flex flex-col gap-3 '>

<div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 h-[80%] p-10 items-center justify-center  gap-8'>

<TestimonialsCards title='Juan ' titleDesc='Great job' decription='Ill be honest, I normally ask more questions and ask to see more work. But after seeing the work of Harsh, Im very impresed' linkAvatar='/avatar3.webp'  />
<TestimonialsCards title='Tomas' titleDesc='Awesome videos' decription='The work of this guy is better than many other people. Im impresed' linkAvatar='/avatar2.webp' />
<TestimonialsCards title='Pablo' titleDesc='' decription='Love his videos ' linkAvatar='/avatar1.webp' />
</div>
<div className='h-[20%] flex justify-center items-center'>
<Link href='http://wa.link/6ybp9f'>
          <Button variant='secondary'> Get Started Now </Button>
          </Link>
</div>
    </div>

</section>
  )
}

export default Testimonials