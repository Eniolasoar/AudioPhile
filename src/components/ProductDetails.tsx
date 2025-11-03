import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/product";
import CardProduct from "../components/CardProduct";
import ProductGallery from "../components/ProductGallery";
import CounterButton from "../components/CounterButton";
import BestGearSection from "./BestGearSection";
import CategorySection from "./CategorySection";

const ProductDetails: React.FC = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.slug === slug);

  if (!product) return <div className=' min-h-[30vh] display flex justify-center items-center text-[24px] sm-text-[54px]'>Product not found.</div>;

  return (
    <div className="px-6 md:px-10 lg:px-20 mt-8">
      {/* Go Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="text-grab-1 uppercase mb-10 hover:text-primary transition hover:cursor-pointer text-[#7D7D7D]" 
      >
        Go Back
      </button>

      {/* Product Info Section */}
      <CardProduct product={product} />

      {/* Features and In the Box */}
      <section className="flex lg:flex-row flex-col justify-between mt-[120px] gap-12">
        <div className="lg:w-full">
          <h3 className="text-2xl font-bold uppercase mb-6">Features</h3>
          <p className="text-gray-500 leading-7 whitespace-pre-line w-full w-[70%]">
            {product.features}
          </p>
        </div>
        <div className="lg:w-[40%] flex flex-col lg:items-start md:w-[80%]">
          <h3 className="text-2xl font-bold uppercase mb-6">In the Box</h3>
          <ul className="space-y-2">
            {product.includes.map((inc, i) => (
              <li key={i} className="flex items-center gap-4">
                <span className="text-primary font-bold">{inc.quantity}x</span>
                <span className="text-gray-600">{inc.item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Product Gallery */}
      <ProductGallery gallery={product.gallery} />

      {/* You May Also Like */}
      <section className="mt-30">
        <h3 className="text-2xl uppercase font-bold text-center mb-10">
          You May Also Like
        </h3>

        <div className="flex flex-col md:flex-row gap-8 justify-between">
          {product.others.map((o, i) => {
            // Try to find the actual product to navigate by its slug
            const targetProduct = products.find(
              (p) => p.name.toLowerCase() === o.name.toLowerCase()
            );

            return (
              <div
                key={i}
                className="flex flex-col items-center text-center rounded-lg "
              >
                <img
                  src={o.image}
                  alt={o.name}
                  className="mb-6 w-full h-auto object-contain"
                />
                <h5 className="text-lg font-bold uppercase mb-4">{o.name}</h5>
                <button
                  onClick={() =>
                    navigate(`/product/${targetProduct?.slug || ""}`)
                  }
                  className="button-primary w-[160px]"
                >
                  SEE PRODUCT
                </button>
              </div>
            );
          })}
        </div>
      </section>

      <div className="mx-auto mt-[200px] space-y-24">
<CategorySection/>
</div>

      <div className=" mx-auto mt-[200px] space-y-24">
<BestGearSection/>
</div>


    </div>
  );
};

export default ProductDetails;
