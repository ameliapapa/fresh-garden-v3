"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useMediaQuery } from "../../../hooks/use-media-query";
import chevronRight from "@/assets/Layout/518/chevron_right.svg";
import chevronRightBlack from "@/assets/Layout/518/chevron_right_black.svg";

// Assets
const imgCard = "/assets/images/balcony_closeup.jpg";
const imgCard1 = "/assets/images/background_texture.png";
const img = chevronRightBlack;
const img1 = chevronRight;

export const Layout518 = (props) => {
  const { image, tagline, heading, description, buttons, cards } = {
    ...Layout518Defaults,
    ...props,
  };

  const isMobile = useMediaQuery("(max-width: 991px)");
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heroWidth = useTransform(scrollYProgress, [0, 1], ["100vw", "55vw"]);
  const scaleHeight = useTransform(scrollYProgress, [0, 1], ["100vh", "90vh"]);
  const position = useTransform(scrollYProgress, [0, 1], ["-5%", "0%"]);
  const cardsXPosition = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
  const cardsWidth = useTransform(scrollYProgress, [0, 1], ["100vw", "35vw"]);

  const motionHeroStyles = {
    width: heroWidth,
    height: scaleHeight,
    y: position,
    x: position,
  };

  const motionCardsStyles = {
    width: cardsWidth,
    height: scaleHeight,
    y: position,
    x: cardsXPosition,
  };

  if (isMobile) {
    return (
      <section id="relume" className="relative bg-[#31441b] px-[5%] pt-[120px] pb-16">
        <div className="relative mb-8 flex items-center justify-center overflow-hidden rounded-[40px] px-6 py-20 md:mb-12 md:px-8 md:py-28">
          <HeroContent />
        </div>
        <div className="grid grid-cols-1 gap-y-8 md:gap-y-12">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`flex rounded-[40px] p-6 text-center md:p-8 ${
                index === 0
                  ? 'bg-[#F5F5F0] bg-cover bg-center'
                  : 'border-0 border-[rgba(255,255,255,0.2)] bg-[#122010]'
              }`}
              style={index === 0 ? { backgroundImage: `url(${imgCard1})` } : undefined}
            >
              <CardContent card={card} variant="mobile" isMenuCard={index === 0} />
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section
      id="relume"
      ref={containerRef}
      className="relative bg-[#31441b] pt-[120px] pb-16 lg:h-[250vh] lg:py-0"
    >
      <div className="mx-auto w-[90vw] lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-full lg:items-center lg:justify-center lg:overflow-hidden">
        <div className="grid grid-cols-1 gap-y-6 md:gap-y-8 lg:h-[90vh] lg:w-[90vw] lg:grid-cols-[55vw_35vw] lg:gap-y-0">
          <motion.div
            style={motionHeroStyles}
            className="relative flex items-center justify-center overflow-hidden px-6 py-16 md:px-8 md:py-24 lg:p-3"
          >
            <HeroContent />
          </motion.div>
          <motion.div
            style={motionCardsStyles}
            className="grid grid-cols-1 gap-y-6 md:gap-y-8 lg:pl-8"
          >
            {cards.map((card, index) => (
              <AnimatedCard
                key={index}
                card={card}
                index={index}
                scrollYProgress={scrollYProgress}
                isMenuCard={index === 0}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const HeroContent = () => (
  <>
    <div className="relative z-10 flex w-full max-w-content-md items-center justify-center">
      <h1 className="font-heading text-[32px] leading-[1.2] tracking-[-0.32px] text-center text-white md:text-[40px] md:tracking-[-0.4px] lg:text-[48px] lg:tracking-[-0.48px]">
        Fresh Garden Restaurant
      </h1>
    </div>
    <div className="absolute inset-0 z-0 rounded-[40px]">
      <img src={imgCard} className="size-full rounded-[40px] object-cover" alt="Fresh Garden Restaurant" />
      <div className="absolute inset-0 rounded-[40px] bg-black/50" />
    </div>
  </>
);

// (CardContent, AnimatedCard, and Layout518Defaults remain unchanged)

const CardContent = ({
  card,
  variant = "mobile",
  isMenuCard = false,
}) => (
  <div className="z-10 mx-auto flex max-w-md flex-col items-center justify-center lg:max-w-full">
    <h3 className={`mb-3 text-center font-heading text-[28px] leading-[1.2] tracking-[-0.28px] md:mb-4 md:text-[32px] md:tracking-[-0.32px] lg:text-[40px] lg:tracking-[-0.4px] ${isMenuCard ? 'text-black' : 'text-white'}`}>
      {card.heading}
    </h3>
    <p className={`text-center font-body text-[14px] leading-[1.5] md:text-[16px] ${isMenuCard ? 'text-black' : 'text-white'}`}>
      {card.description}
    </p>
    <div className="mt-5 flex items-center gap-4 md:mt-6 md:gap-6">
      {isMenuCard ? (
        <>
          <button className="flex cursor-pointer items-center justify-center gap-1.5 rounded-sm border-none bg-transparent p-0 md:gap-2">
            <span className="font-body text-[14px] leading-[1.5] font-medium text-black md:text-[16px]">
              Shqip
            </span>
            <img src={img.src} alt="" className="w-[20px] h-[20px] md:w-[24px] md:h-[24px]" />
          </button>
          <button className="flex cursor-pointer items-center justify-center gap-1.5 rounded-sm border-none bg-transparent p-0 md:gap-2">
            <span className="font-body text-[14px] leading-[1.5] font-medium text-black md:text-[16px]">
              English
            </span>
            <img src={img.src} alt="" className="w-[20px] h-[20px] md:w-[24px] md:h-[24px]" />
          </button>
        </>
      ) : (
        <button className="flex cursor-pointer items-center justify-center gap-1.5 rounded-sm border-none bg-transparent p-0 md:gap-2">
          <span className="font-body text-[14px] leading-[1.5] font-medium text-white md:text-[16px]">
            Wine List
          </span>
          <img src={img1.src} alt="" className="w-[20px] h-[20px] md:w-[24px] md:h-[24px]" />
        </button>
      )}
    </div>
  </div>
);

const AnimatedCard = ({
  card,
  index,
  scrollYProgress,
  isMenuCard = false,
}) => {
  const x = useTransform(
    scrollYProgress,
    [0, index * 0.01, 0.2 + index * 0.5, 1],
    ["100%", "100%", "0%", "0%"],
  );
  return (
    <motion.div
      style={{
        x,
        backgroundImage: isMenuCard ? `url(${imgCard1})` : undefined,
      }}
      className={`relative flex overflow-hidden rounded-[40px] p-8 text-center lg:max-w-[640px] ${
        isMenuCard
          ? 'bg-[#F5F5F0] bg-cover bg-center'
          : 'border border-[rgba(255,255,255,0.2)] bg-[#122010]'
      }`}
    >
      <CardContent card={card} variant="desktop" isMenuCard={isMenuCard} />
    </motion.div>
  );
};

export const Layout518Defaults = {
  heading: "Fresh Garden Restaurant",
  cards: [
    {
      heading: "Our Menu",
      description:
        "Discover our diverse selection of Mediterranean dishes crafted with love and fresh ingredients.",
    },
    {
      heading: "Wine Selection",
      description:
        "Pair your meal with our exquisite selection of European and local wines.",
    },
  ],
};
