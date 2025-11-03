import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import MainContent from "../components/MainContent";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <MainContent/>
      <Footer/>
    </main>
  );
};

export default Home;
