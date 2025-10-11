import { Star } from "lucide-react";
import Image from "next/image";

export default function ProductCard({
  name,
  image,
  price,
  rating,
}: {
  name: string;
  image: string;
  price: number;
  rating: number;
}) {
  return (
    <div className="border-2 border-gray-950 dark:border-gray-50 rounded-2xl shadow-lg">
      <div className="relative overflow-hidden h-56">
        <Image
          src={image}
          alt={name}
          fill
          loading="lazy"
          className="object-cover object-center rounded-t-2xl 
        group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <section className="space-y-4 p-4">
        <h3 className="text-2xl font-semibold mt-2">{name}</h3>
        <p className="flex items-center justify-between">
          <span className="text-red-400 text-xl font-mono font-semibold">
            ${price}
          </span>
          <span className="text-description inline-flex items-center gap-2">
            <Star className="text-emphasis w-5 h-5" /> {rating}
          </span>
        </p>
      </section>
    </div>
  );
}
