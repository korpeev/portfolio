import React from "react";
import { Header, Main, AboutMe, Projects } from "@/components";
import { AppProvider } from "@/components/context/appContext";

const App = () => {
  return (
    <AppProvider>
      <Header />
      <main>
        <Main />
        <AboutMe />
        <Projects />
      </main>
    </AppProvider>
  );
};

export default App;
