import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Headphones from "./pages/HeadphonesPage";
import Speakers from "./pages/SpeakerPage";
import Earphones from "./pages/EarphonesPage";
import Footer from "./components/Footer";
import ProductDetails from "./components/ProductDetails";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/headphones" element={<Headphones />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/earphones" element={<Earphones />} />
        <Route path="/:product/:slug" element={<ProductDetails/>} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
