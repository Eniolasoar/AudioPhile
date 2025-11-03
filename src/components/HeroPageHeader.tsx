import React from "react";

interface HeroPageHeaderProps {
  title: string;
}

const HeroPageHeader: React.FC<HeroPageHeaderProps> = ({ title }) => {
  return (
    <section className="bg-[#131313] text-white h-[30vh] md:h-[20vh] lg:h-[40vh] flex items-center justify-center">
      <h1 className="!text-[28px] !md:text-[40px] font-bold uppercase tracking-widest !text-white">{title}</h1>
    </section>
  );
};

export default HeroPageHeader;
