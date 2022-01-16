import React from 'react';
import avatarLogo from '@/assets/Avatar-Maker.svg';
const Main = () => {
  return (
    <main id='main' className='pt-10'>
      <div className='container mx-auto px-5'>
        <div className='flex justify-center flex-col items-center'>
          <img src={avatarLogo} alt='Avatar Logo' />
          <div className='pt-2 text-center text-4xl'>
            <h1 className=''>Hi, I am Aslan</h1>
            <div className='w-full'>
              <span className='block mt-5 font-semibold overflow-hidden border-r-4 border-black  whitespace-nowrap mx-auto tracking-widest animate-typing '>
                Frontend Developer
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
