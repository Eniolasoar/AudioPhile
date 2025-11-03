import CounterButton from "./CounterButton";
import type { Product } from "../data/product";

interface Props {
  product: Product;
}

const CardProduct: React.FC<Props> = ({ product }) => {
  return (
    <div className="flex flex-col md:flex-row items-center md:gap-[50px] gap-[100px]">
      {/* Image Section */}
      <div className="bg-gray-100 rounded-lg p-8 flex justify-center items-center w-full h-full lg:w-1/2">
        <picture>
          {/* Desktop */}
          <source
            media="(min-width: 1024px)"
            srcSet={`/assets/product-${product.slug}/desktop/image-product.jpg`}
          />
          {/* Tablet */}
          <source
            media="(min-width: 640px)"
            srcSet={`/assets/product-${product.slug}/tablet/image-product.jpg`}
          />
          {/* Mobile */}
          <img
            src={`/assets/product-${product.slug}/mobile/image-product.jpg`}
            alt={product.name}
            className="w-[80%] object-contain"
          />
        </picture>
      </div>

      {/* Product Info Section */}
      <div className="lg:w-1/2 flex flex-col gap-4 text-center md:text-left">
        <h2 className="text-3xl font-bold uppercase">{product.name}</h2>
        <p className="text-gray-600 leading-7">{product.description}</p>
        <p className="text-xl font-semibold uppercase">
          $ {product.price.toLocaleString()}
        </p>

        <div className="flex items-center justify-center md:justify-start gap-6 mt-10">
          <CounterButton />
          <button className="button-primary w-[160px]">ADD TO CART</button>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
