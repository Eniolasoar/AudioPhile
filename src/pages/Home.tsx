import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import MainContent from "../components/MainContent";

const Home: React.FC = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <MainContent/>
    </main>
  );
};

export default Home;
