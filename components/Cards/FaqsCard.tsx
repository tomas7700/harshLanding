
import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import {faqs}  from '@/constants/Faqs-info'

function FaqsCard() {

return (
<div className=' min-w-[60%]  max-w-[60%]  flex flex-col  gap-10 ' >
{
    faqs.map((faq) => (
    <Accordion key={faq.name} className='shadow-2xl p-3 text-black' type="single" collapsible>
    <AccordionItem value={faq.name}>
        <AccordionTrigger> <h3> {faq.title}</h3></AccordionTrigger>
        <AccordionContent>
            <p>{faq.description}</p>
        </AccordionContent>
    </AccordionItem>
  </Accordion>

  ))}
</div>
  


);
}

export default FaqsCard