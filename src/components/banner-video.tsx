"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function BannerVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const pinContainer = pinContainerRef.current;

    if (container) {
      gsap.to(container, {
        width: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top 75px",
          end: "bottom top",
          pin: pinContainer,
          scrub: true,
          markers: true,
        },
      });
    }

    return () => {
      if (ScrollTrigger) {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      }
    };
  }, []);

  return ( 
    <div ref={pinContainerRef} className="w-full" >
      <div ref={containerRef} className="min-h-[700px] overflow-hidden w-[50%] h-full flex justify-center items-center mx-auto z-[2] relative flex-1" >
        <video width="100%" height="100%" autoPlay muted loop className="object-cover h-full w-full">
          <source src="/video/home.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
