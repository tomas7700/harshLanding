import React from 'react'
import FaqsCard from './Cards/FaqsCard'

function Faqs() {
    return (
        <section className='flex flex-col  pt-12 w-screen bg-[#fff] text-[#fff] gap-4 px-4 '>
            <div >
                <h2 className=' font-extrabold  text-[400%] text-center text-[#000]'>FAQS</h2>
            </div>

            <div className=' flex  items-center justify-center  mb-[200px]   '>

                <FaqsCard />

            </div>

        </section>
    )
}

export default Faqs