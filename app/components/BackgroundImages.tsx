"use client";
import Image from "next/image";
import React from "react";
import Spline from "@splinetool/react-spline";

export default function BackgroundImages() {
  return (
    <>
      <div className="-left-[25%] block xl:hidden -z-10 absolute overflow-hidden">
        <Image
          width={400}
          height={400}
          className="w-[200px] md:w-[400px] lg:w-[600px] xl:w-[800px]"
          src="/square-r.webp"
          alt="square-bg"
        />
      </div>
      <div className="-left-[10%] -top-0  absolute rotate-[30deg] hidden  xl:block -z-40">
        <Spline scene="https://prod.spline.design/56nSUJOmA4Tm5vEA/scene.splinecode" />
        <div className="top-20 right-[10%] md:right-[10%] bottom-0 absolute bg-greenApp/55 opacity-70 blur-md lg:blur-2xl my-auto rounded-full w-10 md:w-32 h-10 md:h-32"></div>
      </div>
      <div className="md:-top-10 xl:-top-32 -right-20 md:-right-40 lg:-right-64 xl:-right-72 -z-10 absolute block xl:hidden rotate-[30deg]">
        <Image
          width={700}
          height={700}
          className="w-[200px] md:w-[400px] lg:w-[600px] xl:w-[900px]"
          src="/square-l.webp"
          alt="square-bg"
        />
      </div>
      <div className="absolute -right-36 -top-0 -z-20 -rotate-[30deg] hidden xl:block">
        <Spline scene="https://prod.spline.design/56nSUJOmA4Tm5vEA/scene.splinecode" />
        <div className="top-0 bottom-0 left-[15%] md:left-[10%] absolute bg-gradientBannerBlue/55 opacity-70 blur-md lg:blur-2xl my-auto rounded-full w-10 md:w-32 h-10 md:h-32"></div>
      </div>
    </>
  );
}
