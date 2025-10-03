"use client";
import ArrowIcon from "@/assets/arrow-right.svg";
import cogImage from "@/assets/hero.jpg"; // Ensure this path is correct
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";

export const Hero = () => {
  const heroRef = useRef(null);

  return (
    <section
      ref={heroRef}
      className="pt-8 pb-20 md:pt-5 md:pb-10 bg-white overflow-hidden"
    >
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <div className="tag">Welcome to TINAED INVESTMENTS</div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-r from-green-500 to-yellow-500 text-transparent bg-clip-text mt-6">
              Excellence in Steel Fabrication
            </h1>
            <p className="text-xl text-gray-600 tracking-tight mt-6">
              We are committed to delivering high-quality steel solutions tailored to your needs. 
              Partner with us to achieve your project goals with precision and reliability.
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <button className="bg-[#1A4D2E] text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-800">Get a Free Quote</button>
              <button className="flex items-center gap-1 text-black bg-transparent border border-black px-4 py-2 rounded-lg hover:bg-gray-200">
                <span>Learn More</span>
                <ArrowIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:flex-1 relative" style={{ height: '500px' }}> 
            <motion.div className="relative w-full h-full">
              <Image
                src={cogImage} 
                alt="Cog image"
                layout="fill" 
                objectFit="cover" 
                className="rounded-lg" 
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};