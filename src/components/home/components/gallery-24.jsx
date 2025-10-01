"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef, useState } from "react";

const useRelume = () => {
  const transformRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: transformRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  return {
    transformRef,
    x,
  };
};

export function Gallery24() {
  const useScroll = useRelume();
  return (
    <section ref={useScroll.transformRef} className="bg-[#172815]">
      <div className="h-[400vh]">
        <div className="sticky top-0 mt-[-10vh] flex h-screen w-screen max-w-full flex-col items-start justify-center overflow-hidden px-16 md:mt-0">
          <motion.div
            style={{ x: useScroll.x }}
            className="flex w-[150vh] items-center gap-x-6 sm:w-[200vh] md:gap-x-8 lg:w-[400vh]"
          >
            <a className="inline-block max-w-full">
              <div className="relative size-full max-w-full overflow-hidden">
                <img
                  className="h-[80vh] max-h-[25rem] rounded-[40px] object-cover sm:max-h-[30rem] sm:w-[90vw] md:max-h-[40rem] md:w-[80vw] lg:max-h-none"
                  src="/assets/images/yuzu_cheesecake.jpg"
                  alt="Yuzu Cheesecake"
                />
              </div>
            </a>
            <a className="inline-block max-w-full">
              <div className="relative size-full max-w-full overflow-hidden">
                <img
                  className="h-[80vh] max-h-[25rem] rounded-[40px] object-cover sm:max-h-[30rem] sm:w-[90vw] md:max-h-[40rem] md:w-[80vw] lg:max-h-none"
                  src="/assets/images/interior_freshgarden.jpg"
                  alt="Interior Fresh Garden Restaurant"
                />
              </div>
            </a>
            <a className="inline-block max-w-full">
              <div className="relative size-full max-w-full overflow-hidden">
                <img
                  className="h-[80vh] max-h-[25rem] rounded-[40px] object-cover sm:max-h-[30rem] sm:w-[90vw] md:max-h-[40rem] md:w-[80vw] lg:max-h-none"
                  src="/assets/images/fiorentina_steak.jpg"
                  alt="Fiorentina Steak"
                />
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
