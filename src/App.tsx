import React from "react";
import { Header, Footer } from "@/components";
import { AppProvider } from "@/context/appContext";
import Layout from "./pages/Layout";
import { Route, Routes } from "react-router-dom";
import Project from "./pages/Project";

const App = () => {
  return (
    <AppProvider>
      <div className="flex flex-col">
        <Header />
        <main className="flex-1 min-h-screen">
          <Routes>
            <Route path="/" element={<Layout />} />
            <Route path="/projects/:projectName" element={<Project />} />
            <Route path="*" element={<h1>No Match</h1>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </AppProvider>
  );
};

export default App;
