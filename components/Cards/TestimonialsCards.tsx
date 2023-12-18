import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';

function TestimonialsCards({
  title,
  titleDesc,
  decription,
  linkAvatar,
}: {
  title: string;
  titleDesc: string;
  decription: string;
  linkAvatar?:string;
}) {
  return (
    <Card className='min-w-[350px]  min-h-[350px] text-center'>
      <CardHeader className='flex justify-center items-center'>
      <div className='w-[70px] h-[70px] rounded-full overflow-hidden'>
        <Avatar className='flex items-center justify-center '>
          <AvatarImage   src={linkAvatar} />
        </Avatar>
        </div>
        <CardTitle> <p className='text-3xl font-bold' >{title}</p></CardTitle>
        <CardDescription> <p className='text-lg text-gray-400 font-bold'>{titleDesc}</p></CardDescription>
      </CardHeader>
      <CardContent>
        <p>{decription}</p>
      </CardContent>
    </Card>

  )
}

export default TestimonialsCards