import React from "react";
import HeroPageHeader from "../components/HeroPageHeader";
import ProductSection from "../components/ProductSection";
import CategorySection from "../components/CategorySection";
import BestGearSection from "../components/BestGearSection";

const HeadphonesPage: React.FC = () => {
  return (
    <main>
      <HeroPageHeader title="Headphones" />

      <div className="mt-16 flex flex-col gap-24">
        <ProductSection
          image="/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg"
          title="XX99 Mark II"
          subtitle="Headphones"
          description="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
          newProduct
        />
        <ProductSection
          image="/assets/product-xx99-mark-one-headphones/desktop/image-product.jpg"
          title="XX99 Mark I"
          subtitle="Headphones"
          description="As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles everywhere."
          reverse
        />
        <ProductSection
          image="/assets/product-xx59-headphones/desktop/image-product.jpg"
          title="XX59"
          subtitle="Headphones"
          description="Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable design pairs comfort with quality."
        />


      </div>

<div className="w-[90%] mx-auto mt-[100px] space-y-24">
<CategorySection/>
</div>
<div className="w-[90%] mx-auto mt-[100px] space-y-24">
<BestGearSection/>
</div>
      
    </main>
  );
};

export default HeadphonesPage;
