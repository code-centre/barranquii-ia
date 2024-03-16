import React from "react";
import "../globals.css";

export default function Banner() {
  return (
    <div className="bg-gradient-to-r from-gradientBannerPurple to-gradientBannerBlue py-1">
      <p className="block text-[11px] text-black lg:text-sm animate-marquee">
        Barranqui-IA 2024 - Baq, Col. | universidad del norte - acceso rápido
      </p>
    </div>
  );
}
