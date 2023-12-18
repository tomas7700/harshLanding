import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

function StepsCards({
    title,
     titleIcon,
     decription,
     titleDesc
} : {
    title:string; 
    titleIcon:React.ReactNode;
     decription:string;
     titleDesc:string;
}) {
  return (
    
 <Card className='min-w-[350px]  min-h-[350px] max-w-[350px] text-center'>
    <CardHeader>
      <CardTitle> <p className='text-3xl font-bold' >{title}</p></CardTitle>
      <CardDescription className='flex flex-col items-center gap-4'>
         <p className='text-md text-gray-400 font-bold'>{titleDesc}</p> 
      {titleIcon}
      </CardDescription>
   
    </CardHeader>
    <CardContent>
      <p>{decription}</p>
    </CardContent>
  </Card>
       
  
  )
} 

export default StepsCards