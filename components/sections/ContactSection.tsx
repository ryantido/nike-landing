import { Facebook, Instagram, Twitter } from "lucide-react";
import { Contacts, Help, Products } from "@/constants";
import Image from "next/image";
import Button from "../Button";

export default function ContactSection() {
  return (
    <>
      <section
        id="contact"
        className="container mx-auto px-4 md:px-8 py-28 gap-10 grid md:grid-cols-2"
      >
        <h5 className="text-header">
          Sign Up for <span className="text-emphasis">Updates</span> &
          Newsletter
        </h5>
        <div className="flex items-center max-sm:flex-col max-sm:gap-4 adapter">
          <div className="rounded-full border-2 border-gray-700 flex items-center flex-1 p-2 justify-between max-sm:w-full">
            <input
              type="text"
              placeholder="subscriber@gmail.com"
              className="ml-3 h-12 text-lg outline-0 tracking-wider font-extralight w-2/3 max-sm:w-full"
            />
            <Button label="sign up" className="hidden sm:block will-hide" />
          </div>
          <Button
            label="sign up"
            className="sm:hidden max-sm:w-full will-show"
          />
        </div>
      </section>
      <footer className="py-8 font-sans bg-gray-950 text-gray-50">
        <div className="grid md:grid-cols-3 lg:grid-cols-5 container mx-auto px-4 md:px-8">
          <section className="col-span-full lg:col-span-2 space-y-6">
            <Image
              src="/logo.svg"
              alt="Nike Logo"
              width={150}
              height={150}
              className="object-cover"
            />
            <p className="text-description font-light max-w-sm text-amber-50 dark:text-gray-300">
              Get shoes ready for the new term at your nearest Nike store. Find
              Your perfect Size in Store. Get Rewards
            </p>
            <div className="inline-flex items-center gap-4 mt-3">
              <span className="rounded-full p-3 bg-amber-50">
                {" "}
                <Facebook color="black" />{" "}
              </span>
              <span className="rounded-full p-3 bg-amber-50">
                {" "}
                <Twitter color="black" />{" "}
              </span>
              <span className="rounded-full p-3 bg-amber-50">
                {" "}
                <Instagram color="black" />{" "}
              </span>
            </div>
          </section>
          <section className="max-lg:mt-8 space-y-6">
            <h6 className="text-emphasis text-2xl font-semibold">Products</h6>
            <ul className="list-none space-y-2 font-light tracking-wider">
              {Products.map(({ label }, i) => (
                <li
                  key={i}
                  className="hover:opacity-65 transition-opacity duration-300 cursor-pointer"
                >
                  {label}
                </li>
              ))}
            </ul>
          </section>
          <section className="max-lg:mt-8 space-y-6">
            <h6 className="text-emphasis text-2xl font-semibold">Help</h6>
            <ul className="list-none space-y-2 font-light tracking-wider">
              {Help.map(({ label }, i) => (
                <li
                  key={i}
                  className="hover:opacity-65 transition-opacity duration-300 cursor-pointer"
                >
                  {label}
                </li>
              ))}
            </ul>
          </section>
          <section className="max-lg:mt-8 space-y-6">
            <h6 className="text-emphasis text-2xl font-semibold">
              Get In Touch
            </h6>
            <ul className="list-none space-y-2 font-light tracking-wider">
              {Contacts.map(({ label }, i) => (
                <li
                  key={i}
                  className="hover:opacity-65 transition-opacity duration-300 cursor-pointer"
                >
                  {label}
                </li>
              ))}
            </ul>
          </section>
          <p className="col-span-full flex flex-wrap justify-between max-sm:justify-center text-lg mt-12 select-none">
            <span>© {new Date().getFullYear()} Nike. All rights reserved.</span>
            <span>Terms of Use | Privacy Policy</span>
          </p>
        </div>
      </footer>
    </>
  );
}
