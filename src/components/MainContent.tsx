import React from "react";

const MainContent: React.FC = () => {
  return (
    <main className="w-[90%] mx-auto mt-[100px] space-y-24">
      {/* 1️⃣ Category Cards */}
      <section className="flex flex-col md:flex-row justify-between gap-[100px] sm:gap-6">
        {[
          {
            title: "HEADPHONES",
            image: "/assets/shared/desktop/image-category-thumbnail-headphones.png",
          },
          {
            title: "SPEAKERS",
            image: "/assets/shared/desktop/image-category-thumbnail-speakers.png",
          },
          {
            title: "EARPHONES",
            image: "/assets/shared/desktop/image-category-thumbnail-earphones.png",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="relative bg-[var(--color-gray-1)] rounded-lg flex flex-col items-center justify-end py-16 px-8 flex-1"
          >
            <img
              src={item.image}
              alt={item.title}
              className="absolute -top-12 w-[120px] md:w-[140px] object-contain"
            />
            <h6 className="mt-16">{item.title}</h6>
            <button className="button-tertiary mt-3 flex items-center">
              Shop
            </button>
          </div>
        ))}
      </section>

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
      <section className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="mb-6">
            Bringing you the{" "}
            <span className="text-[var(--color-primary)]">best</span> audio gear
          </h2>
          <p className="text-[#7d7d7d] max-w-lg mx-auto lg:mx-0">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>

        {/* Responsive Image */}
        <div className="flex-1 rounded-lg overflow-hidden">
          <picture>
            <source
              srcSet="/assets/shared/desktop/image-best-gear.jpg"
              media="(min-width: 1024px)"
            />
            <source
              srcSet="/assets/shared/tablet/image-best-gear.jpg"
              media="(min-width: 640px)"
            />
            <img
              src="/assets/shared/mobile/image-best-gear.jpg"
              alt="Best Gear"
              className="w-full h-full object-cover"
            />
          </picture>
        </div>
      </section>
    </main>
  );
};

export default MainContent;
