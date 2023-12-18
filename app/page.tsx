'use client'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Steps from '@/components/Steps'
import Testimonials from '@/components/Testimonials'
import Ideal from '@/components/Ideal'
import Faqs from '@/components/Faqs'



export default function Home() {



  return (
    
     <main className="flex flex-col  items-center  overflow-hidden lg:pb-0 md:pb-0  lg:p-10  md:p-7 sm:p-0  background  ">
      
      <Hero/>
      <Steps/>
      <About/>
      <Testimonials/>
     < Ideal/>
     <Faqs/>
     </main>

   
  )
}
 