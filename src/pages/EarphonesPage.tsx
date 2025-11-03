import React from "react";
import HeroPageHeader from "../components/HeroPageHeader";
import ProductSection from "../components/ProductSection";
import CategorySection from "../components/CategorySection";
import BestGearSection from "../components/BestGearSection";
import { useNavigate } from "react-router-dom";

const EarphonesPage: React.FC = () => {
    const navigate=useNavigate();
  return (
    <main>
      <HeroPageHeader title="EarPhones" />

      <div className="mt-16 flex flex-col gap-24">
        <ProductSection
          image="/assets/product-yx1-earphones/desktop/image-product.jpg"
          title="YX1 WIRELESS
EARPHONES"
          description="Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
          newProduct
          onButtonClick={()=>{
            navigate("/earphones/yx1-earphones")
                      }}
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

export default EarphonesPage;
