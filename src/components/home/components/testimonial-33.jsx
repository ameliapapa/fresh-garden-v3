"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

// Figma assets
const imgStars = "http://localhost:3845/assets/487ff792061bc4aa201b4b1ec1ca3db1c610b822.svg";
const imgVector = "http://localhost:3845/assets/3684fa8d381d2f38c4bc7478732a63f226b91b8c.svg";

const useAnimation = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const isMobile = useMediaQuery("(max-width: 767px)");

  const leftCardsMobile = useTransform(
    scrollYProgress,
    [0, 1],
    ["20vh", "-70vh"],
  );
  const leftCardsDesktop = useTransform(
    scrollYProgress,
    [0, 1],
    ["-10rem", "5rem"],
  );
  const rightCardsMobile = useTransform(
    scrollYProgress,
    [0, 1],
    ["20vh", "-70vh"],
  );
  const rightCardsDesktop = useTransform(
    scrollYProgress,
    [0, 1],
    ["10rem", "-5rem"],
  );

  const leftCards = isMobile ? leftCardsMobile : leftCardsDesktop;
  const rightCards = isMobile ? rightCardsMobile : rightCardsDesktop;

  return {
    sectionRef,
    leftCards,
    rightCards,
  };
};

export function Testimonial33() {
  const animationState = useAnimation();
  return (
    <section
      ref={animationState.sectionRef}
      className="bg-[#31441b] overflow-hidden px-16 py-20"
    >
      <div className="bg-[#172815] container mx-auto grid min-h-[900px] max-w-[1280px] auto-cols-fr grid-cols-1 rounded-lg border-0 border-[rgba(255,255,255,0.2)] lg:h-[900px] lg:min-h-[auto] lg:grid-cols-[560px_1fr] lg:overflow-hidden">
        <div className="flex flex-col justify-center p-12">
          <div>
            <h2 className="font-heading text-[56px] leading-[1.2] tracking-[-0.56px] mb-6 text-white">
              Customer testimonials
            </h2>
            <p className="font-body text-[18px] leading-[1.5] text-white">
              Our guests rave about the experience, food, and ambiance at Fresh Garden!
            </p>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <button className="bg-[#3e5622] border-none rounded-[12px] px-6 py-2.5 cursor-pointer">
              <span className="font-body text-[16px] leading-[1.5] font-medium text-white">Read</span>
            </button>
            <button className="bg-transparent border-none cursor-pointer flex items-center gap-2">
              <span className="font-body text-base font-medium text-white">Reserve</span>
              <div className="w-6 h-6 relative">
                <div className="absolute inset-[25.72%_36.66%_25.88%_35.46%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector} />
                </div>
              </div>
            </button>
          </div>
        </div>
        <div className="grid h-[900px] auto-cols-fr grid-cols-1 content-center items-center gap-4 overflow-hidden px-4 md:grid-cols-2 md:px-8 lg:border-none lg:pr-8 lg:pl-0">
          <motion.div
            className="grid size-full columns-2 auto-cols-fr grid-cols-1 gap-4 self-center"
            style={{ y: animationState.leftCards }}
          >
            <div className="grid size-full auto-cols-fr grid-cols-1 content-center gap-4">
              <TestimonialCard
                quote="The best Mediterranean food I've ever had! Highly recommend the lamb dishes!"
              />
              <TestimonialCard
                quote="Great food with creative and delicious vegetarian and vegan options!"
              />
              <TestimonialCard
                quote="Great food, nice environment, excellent service."
              />
              <TestimonialCard
                quote="Best place we have been to in Tirana."
              />
              <TestimonialCard
                quote="Every dish is a work of art. Truly a culinary gem!"
              />
            </div>
          </motion.div>
          <motion.div
            className="grid size-full auto-cols-fr grid-cols-1 gap-4"
            style={{ y: animationState.rightCards }}
          >
            <div className="grid size-full auto-cols-fr grid-cols-1 content-center gap-4">
              <TestimonialCard
                quote="Fresh, high-quality ingredients shine in every dish, and the presentation is impeccable."
              />
              <TestimonialCard
                quote="Very nice restaurant with delicious food, good wines and great service"
              />
              <TestimonialCard
                quote="A hidden gem! The quality of food is outstanding!"
              />
              <TestimonialCard
                quote="I always leave satisfied. The portions are generous and delicious!"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const TestimonialCard = ({ quote, name, role, showAvatar }) => (
  <div className="bg-scheme-2-fg flex w-full flex-col items-start justify-between p-8 rounded-md">
    <div className="mb-6">
      <div className="mb-4 h-6 w-[140.329px]">
        <img alt="5 stars" className="block max-w-none size-full" src={imgStars} />
      </div>
      <blockquote className="font-body text-lg text-white leading-[1.5]">
        "{quote}"
      </blockquote>
    </div>
    <div className="flex w-full items-center gap-4">
      {showAvatar && (
        <img
          src={imgAvatarImage}
          alt={name}
          className="size-14 min-h-14 min-w-14 rounded-full object-cover"
        />
      )}
      <div className="flex flex-col items-start">
        <p className="font-body text-base font-semibold text-white">{name}</p>
        {role && <p className="font-body text-base text-white">{role}</p>}
      </div>
    </div>
  </div>
);
