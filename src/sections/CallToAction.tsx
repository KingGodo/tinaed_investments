"use client";
import ArrowRight from "@/assets/arrow-right.svg";
import starImage from "@/assets/star.png";
import springImage from "@/assets/spring.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const CallToAction = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={sectionRef}
      className="bg-white py-24 overflow-hidden" 
    >
      <div className="container text-center">
        <div className="section-heading relative">
          <h2 className="section-title text-4xl font-bold bg-gradient-to-r from-green-500 to-yellow-500 bg-clip-text text-transparent">
            Join Tinaed Investments Today
          </h2>
          <p className="section-description mt-5 text-lg text-gray-600">
            Experience the power of personalized steel solutions. Sign up now to start your journey!
          </p>
          <motion.img
            src={starImage.src}
            alt="Star Image"
            width={360}
            className="absolute -left-[350px] -top-[137px] opacity-50"
            style={{
              translateY,
            }}
          />
          <motion.img
            src={springImage.src}
            alt="Spring Image"
            width={360}
            className="absolute -right-[331px] -top-[19px] opacity-50"
            style={{
              translateY,
            }}
          />
        </div>
        <div className="flex gap-4 mt-10 justify-center">
          <button className="btn btn-primary bg-green-500 text-white hover:bg-green-600 transition duration-300 px-6 py-3 rounded-lg shadow-md">
            Get Started for Free
          </button>
          <button className="btn btn-text flex items-center gap-1 border border-transparent hover:border-gray-300 transition duration-300 px-4 py-2 rounded-lg">
            <span className="text-gray-800">Learn More</span>
            <ArrowRight className="h-5 w-5 text-gray-800" />
          </button>
        </div>
      </div>
    </section>
  );
};