import React from "react";
import CategorySection from "./CategorySection";
import BestGearSection from "./BestGearSection";

const MainContent: React.FC = () => {
  return (
    <main className="w-[90%] mx-auto mt-[100px] space-y-24">
      {/* 1️⃣ Category Cards */}
      <CategorySection/>

      {/* 2️⃣ ZX9 Speaker Section */}
      <section className="relative bg-[var(--color-primary)] text-white rounded-lg overflow-hidden flex flex-col lg:flex-row items-center justify-between px-8 md:px-16 py-16">
        {/* Background Pattern */}
        <div className="absolute left-0 w-[70%] h-full bg-[url('/assets/home/desktop/pattern-circles.svg')] bg-no-repeat bg-contain opacity-30"></div>

        {/* Speaker Image */}
        <div className="relative z-10 flex justify-center lg:justify-start flex-1 mb-8 lg:mb-0">
          <img
            src="/assets/home/desktop/image-speaker-zx9.png"
            alt="ZX9 Speaker"
            className="w-[180px] sm:w-[220px] md:w-[280px] lg:w-[350px]"
          />
        </div>

        {/* Text Content */}
        <div className="relative z-10 text-center lg:text-left flex-1">
          <h1 className="!text-white mb-6 !text-[36px] sm:text-[56px] !leading-[1.29] !sm:leading-[58px]">ZX9 <br></br>SPEAKER</h1>
          <p className="text-gray-200 mb-8 max-w-sm mx-auto lg:mx-0">
            Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
          </p>
          <button className="button-secondary-1 mx-auto lg:mx-0">See Product</button>
        </div>
      </section>

      {/* 3️⃣ ZX7 Speaker Section (Responsive Background) */}
      <section
        className="relative bg-[var(--color-gray-1)] rounded-lg overflow-hidden flex items-center justify-between px-8 md:px-16 py-16 
        bg-[url('/assets/home/mobile/image-speaker-zx7.jpg')] 
        sm:bg-[url('/assets/home/tablet/image-speaker-zx7.jpg')] 
        lg:bg-[url('/assets/home/desktop/image-speaker-zx7.jpg')] 
        bg-cover bg-center"
      >
        <div>
          <h4 className="mb-6 text-black">ZX7 SPEAKER</h4>
          <button className="button-secondary">See Product</button>
        </div>
      </section>

      {/* 4️⃣ Earphones Section (YX1) */}
      <section className="flex flex-col md:flex-row gap-6 justify-between">
        {/* Left Card (Image) */}
        <div className="flex-1 rounded-lg overflow-hidden">
          <picture>
            <source
              srcSet="/assets/home/desktop/image-earphones-yx1.jpg"
              media="(min-width: 1024px)"
            />
            <source
              srcSet="/assets/home/tablet/image-earphones-yx1.jpg"
              media="(min-width: 640px)"
            />
            <img
              src="/assets/home/mobile/image-earphones-yx1.jpg"
              alt="YX1 Earphones"
              className="w-full h-full object-cover"
            />
          </picture>
        </div>

        {/* Right Card (Text) */}
        <div className="flex-1 bg-[var(--color-gray-1)] rounded-lg flex flex-col justify-center px-8 md:px-12 py-12">
          <h4 className="mb-6">YX1 EARPHONES</h4>
          <button className="button-secondary w-fit">See Product</button>
        </div>
      </section>

      {/* 5️⃣ Best Gear Section (Responsive Image) */}
      <BestGearSection/>
    </main>
  );
};

export default MainContent;
