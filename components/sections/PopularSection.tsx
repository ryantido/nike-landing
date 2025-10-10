import { PopularShoes } from "@/constants/popular-shoes";
import ProductCard from "../cards/ProductCard";

export default function PopularSection() {
  return (
    <section
      id="products"
      className="container mx-auto min-h-screen px-4 md:px-8 pt-20 gap-10"
    >
      <h2 className="text-4xl sm:text-5xl xl:text-6xl font-sans font-extrabold leading-tight tracking-tight">
        Our <span className="text-emphasis">Popular</span> Products
      </h2>
      <p className="text-description max-w-xl my-6">
        Experience top-notch quality and style with our sought-after selections.
        Discover a world of comfort, design, and value
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-18">
        {PopularShoes.map((shoe, i) => (
          <ProductCard key={i} {...shoe} />
        ))}
      </div>
    </section>
  );
}
