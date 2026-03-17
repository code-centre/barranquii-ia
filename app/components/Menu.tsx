"use client";

import React from "react";
import sectionsPage from "../utils/sections.json";
import { useTranslation } from "@/app/i18n/useTranslation";

interface Props {
    openMenu: boolean;
    setOpenMenu: (state: boolean) => void;
}

export default function Menu({ openMenu, setOpenMenu }: Props) {
  const { t } = useTranslation();
  const stylesLi =
    "text-white hover: cursor-pointer hover:underline font-semibold";

  return (
    <div className={`top-14 bottom-0 z-10 fixed lg:hidden  bg-slate-900 pt-5 pl-4 w-1/2 transition-all ${openMenu ? 'right-0 ' : '-right-[200%]' }`}>

      <nav className="">
        <ul className="flex flex-col gap-10 py-4">
          {sectionsPage.map((section) => {
            const href = section.link || `#${section.id}`;
            const isExternal = href.startsWith('http');
            return (
              <li onClick={() => setOpenMenu(false)} key={section.id} className={`${stylesLi}`}>
                {isExternal ? (
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    {t(section.nameKey)}
                  </a>
                ) : (
                  <a href={href}>{t(section.nameKey)}</a>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
