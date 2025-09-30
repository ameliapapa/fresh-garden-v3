"use client";

import React, { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import freshGardenLogo from "@/assets/fresh_garden_logo.png";

const imgChevronDown = "http://localhost:3845/assets/ca0326a72c30200fcce53ffc9908e2444e5b4593.svg";

function CompanyLogo() {
  return (
    <div className="relative size-full">
      <div className="absolute h-[82px] left-0 top-[0.33px] w-[85px]">
        <img alt="Fresh Garden Logo" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={freshGardenLogo.src} />
      </div>
    </div>
  );
}

export function Navbar13() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.div
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 box-border flex flex-col items-center justify-center pb-0 pt-[24px] px-0 w-full bg-transparent"
    >
      <div className="bg-[#172815] box-border flex flex-col h-[72px] items-center justify-center px-[32px] py-0 relative rounded-[40px] shrink-0">
        <div aria-hidden="true" className="absolute border-0 border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[40px]" />
        <div className="flex gap-[16px] items-center relative shrink-0 w-full">
          <div className="flex gap-[24px] items-center relative shrink-0">
            <div className="h-[82px] overflow-clip relative shrink-0 w-[85px]">
              <CompanyLogo />
            </div>
          </div>
          <div className="flex gap-[32px] items-center relative shrink-0">
            <a href="/" className="flex gap-[4px] items-center justify-center relative shrink-0 no-underline">
              <div className="font-['Fira_Code',_monospace] font-normal text-[16px] text-white whitespace-pre leading-[1.5]">
                Home
              </div>
            </a>
            <a href="/contact" className="flex gap-[4px] items-center justify-center relative shrink-0 no-underline">
              <div className="font-['Fira_Code',_monospace] font-normal text-[16px] text-white whitespace-pre leading-[1.5]">
                Contact Us
              </div>
            </a>
            <a href="/assets/Wine_menu_FreshGardenRestaurant.pdf" target="_blank" rel="noopener noreferrer" className="flex gap-[4px] items-center justify-center relative shrink-0 no-underline">
              <div className="font-['Fira_Code',_monospace] font-normal text-[16px] text-white whitespace-pre leading-[1.5]">
                Wine List
              </div>
            </a>
            <div className="relative flex flex-col gap-[4px] items-start shrink-0 w-[94px]">
              <button
                className="flex gap-[4px] items-center justify-center relative shrink-0 w-full bg-transparent border-none cursor-pointer p-0"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <div className="font-['Fira_Code',_monospace] font-normal text-[16px] text-white whitespace-pre leading-[1.5]">
                  Menu
                </div>
                <div className="relative shrink-0 size-[24px]">
                  <img alt="Dropdown" className="block max-w-none size-full" src={imgChevronDown} />
                </div>
              </button>
              {isDropdownOpen && (
                <div className="absolute top-full mt-2 left-0 bg-[#172815] rounded-[12px] border border-[rgba(255,255,255,0.2)] p-4 min-w-[160px] z-50">
                  <a href="/assets/menu_albanian.pdf" target="_blank" rel="noopener noreferrer" className="block py-2 px-3 text-white hover:bg-[#3e5622] rounded-[8px] no-underline font-['Fira_Code',_monospace] text-[14px]">
                    Shqip
                  </a>
                  <a href="/assets/menu_english.pdf" target="_blank" rel="noopener noreferrer" className="block py-2 px-3 text-white hover:bg-[#3e5622] rounded-[8px] no-underline font-['Fira_Code',_monospace] text-[14px]">
                    English
                  </a>
                </div>
              )}
            </div>
          </div>
          <button className="bg-[#3e5622] box-border flex gap-[8px] items-center justify-center px-[20px] py-[8px] relative rounded-[12px] shrink-0 border border-[#172815] cursor-pointer">
            <div className="font-['Fira_Code',_monospace] font-medium text-[16px] text-white whitespace-pre leading-[1.5]">
              Reserve
            </div>
          </button>
        </div>
      </div>
    </motion.div>
  );
}