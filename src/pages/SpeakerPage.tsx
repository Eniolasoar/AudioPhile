import React from "react";
import HeroPageHeader from "../components/HeroPageHeader";
import ProductSection from "../components/ProductSection";
import CategorySection from "../components/CategorySection";
import BestGearSection from "../components/BestGearSection";

const SpeakerPage: React.FC = () => {
  return (
    <main>
      <HeroPageHeader title="Speakers" />

      <div className="mt-16 flex flex-col gap-24">
        <ProductSection
          image="/assets/product-zx7-speaker/desktop/image-product.jpg"
          title="ZX9 SPEAKER"
          subtitle="Headphones"
          description="Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
          newProduct
        />
        <ProductSection
          image="/assets/product-zx9-speaker/desktop/image-category-page-preview.jpg"
          title="ZX9 SPEAKER"
          subtitle="Headphones"
          description="Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."
          reverse
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

export default SpeakerPage;
