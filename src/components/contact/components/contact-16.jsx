"use client";

import React from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";

const imgPlaceholderImage = "http://localhost:3845/assets/2a6354c57c6b0d54922805cb60313905a793bc74.png";

export function Contact16() {
  return (
    <section className="bg-[#31441b] px-[64px] py-[112px]">
      <div className="container mx-auto max-w-[1280px]">
        <div className="mb-[80px] flex gap-[80px]">
          <div className="flex-1 flex flex-col gap-4">
            <div className="flex items-center">
              <p className="font-body font-body text-[16px] leading-[1.5] text-white">Connect</p>
            </div>
            <div className="flex flex-col gap-6">
              <h2 className="font-heading text-[48px] leading-[1.2] tracking-[-0.48px] text-white">
                Get in Touch
              </h2>
              <p className="font-body text-[18px] leading-[1.5] text-white">
                We're here to help you with any questions or reservations.
              </p>
            </div>
          </div>
          <div className="w-[500px] flex flex-col gap-6 py-2">
            <div className="flex gap-4 items-start">
              <BiEnvelope className="size-6 text-white shrink-0" />
              <div className="flex flex-col gap-2 flex-1">
                <h3 className="font-heading text-[20px] leading-[1.4] tracking-[-0.2px] text-white">Email</h3>
                <a className="font-body text-[16px] leading-[1.5] text-white underline" href="mailto:info@fresh-garden.al">
                  info@fresh-garden.al
                </a>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <BiPhone className="size-6 text-white shrink-0" />
              <div className="flex flex-col gap-2 flex-1">
                <h3 className="font-heading text-[20px] leading-[1.4] tracking-[-0.2px] text-white">Phone</h3>
                <a className="font-body text-[16px] leading-[1.5] text-white underline" href="tel:+355672040737">
                  +355 672040737
                </a>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <BiMap className="size-6 text-white shrink-0" />
              <div className="flex flex-col gap-2 flex-1">
                <h3 className="font-heading text-[20px] leading-[1.4] tracking-[-0.2px] text-white">Location</h3>
                <p className="font-body text-[16px] leading-[1.5] text-white">
                  Rruga Brigada VIII Ndertesa 8, H16, Ap1 Tiranë 1019, Albania
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[720px] rounded-[40px] overflow-hidden">
          <img
            src={imgPlaceholderImage}
            alt="Restaurant location map"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
