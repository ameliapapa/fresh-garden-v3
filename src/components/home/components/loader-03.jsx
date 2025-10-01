"use client";

import { useEffect, useState } from "react";
import logo from "@/assets/fresh_garden_logo.png";

export const Loader3 = () => {
  const [isExiting, setIsExiting] = useState(false);
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const imageTimer = setTimeout(() => {
      setShowImage(true);
    }, 500);

    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 2000);

    return () => {
      clearTimeout(imageTimer);
      clearTimeout(exitTimer);
    };
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center transition-transform duration-700 ease-in-out ${
          isExiting ? "-translate-y-full" : "translate-y-0"
        }`}
        style={{ backgroundColor: '#172815' }}
      >
        {!isExiting && (
          <div className="flex flex-col items-center justify-center">
            <img
              src={logo.src}
              alt="Fresh Garden Logo"
              className={`w-[200px] h-auto transition-all duration-500 ease-out ${
                showImage ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
              }`}
            />
          </div>
        )}
      </div>
    </div>
  );
};
