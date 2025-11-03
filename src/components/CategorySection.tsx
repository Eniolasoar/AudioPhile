
const CategorySection: React.FC = () => {
return(
<>
<section className="w-full flex flex-col md:flex-row justify-between gap-[100px] sm:gap-6">
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
</>
)
}
export default CategorySection;