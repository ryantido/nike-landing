"use client";

import { CircleArrowRight } from "lucide-react";
import Button from "../Button";
import { stats } from "@/constants/statistiques";
import CountUp from "react-countup";
import Image from "next/image";
import ShoeCard from "../cards/ShoeCard";
import { shoes } from "@/constants/hero-shoes";
import { useState } from "react";

export default function HeroSection() {
  const [name, setName] = useState<string>("/nike1.png");
  const onChange = (name: string) => setName(name);

  return (
    <section
      id="hero"
      className="container mx-auto min-h-screen flex flex-col xl:flex-row items-center justify-between px-4 md:px-8 pt-20 gap-10"
    >
      <div className="xl:w-[45%] flex flex-col justify-center items-start text-left z-20 space-y-6">
        <h1 className="text-5xl sm:text-7xl xl:text-8xl font-extrabold leading-tight tracking-tight font-sans">
          <span className="relative z-10 pr-3 dark:text-slate-950 bg-gradient-to-r from-white to-gray-100 inline-block rounded-md">
            The New Arrival
          </span>
          <br />
          <span className="text-red-500 inline-block mt-2">Nike</span> Shoes
        </h1>

        <h2 className="font-semibold text-lg sm:text-xl text-red-400 tracking-wide">
          Our Summer Collections
        </h2>

        <p className="text-gray-700  dark:text-gray-300 text-lg leading-relaxed max-w-md font-medium">
          Discover stylish Nike arrivals — blending comfort, design, and
          performance for your everyday lifestyle.
        </p>

        <Button icon={CircleArrowRight} />

        <div className="flex flex-wrap gap-10 mt-10">
          {stats.map(({ value, count, label }, i) => (
            <div key={i} className="flex flex-col items-start">
              <span className="text-4xl sm:text-5xl font-extrabold text-slate-800  dark:text-gray-200">
                <CountUp
                  delay={1}
                  end={value}
                  suffix={count}
                  enableScrollSpy
                  scrollSpyOnce
                />
              </span>
              <span className="text-gray-600 dark:text-gray-400 font-semibold">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="xl:flex-1 flex flex-col items-center justify-center relative w-full">
        <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-lg bg-gradient-to-br from-blue-500 via-blue-400 to-indigo-500 flex items-center justify-center">
          <Image
            src={name}
            alt={`Selected Nike shoe - ${name}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain object-center drop-shadow-2xl transition-transform duration-700 ease-in-out hover:scale-105"
            priority
          />
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          {shoes.map(({ url }, i) => (
            <ShoeCard
              key={i}
              url={url}
              name={name}
              onChange={() => onChange(url)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
