
import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

function IdealCard({
    title,
     titleDesc, 
     decription
} : {
    title:string; 
    titleDesc:React.ReactNode;
     decription:string;
}) {
  return (
    <Card className='min-w-[350px]  min-h-[350px] text-center'>
    <CardHeader className='h-[30%] gap-2'>
      <CardTitle> <p className='text-3xl font-bold' >{title}</p></CardTitle>
      <CardDescription className='flex justify-center items-center'>{titleDesc}</CardDescription>
    </CardHeader>
    <CardContent className='h-[60%]'>
      <p className='flex  items-center justify-center mt-10'>{decription}</p>
    </CardContent>
  </Card>
  
  )
} 

export default IdealCard