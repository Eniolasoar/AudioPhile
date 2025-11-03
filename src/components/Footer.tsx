import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white px-6 md:px-10 lg:px-20 py-12 mt-20">
      {/* --- Top Section --- */}
      <div className="flex flex-col md:flex-col lg:flex-row justify-between items-center lg:items-start gap-8  pb-8">
        {/* Left - Logo */}
        <div className="flex justify-center lg:justify-start">
          <img
            src="/assets/shared/desktop/logo.svg"
            alt="Audiophile Logo"
            className="w-40"
          />
        </div>

        {/* Right - Navigation */}
        <ul className="flex flex-col md:flex-row md:flex-wrap items-center !justify-center md:justify-start gap-6 text-sm font-semibold tracking-widest uppercase">
          {["Home", "Headphones", "Speakers", "Earphones"].map((item) => (
            <li
              key={item}
              className="hover:text-primary transition-colors cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* --- Bottom Section --- */}
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-flex-end mt-8 gap-8">
        {/* Left Text */}
        <p className="text-gray-400 text-center lg:text-left max-w-xl leading-relaxed">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>

        {/* Right Social Icons (Desktop) */}
        <ul className="hidden lg:flex items-center gap-6">
  <li>
    <img
      src="/assets/shared/desktop/icon-facebook.svg"
      alt="Facebook"
      className="w-5 h-5 cursor-pointer transition duration-200 icon-primary-hover"
    />
  </li>
  <li>
    <img
      src="/assets/shared/desktop/icon-twitter.svg"
      alt="Twitter"
      className="w-5 h-5 cursor-pointer transition duration-200 icon-primary-hover"
    />
  </li>
  <li>
    <img
      src="/assets/shared/desktop/icon-instagram.svg"
      alt="Instagram"
      className="w-5 h-5 cursor-pointer transition duration-200 icon-primary-hover"
    />
  </li>
</ul>


        {/* Right Social Icons (Tablet & Mobile) */}
        <ul className="hidden lg:flex items-center justify-center gap-6">
          <li>
            <img
              src="/assets/shared/desktop/icon-facebook.svg"
              alt="Facebook"
              className="w-5 h-5 cursor-pointer hover:brightness-0 hover:invert transition duration-200"
            />
          </li>
          <li>
            <img
              src="/assets/shared/desktop/icon-twitter.svg"
              alt="Twitter"
              className="w-5 h-5 cursor-pointer hover:brightness-0 hover:invert transition duration-200"
            />
          </li>
          <li>
            <img
              src="/assets/shared/desktop/icon-instagram.svg"
              alt="Instagram"
              className="w-5 h-5 cursor-pointer hover:brightness-0 hover:invert transition duration-200"
            />
          </li>
        </ul>
      </div>

      {/* --- Copyright --- */}
      <div className="mt-10 flex flex-col md:flex-row justify-center md:justify-between items-center text-gray-500 text-sm">
        <p className="text-center md:text-left">
          Copyright 2021. All Rights Reserved
        </p>

        {/* (Optional tablet icons again if alignment is needed) */}
        <ul className="flex lg:hidden items-center justify-center gap-6 mt-4 md:mt-0">
          <li>
            <img
              src="/assets/shared/desktop/icon-facebook.svg"
              alt="Facebook"
              className="w-5 h-5 cursor-pointer hover:brightness-0 hover:invert transition duration-200"
            />
          </li>
          <li>
            <img
              src="/assets/shared/desktop/icon-twitter.svg"
              alt="Twitter"
              className="w-5 h-5 cursor-pointer hover:brightness-0 hover:invert transition duration-200"
            />
          </li>
          <li>
            <img
              src="/assets/shared/desktop/icon-instagram.svg"
              alt="Instagram"
              className="w-5 h-5 cursor-pointer hover:brightness-0 hover:invert transition duration-200"
            />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
