'use client'
import { social } from '@/constants/Social'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './ModeToggle'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"



function Navbar() {
    return (
        <header className=' w-full mt-[50px]  text-[#fff] items-center justify-between  h-[50px] flex flex-row  gap-2 px-2  '>
            <div className='flex flex-row gap-3 px-2   items-center justify-start '>
                <Avatar>
                    <AvatarImage src="/logo.webp" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                
                <p className='font-bold lg:text-3xl md:text-2xl sm:text-lg'>Theharshoriginals</p>
            </div>

            <div className=' items-center justify-between flex  flex-row gap-2 px-4 '>
                <div className='  lg:flex md:flex hidden  flex-row px-2 gap-5 items-center justify-end'>
                <Link href='https://www.instagram.com/theharshoriginals'>
                            <Image  src='/instagram-logo.png' alt={` instagram icon of the video editing service`} width={40} height={48} />
                 </Link>
                </div>
                <div className='items-center justify-center flex flex-row p-2 gap-5'>
                    <ModeToggle />
                </div>
            </div>
        </header>
    )
}

export default Navbar