"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import shrimppasta from "@/assets/shrimp_pasta.jpg";
import restaurantentry from "@/assets/restaurant_entry.jpg";
import couple from "@/assets/laughing_couple_restaurant.jpg";
import tiramisu from "@/assets/tiramisu.jpg";
import cocktail from "@/assets/cocktail_espresso_martini.jpg";
import balcony from "@/assets/restaurant_garden.jpg";
import tagliatelle from "@/assets/tagliatelle.jpg";
import pastaragu from "@/assets/pasta_ragu.jpg";

const useCarousel = () => {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleDotClick = (index) => () => {
    if (api) {
      api.scrollTo(index);
    }
  };

  const dotClassName = (index) => {
    return clsx("relative mx-[3px] inline-block size-2 rounded-full", {
      "bg-scheme-text": current === index + 1,
      "bg-scheme-text/20": current !== index + 1,
    });
  };

  return { api, setApi, handleDotClick, dotClassName };
};

export function Gallery19() {
  const carouselState = useCarousel();
  return (
    <section className="bg-[#172815]">
      <div className="px-16 py-28">
        <div className="container mx-auto max-w-[1280px]">
          <div className="mb-20 text-center">
            <h2 className="font-heading text-[56px] leading-[1.2] tracking-[-0.56px] text-white mb-6">
              Follow us @freshgardenrestaurant
            </h2>
          </div>
          <Carousel
            setApi={carouselState.setApi}
            opts={{ loop: true, align: "start" }}
          >
            <div className="relative">
              <CarouselContent className="ml-0">
                <CarouselItem className="basis-1/2 px-3 md:basis-1/4 md:px-4">
                  <div className="w-full">
                    <img
                      src={restaurantentry.src}
                      alt="Restaurant Entry"
                      className="aspect-square size-full rounded-lg object-cover"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem className="basis-1/2 px-3 md:basis-1/4 md:px-4">
                  <div className="w-full">
                    <img
                      src={balcony.src}
                      alt="Balcony Closeup"
                      className="aspect-square size-full rounded-lg object-cover"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem className="basis-1/2 px-3 md:basis-1/4 md:px-4">
                  <div className="w-full">
                    <img
                      src={tagliatelle.src}
                      alt="Tagliatelle Pasta"
                      className="aspect-square size-full rounded-lg object-cover"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem className="basis-1/2 px-3 md:basis-1/4 md:px-4">
                  <div className="w-full">
                    <img
                      src={pastaragu.src}
                      alt="Pasta Ragu"
                      className="aspect-square size-full rounded-lg object-cover"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem className="basis-1/2 px-3 md:basis-1/4 md:px-4">
                  <div className="w-full">
                    <img
                      className="aspect-square size-full rounded-lg object-cover"
                      src={shrimppasta.src}
                      alt="Shrimp Pasta"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem className="basis-1/2 px-3 md:basis-1/4 md:px-4">
                  <div className="w-full">
                    <img
                      src={restaurantentry.src}
                      alt="Restaurant Entry"
                      className="aspect-square size-full rounded-lg object-cover"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem className="basis-1/2 px-3 md:basis-1/4 md:px-4">
                  <div className="w-full">
                    <img
                      src={couple.src}
                      alt="Couple Laughing in Restaurant"
                      className="aspect-square size-full rounded-lg object-cover"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem className="basis-1/2 px-3 md:basis-1/4 md:px-4">
                  <div className="w-full">
                    <img
                      src={tiramisu.src}
                      alt="Tiramisu Dessert"
                      className="aspect-square size-full rounded-lg object-cover"
                    />
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious
                className="hidden md:flex md:size-12 lg:size-14 !border-0 !text-white transition-colors"
                style={{ backgroundColor: '#3e5622' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(62, 86, 34, 0.9)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#3e5622'}
              />
              <CarouselNext
                className="hidden md:flex md:size-12 lg:size-14 !border-0 !text-white transition-colors"
                style={{ backgroundColor: '#3e5622' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(62, 86, 34, 0.9)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#3e5622'}
              />
            </div>
            <div className="mt-[30px] flex items-center justify-center md:mt-[46px]">
              <button
                onClick={carouselState.handleDotClick(0)}
                className={carouselState.dotClassName(0)}
              />
              <button
                onClick={carouselState.handleDotClick(1)}
                className={carouselState.dotClassName(1)}
              />
              <button
                onClick={carouselState.handleDotClick(2)}
                className={carouselState.dotClassName(2)}
              />
              <button
                onClick={carouselState.handleDotClick(3)}
                className={carouselState.dotClassName(3)}
              />
              <button
                onClick={carouselState.handleDotClick(4)}
                className={carouselState.dotClassName(4)}
              />
              <button
                onClick={carouselState.handleDotClick(5)}
                className={carouselState.dotClassName(5)}
              />
              <button
                onClick={carouselState.handleDotClick(6)}
                className={carouselState.dotClassName(6)}
              />
              <button
                onClick={carouselState.handleDotClick(7)}
                className={carouselState.dotClassName(7)}
              />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
