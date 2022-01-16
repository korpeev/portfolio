import React from 'react';
import cn from 'classnames';
import avatarLogo from '@/assets/Avatar-Maker.svg';
const Main = () => {
  const typewritterClasses = cn(
    'block mt-5 font-semibold overflow-hidden border-r-4 border-black  whitespace-nowrap mx-auto tracking-widest animate-typing'
  );
  return (
    <main id='main' className='pt-10'>
      <div className='container mx-auto px-5'>
        <div className='flex justify-center flex-col items-center'>
          <img src={avatarLogo} alt='Avatar Logo' />
          <div className='pt-2 text-center text-4xl'>
            <h1 className=''>Hi, I am Aslan</h1>
            <div className='w-full'>
              <span className={typewritterClasses}>Frontend Developer</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
