"use client";
import React, { useState } from "react";
import sectionsPage from "../utils/sections.json";
import Menu from "./Menu";
import { CloseIcon, MenuIcon } from "./Icons";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const stylesLi =
    "text-black hover:text-white cursor-pointer hover:underline font-semibold";

  return (
    <header className="right-0 left-0 z-40 fixed bg-gradient-to-r from-gradientBannerPurple to-gradientBannerBlue">
      <nav className="flex justify-between items-center px-5 lg:px-10 py-3">
        <ul>
          <li className="font-mono font-semibold text-2xl">
            <a href="#top">Barranqui-IA</a>
          </li>
        </ul>
        <ul className="lg:flex justify-center lg:gap-5 xl:gap-10 hidden">
          {sectionsPage.map((section) => (
            <li key={section.id} className={`${stylesLi}`}>
              <a href={`#${section.id}`}>{section.name}</a>
            </li>
          ))}
        </ul>
        <ul className="lg:hidden">
          <li onClick={() => setOpenMenu(!openMenu)}>
            {openMenu ? <CloseIcon /> : <MenuIcon />}
          </li>
        </ul>
      </nav>
      <Menu setOpenMenu={setOpenMenu} openMenu={openMenu} />
    </header>
  );
}
