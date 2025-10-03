"use client";
import productImage from "@/assets/product-image.jpeg";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ProductShowcase = () => {
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
      <div className="container">
        <div className="section-heading text-center">
          <div className="tag">Elevate Your Steel Solutions</div>
          <h2 className="section-title mt-5 text-3xl font-bold text-transparent bg-gradient-to-r from-green-500 to-yellow-500 bg-clip-text">
            Transforming Ideas into Steel Reality
          </h2>
          <p className="section-description mt-5 text-gray-600">
            Experience unparalleled quality and precision in steel fabrication. 
            Our solutions are designed to meet the diverse needs of your projects.
          </p>
        </div>
        <div className="relative flex justify-center mt-10"> 
          <Image 
            src={productImage} 
            alt="Product Image" 
            className="rounded-lg" 
            height={600}
            width={800} 
          />
          <motion.img
            src={pyramidImage.src}
            alt="Pyramid Image"
            height={262}
            width={262}
            className="hidden md:block absolute -right-36 -top-32"
            style={{
              translateY,
              borderRadius: 20,
            }}
          />
          <motion.img
            src={tubeImage.src}
            alt="Tube image"
            height={248}
            width={248}
            className="hidden md:block absolute bottom-24 -left-36"
            style={{
              translateY,
            }}
          />
        </div>
      </div>
    </section>
  );
};