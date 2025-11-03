const BestGearSection: React.FC = () => {
    return(
<section className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="mb-6">
            Bringing you the{" "}
            <span className="text-[var(--color-primary)]">best</span> audio gear
          </h2>
          <p className="text-[#7d7d7d] max-w-lg mx-auto lg:mx-0">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>

        {/* Responsive Image */}
        <div className="flex-1 rounded-lg overflow-hidden">
          <picture>
            <source
              srcSet="/assets/shared/desktop/image-best-gear.jpg"
              media="(min-width: 1024px)"
            />
            <source
              srcSet="/assets/shared/tablet/image-best-gear.jpg"
              media="(min-width: 640px)"
            />
            <img
              src="/assets/shared/mobile/image-best-gear.jpg"
              alt="Best Gear"
              className="w-full h-full object-cover"
            />
          </picture>
        </div>
      </section>
    )
}

export default BestGearSection;