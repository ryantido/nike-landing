import { PopularShoes } from "@/constants/popular-shoes";
import ProductCard from "../cards/ProductCard";
import Button from "../Button";
import Image from "next/image";
import { qualityItems } from "@/constants/quality-items";
import QualityCard from "../cards/QualityCard";
import { CircleArrowRight } from "lucide-react";

export default function PopularSection() {
  return (
    <section id="products">
      <section className="container mx-auto px-4 md:px-8 mt-20 xl:pt-0 xl:py-20 gap-10">
        <h2 className="text-4xl sm:text-5xl xl:text-6xl font-sans font-extrabold leading-tight tracking-tight">
          Our <span className="text-emphasis">Popular</span> Products
        </h2>
        <p className="text-description max-w-xl my-6">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-18">
          {PopularShoes.map((shoe, i) => (
            <ProductCard key={i} {...shoe} />
          ))}
        </div>
      </section>
      <section className="container mx-auto px-4 md:px-8 gap-10 mt-16">
        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          <div className="relative">
            <h3 className="text-header leading-tight capitalize">
              We provide the <span className="text-emphasis">best quality</span>{" "}
              products
            </h3>
            <p className="text-description my-8 leading-tight max-w-xl">
              Ensuring premium comfort and style, our meticulously crafted
              footwear is designed to elevate your experience, providing you
              with unmatched quality, innovation, and a touch of elegance.
            </p>
            <p className="text-description mb-6">
              Our dedication to detail and excellence ensures your satisfaction.
            </p>
            <Button label="View details" />
          </div>
          <div className="relative flex items-center justify-center overflow-hidden rounded-lg min-h-[300px] md:min-h-[400px]">
            <Image
              src="/varun-dubey-JXsKGVVuZXc-unsplash.jpg"
              className="object-cover object-center hover:scale-110 transition-transform duration-500 ease-in-out"
              alt="Best selling product"
              fill
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-18">
          {qualityItems.map((item, i) => (
            <QualityCard key={i} {...item} />
          ))}
        </div>
      </section>
      <section className="container mx-auto px-4 md:px-8 my-20 grid lg:grid-cols-2 gap-8 items-center">
        <div className="grid grid-cols-2 gap-3 lg:gap-4">
          <Image
            src="/hamza-nouasria-x_XDSQODS54-unsplash.jpg"
            alt="alt image"
            width={500}
            height={500}
            className="object-cover object-center h-72 w-full rounded-2xl hover:scale-[1.02] transition-transform duration-300"
          />
          <Image
            src="/hamza-nouasria-ksrsdzqxCPg-unsplash.jpg"
            alt="alt image"
            width={500}
            height={500}
            className="object-cover object-center h-72 w-full rounded-2xl hover:scale-[1.02] transition-transform duration-300"
          />
          <Image
            src="/sanju-pandita-36MiHf2KKr8-unsplash.jpg"
            alt="alt image"
            width={1000}
            height={500}
            className="object-cover object-center col-span-2 w-full h-52 rounded-2xl hover:scale-[1.02] transition-transform duration-300"
          />
        </div>

        <div className="space-y-6 flex flex-col justify-center">
          <h4 className="max-md:text-3xl font-semibold capitalize text-header">
            <span className="text-emphasis">Special</span> offer
          </h4>

          <p className="text-description dark:text-gray-300 max-w-[600px]">
            Embark on a shopping journey that redefines your experience with
            unbeatable deals. From premier selections to incredible savings, we
            offer unparalleled value that sets us apart.
          </p>

          <p className="text-description dark:text-gray-300 max-w-[600px]">
            Navigate a realm of possibilities designed to fulfill your unique
            desires, surpassing the loftiest expectations. Your journey with us
            is nothing short of exceptional.
          </p>

          <div className="flex max-[387px]:flex-col gap-4 mt-6">
            <Button icon={CircleArrowRight} />
            <Button
              label="Learn more"
              className="bg-background border-2 border-gray-700 text-gray-700 dark:text-gray-50 
            dark:border-gray-50 hover:bg-gray-100/20 transition-all"
            />
          </div>
        </div>
      </section>
    </section>
  );
}
