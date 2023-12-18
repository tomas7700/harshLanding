
import { social } from '@/constants/Social'
import Image from 'next/image'
import React from 'react'

function FormatsBar() {
    return (

        <div className=' relative h-[60px] w-full  flex flex-row bg-white  '>
            <div className='  px-3 flex items-center justify-start'>
                <p className='lg:text-2xl md:text-md text-sm text-gray-600 font-light'>Video formats I  use </p>
            </div>
            <div className='lg:w-[60%] w-[50%]  h-full flex justify-start items-center   lg:px-5 px-1 lg:gap-20 gap-1'>
  {social.map((social) =>(

     <Image key={social.name} src={social.icon} alt={social.name} width={40} height={40} />
  ))}
            </div>
        </div>
    )
}

export default FormatsBar