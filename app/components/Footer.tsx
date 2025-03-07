import React from "react";
import Wrapper from "./Wrapper";
import { Facebook, Instagram, Twitter } from "./Icons";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gradientBannerPurple to-gradientBannerBlue py-20">
      <Wrapper styles="flex flex-col  px-5">
        <ul className="flex gap-2">
          <li>
            <a
              href="https://www.instagram.com/codigoabierto.baq/"
              target="_blank"
            >
              <Instagram />
            </a>
          </li>
          {/* <Facebook />
          <Twitter /> */}
        </ul>
        <p>Fundación Código Abierto 2024</p>
      </Wrapper>
    </footer>
  );
}
