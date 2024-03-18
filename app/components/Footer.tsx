import React from "react";
import Wrapper from "./Wrapper";
import { Facebook, Instagram, Twitter } from "./Icons";

export default function Footer() {
  return (
    <footer className="bg-principleViolet py-20">
      <Wrapper styles="flex flex-col gap-5 px-5">
        <p>Managed by Fundación Código Abierto</p>
        <div className="flex gap-6">
          <Instagram />
          <Facebook />
          <Twitter />
        </div>
        <p>© 2024 Fundación Código Abierto, All rights reserved</p>
      </Wrapper>
    </footer>
  );
}
