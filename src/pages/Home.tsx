import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

const Home: React.FC = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
    </main>
  );
};

export default Home;
