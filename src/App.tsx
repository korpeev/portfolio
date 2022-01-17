import React from 'react';
import { Header, Main, AboutMe, Projects } from '@/components';
import { useEffect } from 'react';
import axios from 'axios';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Main />
        <AboutMe />
        <Projects />
      </main>
    </>
  );
};

export default App;
