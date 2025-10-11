import { Testimonials } from "@/constants/testimonials";
import { StarIcon } from "lucide-react";
import Image from "next/image";

export default function TestimonialSection() {
  return (
    <section
      id="testimonials"
      className="section-container min-h-fit space-y-6"
    >
      <h5 className="text-header capitalize">
        What our <span className="text-emphasis">customers</span> say
      </h5>
      <p className="text-description max-w-xl">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {Testimonials.map(({ name, description, rate, image }, i) => (
          <div
            className="p-4 space-y-5 rounded-lg bg-amber-50 border border-gray-200 shadow"
            key={i}
          >
            <div className="flex gap-3 items-center">
              <Image
                src={image}
                alt={`${name} testimonial`}
                height={90}
                width={90}
                className="rounded-full object-cover h-16 w-16 object-center shadow-lg"
              />
              <div>
                <h5 className="text-2xl font-semibold capitalize text-gray-900">
                  {name}
                </h5>
                <span className="inline-flex gap-2 items-center text-emphasis">
                  <StarIcon className="w-4 h-4" /> {rate}
                </span>
              </div>
            </div>
            <p className="text-description text-gray-700">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
