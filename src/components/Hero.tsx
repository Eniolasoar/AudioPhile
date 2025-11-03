import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative bg-[#131313] text-white overflow-hidden">
      {/* Pattern Background */}
      <div className="absolute inset-0 bg-[url('/assets/pattern-circles.svg')] bg-no-repeat bg-center opacity-10 pointer-events-none"></div>

      {/* Headphone Background for Mobile/Tablet */}
      <div
        className="
          absolute inset-0 
          bg-[url('/assets/headphones.png')]
          bg-no-repeat
          bg-contain
          bg-center
          opacity-20
          z-0
          block
          lg:hidden
        "
      ></div>

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl w-[80%] mx-auto flex flex-col-reverse lg:flex-row items-center justify-between py-16">
        {/* Left Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <p className="overline text-[#979797] mb-4 uppercase tracking-[10px]">
            NEW PRODUCT
          </p>
          <h1 className="!text-white !text-[36px] !md:text-[56px] leading-[1.1] font-bold uppercase mb-6 w-full sm:w-[500px]">
            XX99 Mark II Headphones
          </h1>
          <p className="max-w-md mx-auto lg:mx-0 text-[#CFCFCF] font-medium mb-8">
            Experience natural, lifelike audio and exceptional build quality made
            for the passionate music enthusiast.
          </p>
          <button className="button-primary w-40 justify-center mx-auto lg:mx-0">
            See Product
          </button>
        </div>

        {/* Right Image (Desktop Only) */}
        <div className="hidden lg:flex flex-1 justify-end mb-10 lg:mb-0">
          <img
            src="/assets/headphones.png"
            alt="XX99 Mark II Headphones"
            className="w-[220px] sm:w-[280px] md:w-[350px] lg:w-[708.8px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
