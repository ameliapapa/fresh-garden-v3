"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import chevronRight from "@/assets/Layout/518/chevron_right.svg";

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
            <a href="https://www.google.com/maps/place/Fresh+Garden+Restaurant/@41.3223598,19.8139672,16z/data=!4m16!1m9!3m8!1s0x1350311ddad4dfe3:0x924dcbbf107c4aca!2sFresh+Garden+Restaurant!8m2!3d41.3222497!4d19.8165136!9m1!1b1!16s%2Fg%2F11h10w5fhh!3m5!1s0x1350311ddad4dfe3:0x924dcbbf107c4aca!8m2!3d41.3222497!4d19.8165136!16s%2Fg%2F11h10w5fhh?entry=ttu&g_ep=EgoyMDI1MDkyOC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="bg-[#3e5622] border-none rounded-[12px] px-6 py-2.5 cursor-pointer no-underline inline-block">
              <span className="font-body text-[16px] leading-[1.5] font-medium text-white">Read</span>
            </a>
            <a href="https://app.tableo.com/widget/fresh-garden-restaurant-albania?bgColor=%23ffffff&textColor=%23000000&googleFont=Default+Font&fontSize=14&cornerStyle=none&textAlignment=left&formControlBgColor=%23ffffff&formControlColor=%23000000&formControlBorderColor=%23444444&formControlBorderShadow=6&formControlBorderWidth=1&formControlBorderOpacity=0.1&buttonBgColor=%23000000&buttonTextColor=%23ffffff" target="_blank" rel="noopener noreferrer" className="bg-transparent border-none cursor-pointer flex items-center gap-2 no-underline">
              <span className="font-body text-base font-medium text-white">Reserve</span>
              <img src={chevronRight.src} alt="" className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="grid h-[900px] auto-cols-fr grid-cols-1 content-center items-center gap-4 overflow-hidden px-4 md:grid-cols-2 md:px-8 lg:border-none lg:pr-8 lg:pl-0">
          <motion.div
            className="grid size-full columns-2 auto-cols-fr grid-cols-1 gap-4 self-center"
            style={{ y: animationState.leftCards }}
          >
            <div className="grid size-full auto-cols-fr grid-cols-1 content-center gap-4">
              <TestimonialCard
                quote="The cauliflower dish and bread were delicious! The waiter super friendly."
              />
              <TestimonialCard
                quote="Everything is perfect: the decor, the varied food, the fast and attentive service, the vegetarian and non-vegetarian dishes!"
              />
              <TestimonialCard
                quote="Great food, nice environment, excellent service."
              />
              <TestimonialCard
                quote="It is hard to find something not to like."
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
      <div className="mb-4 flex gap-1">
        {[...Array(5)].map((_, i) => (
          <svg key={i} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L14.09 8.26L20 10L14.09 11.74L12 18L9.91 11.74L4 10L9.91 8.26L12 2Z" fill="#FFD700"/>
          </svg>
        ))}
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
