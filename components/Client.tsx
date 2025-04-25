"use client";

import React, { useRef } from "react";
import Image from "next/image";

import senopasal from "../public/logo/Seonmul_Pasal.png";
import chhetrikhabar from "../public/logo/chettra_khabar.png";
import janajati from "../public/logo/JKAN.png";
import ecoparquet from "../public/logo/ecoparquet.png";
import batas from "../public/logo/batas.png";

import petrolube from "../public/logo/LogoMaxol.png";
import rb_hair from "../public/logo/rb_hair.png";
import kailash from "../public/logo/kailash.png";
import south_asia from "../public/logo/south_asia.png";
import atlastpacker from "../public/logo/atlastpacker.png";
import tech_hub from "../public/logo/tech_hub.png";


const clients = [senopasal, chhetrikhabar, janajati, ecoparquet, batas,petrolube,rb_hair,kailash,south_asia,atlastpacker,tech_hub];

const Client = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (marqueeRef.current) {
      marqueeRef.current.style.animationPlayState = "paused";
    }
  };

  const handleMouseLeave = () => {
    if (marqueeRef.current) {
      marqueeRef.current.style.animationPlayState = "running";
    }
  };

  return (
    <section className="flex flex-col items-center mx-20 px-4 py-16">
      <div className="relative w-[70vw] text-center px-4 py-4">
        <h2  className="text-3xl font-semibold text-gray-800">Our Collaborative Partners</h2>
        <div className="flex justify-center w-full">
          <article className="w-[80vw] lg:w-[50vw] text-center text-base text-gray-900">
          We believe that success is a shared journey. Collaborating closely with you, we ensure that our solutions align perfectly with your goals. 
          </article>
        </div>
      </div>

      {/* Marquee Wrapper */}
      <div
        className="relative w-[70vw] h-20 overflow-hidden mt-10"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div ref={marqueeRef} className="marquee flex items-center whitespace-nowrap">
          {/* Render the clients array multiple times to ensure smooth looping */}
          {[...Array(10)].map((_, iteration) =>
            clients.map((element, index) => (
              <div key={`${iteration}-${index}`} className="h-16 w-32 flex-shrink-0 mx-4">
                <Image
                  src={element}
                  alt="client__logo"
                  className="w-full h-full object-contain"
                />
              </div>
            ))
          )}
        </div>
      </div>

      {/* Tailwind Animations */}
      <style jsx>{`
        .marquee {
        repeat:yes;
          display: flex;
          animation: marquee 20s linear infinite;
        }

        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </section>
  );
};

export default Client;