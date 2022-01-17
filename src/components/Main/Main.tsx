import React from 'react';
import cn from 'classnames';
import avatarLogo from '@/assets/Avatar-Maker.svg';
const Main = () => {
  const typewritterClasses = cn(
    'block mt-5 font-semibold overflow-hidden border-r-4 border-black  whitespace-nowrap mx-auto tracking-widest animate-typing'
  );
  const infoClasses = 'flex justify-center flex-col items-center';
  return (
    <section id='main' className='pt-20'>
      <div className='container max-w-7xl mx-auto px-5'>
        <div className={infoClasses}>
          <img src={avatarLogo} alt='Avatar Logo' />
          <div className='pt-2 text-center text-4xl md:text-2xl'>
            <h1 className=''>Hi, I am Aslan</h1>
            <div className='w-full'>
              <span className={typewritterClasses}>Frontend Developer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
