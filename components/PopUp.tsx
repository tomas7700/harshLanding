'use client'
import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { XCircle } from 'lucide-react';
import Image from 'next/image';
import { Input } from './ui/input';

function PopUp() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      const y = e.clientY || e?.clientY;

      // Check if the mouse is near the top of the viewport (exit intent)
      if (y < 10 && !sessionStorage.getItem('popupShown')) {
        setShowPopup(true);
        sessionStorage.setItem('popupShown', 'true');
        console.log('true pop up')
      }
    };

    // Attach the event listener
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      // Remove the event listener when the component is unmounted
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div style={{ display: showPopup ? 'flex' : 'none' }} className='fixed flex-col top-0 left-0 z-[100] bg-white w-screen h-full '>
      <div className='flex flex-row justify-between h-[100px] w-full p-3'>
        <p className='font-bold lg:text-3xl md:text-2xl sm:text-lg '>Theharshoriginals</p>
        <XCircle className='cursor-pointer' onClick={() => setShowPopup(false)} />
      </div>

      <div className=' absolute top-12  left-0 flex lg:flex-row md:flex-col  flex-col  items-center justify-center h-[90%] w-full p-3 gap-12'>
        <div className='flex flex-col gap-4 max-w-[500px] justify-center items-center text-center'>
          <p className='  font-extrabold lg:text-3xl md:text-xl  sm:text-lg  '>Access the secret to professional video edits with our exclusive SFX & Music Pack – over 70 FREE assets for unparalleled creativity</p>
          <p className='font-light lg:text-lg md:text-md sm:text-sm '>
            Unleash the full potential of your video editing prowess with our SFX & Music Pack, a game-changer for over 70 sonic enhancements.
          </p>
          <iframe
            width="540"
            height="305"
            src="https://93a765be.sibforms.com/serve/MUIFAEBGkSxApt6b3j6AevvUQ_3Map2lKeb8uJ-3-otbNK28NjP2oCy1IXyiQYHJnTkBzRFrT5PD629ZpxOEn5ISKfTyWXOGLvTJQt0uiHhUjdITVgsrlYHq8P0VzLl7jVJU8gg796D1ZYxfCtAESvT4H-db1G7tnVGgTy3rCrFRc6AFQdRrjWS5i8S6DIhyeh1USpOhyIeQUiW2"
            frameBorder="0"
            scrolling="auto"
            allowFullScreen
            style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', maxWidth: '100%' }}
          ></iframe>
        </div>
        <div className='object-cover  w-[50%] flex justify-center items-center'>
          <Image alt='Leadmagnet' src='/mockup-LEAD.webp' width={300} height={300} className='w-[40%] h-[50%] min-w-[150px] min-h-[200px]' />
        </div>
      </div>
    </div>
  );
}

export default PopUp;
