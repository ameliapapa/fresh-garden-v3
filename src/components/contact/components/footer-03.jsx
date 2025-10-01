"use client";

import React from "react";
import { BiLogoInstagram } from "react-icons/bi";
import freshGardenLogo from "@/assets/fresh_garden_logo.png";

export function Footer3() {
  return (
    <footer className="bg-[#31441b] px-[5%] py-12 md:py-16 lg:py-20">
      <div className="container mx-auto max-w-[1280px] text-white">
        <div className="grid grid-cols-1 gap-x-[4vw] gap-y-8 pb-8 md:gap-y-12 md:pb-12 lg:grid-cols-[1fr_0.5fr] lg:gap-y-4 lg:pb-20">
          <div>
            <div className="mb-6 md:mb-8">
              <a href="#">
                <img
                  src={freshGardenLogo.src}
                  alt="Fresh Garden Logo"
                  className="inline-block w-[85px] h-[82px]"
                />
              </a>
            </div>
            <div className="mb-6 md:mb-8">
              <p className="text-sm mb-1 font-semibold">Address:</p>
              <p className="text-sm mb-4 md:mb-6">
                Rruga Brigada VIII Ndertesa 8, H16, Ap1 Tiranë 1019, Albania
              </p>
              <p className="text-sm mb-1 font-semibold">Contact:</p>
              <a
                href="tel:+355672040737"
                className="text-sm block underline"
              >
                +355 672040737
              </a>
            </div>
            <div className="grid grid-flow-col grid-cols-[max-content] items-start justify-start gap-x-3">
              <a href="https://www.instagram.com/freshgardenrestaurant/" target="_blank" rel="noopener noreferrer">
                <BiLogoInstagram className="size-6" />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start gap-x-6 gap-y-6 md:grid-cols-2 md:gap-x-8 md:gap-y-4">
            <ul>
              <li className="text-sm py-1.5 font-semibold">
                <a href="/contact">Contact Us</a>
              </li>
              <li className="text-sm py-1.5 font-semibold">
                <a href="/assets/documents/menu_albanian.pdf" target="_blank" rel="noopener noreferrer">Menu Shqip</a>
              </li>
            </ul>
            <ul>
              <li className="text-sm py-1.5 font-semibold">
                <a href="/assets/documents/menu_english.pdf" target="_blank" rel="noopener noreferrer">English Menu</a>
              </li>
              <li className="text-sm py-1.5 font-semibold">
                <a href="/assets/documents/Wine_menu_FreshGardenRestaurant.pdf" target="_blank" rel="noopener noreferrer">Wine List</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="h-px w-full bg-white/20" />
        <div className="text-sm flex flex-col-reverse items-start justify-between pt-6 pb-4 md:flex-row md:items-center md:pt-8 md:pb-0">
          <p className="mt-6 md:mt-0">© 2025 Fresh Garden Restaurant. All rights reserved.</p>
          <ul className="text-sm grid grid-flow-row grid-cols-[max-content] justify-start gap-y-3 md:grid-flow-col md:gap-x-6 md:gap-y-0">
            <li className="underline">
              <a href="#">Privacy Policy</a>
            </li>
            <li className="underline">
              <a href="#">Terms of Service</a>
            </li>
            <li className="underline">
              <a href="#">Cookies Settings</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
