'use client'
import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { XCircle } from 'lucide-react';

function NavbarLeadMagnet() {
  const [shaking, setShaking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShaking((prevShaking) => !prevShaking);
    }, 5000); // Decreased interval to 500 milliseconds
  
    return () => clearInterval(interval);
  }, [shaking]); // Include shaking in the dependency array

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 10000); // Wait for 10 seconds before showing the navigation bar

    return () => clearTimeout(timeoutId);
  }, []); // Run once on component mount

  return (
    <nav style={{ display: isVisible ? 'flex' : 'none' }} className='fixed top-0 left-0 z-[50] w-full lg:h-[50px] md:h-[75px] items-center justify-around gap-9 bg-white flex-row'>
      <div className="flex px-2 items-center justify-center">
        <p className='lg:text-sm md:text-sm text-[8px] font-normal text-black'>Access the secret to professional video edits with our exclusive SFX & Music Pack – over 70 FREE assets for unparalleled creativity</p>
      </div>
      <div className="flex items-center justify-center">
        <Button className={`h-[30px] ${shaking ? "shaking" : "none"} bg-red-600`}>Get for free now</Button>
      </div>

      <XCircle className='cursor-pointer w-[20%] mr-1' onClick={() => setIsVisible(false)} />
    </nav>
  );
}

export default NavbarLeadMagnet;
