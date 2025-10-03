"use client";
import avatar1 from "@/assets/user.png"; 
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

const testimonials = [
  {
    text: "Our students have greatly benefitted from the new resources provided. Engagement has never been higher!",
    imageSrc: avatar1.src,
    name: "Lincoln High School",
    username: "@lincolnhigh",
  },
  {
    text: "This program has transformed our curriculum and enhanced student learning outcomes.",
    imageSrc: avatar1.src,
    name: "Riverside Academy",
    username: "@riverside_academy",
  },
  {
    text: "An invaluable tool for our teachers. It has streamlined our educational processes significantly.",
    imageSrc: avatar1.src,
    name: "Greenwood School District",
    username: "@greenwoodsd",
  },
  {
    text: "We have seen a remarkable improvement in collaboration among students and teachers.",
    imageSrc: avatar1.src,
    name: "Westview High School",
    username: "@westviewhs",
  },
  {
    text: "The resources provided have made lesson planning so much easier and more effective.",
    imageSrc: avatar1.src,
    name: "Maple Leaf Academy",
    username: "@mapleleafacademy",
  },
  {
    text: "Our faculty and students love using this tool every day. It’s a game changer!",
    imageSrc: avatar1.src,
    name: "Sunnydale High",
    username: "@sunnydalehigh",
  },
  {
    text: "The support we’ve received has been outstanding, making our transition seamless.",
    imageSrc: avatar1.src,
    name: "Hillside Academy",
    username: "@hillsideacademy",
  },
  {
    text: "A fantastic addition to our educational toolkit, helping us achieve our goals.",
    imageSrc: avatar1.src,
    name: "Cedarwood High School",
    username: "@cedarwoodhigh",
  },
  {
    text: "We highly recommend this program to schools looking to enhance their teaching methods.",
    imageSrc: avatar1.src,
    name: "Pine Valley Institute",
    username: "@pinevalleyinst",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => (
  <div className={props.className}>
    <motion.div
      animate={{
        translateY: "-50%",
      }}
      transition={{
        duration: props.duration || 10,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
      }}
      className="flex flex-col gap-6 pb-6"
    >
      {[...new Array(2)].fill(0).map((_, index) => (
        <React.Fragment key={index}>
          {props.testimonials.map(({ text, imageSrc, name, username }) => (
            <div className="card" key={name}>
              <div>{text}</div>
              <div className="flex items-center gap-2 mt-5">
                <Image
                  src={imageSrc}
                  alt={name}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full"
                />
                <div className="flex flex-col">
                  <div className="font-medium tracking-tight leading-5">{name}</div>
                  <div className="leading-5 tracking-tight">{username}</div>
                </div>
              </div>
            </div>
          ))}
        </React.Fragment>
      ))}
    </motion.div>
  </div>
);

export const Testimonials = () => {
  return (
    <section className="bg-white">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Testimonials</div>
          </div>
          <h3 className="section-title txt-4xl mt-5 bg-gradient-to-r from-green-500 to-yellow-500 bg-clip-text text-transparent">What Our Clients Say</h3>
          <p className="section-description mt-5">
            Discover how our program has positively impacted schools and their students.
          </p>
        </div>
        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
};