import React from "react";

interface ProductSectionProps {
  image: string; // desktop image path
  title: string;
  subtitle?: string;
  description: string;
  newProduct?: boolean;
  reverse?: boolean;
  onButtonClick?: () => void;
}

const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = React.useState(false);

  React.useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);

  return matches;
};

const ProductSection: React.FC<ProductSectionProps> = ({
  image,
  title,
  subtitle,
  description,
  newProduct,
  reverse = false,
  onButtonClick,
}) => {
  const isTablet = useMediaQuery("(max-width: 1024px)");
  const isMobile = useMediaQuery("(max-width: 640px)");

  const getResponsiveImage = () => {
    if (isMobile) {
      // mobile: same structure, just replace folder
      return image.replace("/desktop/", "/mobile/");
    } else if (isTablet) {
      // tablet: load image-category-page-preview.jpg instead
      const tabletPath = image
        .replace("/desktop/", "/tablet/")
        .replace("image-product.jpg", "image-category-page-preview.jpg");
      return tabletPath;
    }
    return image; // desktop default
  };

  return (
    <section
      className={`flex flex-col ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } items-center justify-between gap-[100px] py-16 w-[90%] mx-auto`}
    >
      {/* Image Container */}
      <div className="flex-1 bg-[#F1F1F1] rounded-lg flex justify-center items-center p-10">
        <img
          src={getResponsiveImage()}
          alt={title}
          className="w-[250px] sm:w-[300px] md:w-[400px] lg:w-[450px] object-contain transition-all duration-300"
        />
      </div>

      {/* Text Content */}
      <div className="flex-1 text-center lg:text-left">
        {newProduct && (
          <p className="text-[var(--color-primary)] tracking-[8px] uppercase mb-4">
            New Product
          </p>
        )}
        <h2 className="!text-[28px] md:!text-[40px] font-bold uppercase mb-6">
          {title} {subtitle && <br />} {subtitle}
        </h2>
        <p className="text-[#7D7D7D] text-[15px] leading-[25px] mb-8 max-w-md mx-auto lg:mx-0">
          {description}
        </p>
        <button
          onClick={onButtonClick}
          className="button-primary w-40 justify-center mx-auto lg:mx-0"
        >
          See Product
        </button>
      </div>
    </section>
  );
};

export default ProductSection;
