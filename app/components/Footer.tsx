import React from "react";
import Wrapper from "./Wrapper";
import { Facebook, Instagram, Twitter } from "./Icons";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gradientBannerPurple to-gradientBannerBlue py-20">
      <Wrapper styles="flex flex-col gap-5 px-5">
        <p>Managed by Fundación Código Abierto</p>
        <ul className="flex gap-6">
          <li>
            <a href="https://www.instagram.com/codigoabierto.baq/" target="_blank">
              <Instagram />
            </a>
          </li>
          {/* <Facebook />
          <Twitter /> */}
        </ul>
        <p>© 2024 Fundación Código Abierto</p>
      </Wrapper>
    </footer>
  );
}
