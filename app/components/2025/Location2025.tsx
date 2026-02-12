"use client";

import Image from "next/image";
import React from "react";
import Title from "../../components/Title";
import Border from "../../components/Border";
import ImageDivider from "../../components/ImageDivider";
import { useTranslation } from "@/app/i18n/useTranslation";

interface Props {
  landing: string
}

export default function Location({ landing }: Props) {
  const { t } = useTranslation();
  return (
    <section id="location" className="flex max-w-6xl mx-auto w-full flex-col gap-10 px-5 lg:px-10  lg:pt-24">
      <Title title={t('location2025.title')} landing={landing} />
      <div className="grid grid-cols-[auto_1fr] gap-3 lg:gap-9">
        <Border landing={landing} />
        <div className="flex flex-col gap-6">
          <p className="text-lg">{t('location2025.intro')}</p>
          <ImageDivider
            rightImage="/WhatsApp Image 2025-03-29 at 12.48.51.jpeg"
            leftImage="/Acceso-a-bloque-k.png"
            leftTitle={t('location2025.uninorte')}
            rightTitle={t('location2025.fca')}
             />
          <p>{t('location2025.para1')}</p>
          <p>{t('location2025.para2')}</p>
          <p>{t('location2025.para3')}</p>
          <p>{t('location2025.para4')}</p>
        </div>

      </div>
    </section>
  );
}
