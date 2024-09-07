import React from "react";
import bgShapeOne from "@/assets/images/hero-bg-shape-1-1.svg";
import shapeOne from "@/assets/images/hero-shape-1-1.png";
import heroTitle from "@/assets/images/hero-1-1.png";
import Image from "next/image";

type Props = {};

export const Hero = (props: Props) => {
  return (
    <div className="pt-[200px] pb-[50px]">
      {/* bg */}
      <div>
        <div className="relative">
          <Image src={bgShapeOne} alt="Background Shape" className="absolute top-1/2 left-1/2  -translate-x-[55%] -translate-y-10" />
        </div>
        <div className="relative px-7 mx-auto pb-10">
          <h1 className="font-gallery flex flex-col leading-none text-[150px]">
            <span className="relative flex justify-center items-center mx-auto">
              Creative
              <span className="absolute left-[-26%] font-syne text-lg font-medium text-common-black leading-tight text-nowrap ">
                Hello <br /> People! We&apos;re
              </span>
              <span className="absolute -right-[35px] -translate-y-3">
                <Image src={shapeOne} alt="" className="animate-rorate-360" />
              </span>
            </span>
            <div className="flex justify-center items-center">
              Digital
              <span className="mx-[20px] shrink-0">
                <Image className="tp-zoom-img" src={heroTitle} alt="" />
              </span>
              Studio
            </div>
          </h1>
        </div>
        <div className="relative max-w-[570px] mx-auto">
          <p className="text-lg text-subtext">
            <span className="inline-block ml-[95px]"></span>
            Global digital design studio partnering with brands and businesses that create exceptional experiences. We are design and development agency based in Netherland.
          </p>
        </div>
      </div>
    </div>
  );
};
