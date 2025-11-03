import React from "react";
import Hero from "../components/Hero";
import MainContent from "../components/MainContent";


const Home: React.FC = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <MainContent/>
      
    </main>
  );
};

export default Home;
