interface Props {
    gallery: {
      first: string;
      second: string;
      third: string;
    };
  }
  
  const ProductGallery: React.FC<Props> = ({ gallery }) => {
    return (
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
        <div className="col-span-1 flex flex-col gap-6">
          <img src={gallery.first} alt="Gallery 1" className="rounded-lg w-full h-full" />
          <img src={gallery.second} alt="Gallery 2" className="rounded-lg w-full h-full" />
        </div>
        <div className="col-span-1 md:col-span-1 lg:col-span-2">
          <img src={gallery.third} alt="Gallery 3" className="rounded-lg w-full h-full object-cover" />
        </div>
      </section>
    );
  };
  
  export default ProductGallery;
  