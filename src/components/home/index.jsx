"use client";

import React, { useState, useEffect } from "react";
import { Navbar13 } from "./components/navbar-13";
import { Layout518 } from "./components/layout-518";
import { Gallery24 } from "./components/gallery-24";
import { Testimonial33 } from "./components/testimonial-33";
import { Gallery19 } from "./components/gallery-19";
import { Footer3 } from "./components/footer-03";
import { Loader3 } from "./components/loader-03";

export default function Page() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 2700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showLoader && <Loader3 />}
      {!showLoader && (
        <div className="bg-woodland">
          <Navbar13 />
          <Layout518 />
          <Gallery24 />
          <Testimonial33 />
          <Gallery19 />
          <Footer3 />
        </div>
      )}
    </>
  );
}
