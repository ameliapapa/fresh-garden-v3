"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";
import { RxPlus } from "react-icons/rx";

export function Faq6() {
  return (
    <section className="bg-[#31441b] px-[5%] py-16 md:py-20 lg:py-[112px]">
      <div className="container mx-auto max-w-[1280px]">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-[80px]">
          <div className="lg:w-[500px] flex flex-col gap-6 lg:gap-8">
            <div className="flex flex-col gap-6">
              <h2 className="font-heading text-[36px] md:text-[48px] leading-[1.2] tracking-[-0.48px] text-white">
                FAQs
              </h2>
              <p className="font-body text-[16px] md:text-[18px] leading-[1.5] text-white">
                Find answers to common questions about our reservations, menu options, and special requests.
              </p>
            </div>
          </div>
          <Accordion
            type="multiple"
            className="flex-1 flex flex-col gap-4"
          >
            <AccordionItem value="item-0" className="bg-[#3e5622] rounded-[40px] border-0 border-[rgba(255,255,255,0.2)]">
              <AccordionTrigger
                icon={
                  <RxPlus className="size-6 shrink-0 text-white transition-transform duration-300 [&[data-state=open]]:rotate-45" />
                }
                className="px-6 py-5 text-[18px] md:text-[20px] font-normal leading-[1.5] text-white font-body hover:no-underline text-left"
              >
                How do I reserve?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 pt-0 font-body text-[16px] leading-[1.5] text-white">
                You can make a reservation by calling us directly during business hours. Alternatively, you can message on Whatsapp or Instagram.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-1" className="bg-[#3e5622] rounded-[40px] border-0 border-[rgba(255,255,255,0.2)]">
              <AccordionTrigger
                icon={
                  <RxPlus className="size-6 shrink-0 text-white transition-transform duration-300 [&[data-state=open]]:rotate-45" />
                }
                className="px-6 py-5 text-[18px] md:text-[20px] font-normal leading-[1.5] text-white font-body hover:no-underline text-left"
              >
                Are menu items customizable?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 pt-0 font-body text-[16px] leading-[1.5] text-white">
                Yes, we strive to accommodate special requests. If you have dietary restrictions or preferences, please let us know when placing your order. Our chefs are happy to modify dishes to suit your needs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="bg-[#3e5622] rounded-[40px] border-0 border-[rgba(255,255,255,0.2)]">
              <AccordionTrigger
                icon={
                  <RxPlus className="size-6 shrink-0 text-white transition-transform duration-300 [&[data-state=open]]:rotate-45" />
                }
                className="px-6 py-5 text-[18px] md:text-[20px] font-normal leading-[1.5] text-white font-body hover:no-underline text-left"
              >
                Do you offer takeout?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 pt-0 font-body text-[16px] leading-[1.5] text-white">
                Absolutely! We offer takeout for all menu items. Place your order by phone, and we'll have it ready for you to pick up. Enjoy our delicious meals at home!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="bg-[#3e5622] rounded-[40px] border-0 border-[rgba(255,255,255,0.2)]">
              <AccordionTrigger
                icon={
                  <RxPlus className="size-6 shrink-0 text-white transition-transform duration-300 [&[data-state=open]]:rotate-45" />
                }
                className="px-6 py-5 text-[18px] md:text-[20px] font-normal leading-[1.5] text-white font-body hover:no-underline text-left"
              >
                What are your hours?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 pt-0 font-body text-[16px] leading-[1.5] text-white">
                Our kitchen is open for lunch and dinner from 12 to 10 PM, seven days a week. Our business hours on google are regularly updated for public holidays.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="bg-[#3e5622] rounded-[40px] border-0 border-[rgba(255,255,255,0.2)]">
              <AccordionTrigger
                icon={
                  <RxPlus className="size-6 shrink-0 text-white transition-transform duration-300 [&[data-state=open]]:rotate-45" />
                }
                className="px-6 py-5 text-[18px] md:text-[20px] font-normal leading-[1.5] text-white font-body hover:no-underline text-left"
              >
                Can I host events?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 pt-0 font-body text-[16px] leading-[1.5] text-white">
                Yes, we offer event hosting for private parties and gatherings. Our team will work with you to create a customized menu and ensure your event is memorable. Contact us for more details and to discuss availability.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
