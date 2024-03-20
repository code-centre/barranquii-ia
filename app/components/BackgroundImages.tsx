import Image from "next/image";
import React from "react";

export default function BackgroundImages() {
  return (
    <>
      <div className="-left-[25%] -z-10 absolute overflow-hidden">
        <Image
          width={400}
          height={400}
          className="w-[200px] md:w-[400px] lg:w-[500px] xl:w-[800px]"
          src="/square-r.webp"
          alt="square-bg"
        />
        <div className="top-20 right-[10%] md:right-[10%] bottom-0 absolute bg-greenApp/55 opacity-70 blur-md lg:blur-2xl my-auto rounded-full w-10 md:w-32 h-10 md:h-32"></div>
      </div>
      <div className="md:-top-32 -right-20 md:-right-64 -z-10 absolute overflow-hidden">
        <Image
          width={700}
          height={700}
          className="w-[200px] md:w-[400px] lg:w-[500px] xl:w-[900px]"
          src="/square-l.webp"
          alt="square-bg"
        />
        <div className="top-0 bottom-0 left-[15%] md:left-[10%] absolute bg-gradientBannerBlue/55 opacity-70 blur-md lg:blur-2xl my-auto rounded-full w-10 md:w-32 h-10 md:h-32"></div>
      </div>
    </>
  );
}
