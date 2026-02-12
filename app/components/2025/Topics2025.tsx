"use client";

import React from "react";
import Topic from "../../components/Topic";
import "../../globals.css";
import Title from "../../components/Title";
import { useTranslation } from "@/app/i18n/useTranslation";

interface Props {
  landing: string;
}

const TOPIC_KEYS = [
  "topic1", "topic2", "topic3", "topic4", "topic5", "topic6", "topic7"
];

const TOPIC_IMGS = [
  "/cities.webp",
  "/health.webp",
  "/education.webp",
  "/environment.webp",
  "/assistant.webp",
  "/entertainment.webp",
  "/security.webp"
];

export default function Topics({ landing }: Props) {
  const { t } = useTranslation();
  const topics = TOPIC_KEYS.map((key, i) => ({
    title: t(`topics2025.${key}`),
    img: TOPIC_IMGS[i]
  }));

  return (
    <section id="topics" className="pt-10 relative">
      <Title landing={landing} title={t('topics2025.title')} />

    <p className="mt-3 text-gray-300">
      {t('topics2025.intro')}
    </p>

      <div className="flex flex-wrap justify-center items-center gap-5 md:gap-3 mt-10">
                {
                    topics.map((topic, i) => (
                        <Topic key={topic.title} img={topic.img} title={topic.title} index={i + 1} />
                    ))
                }
        {/* <Topic img="/cities.webp" title="Reto empresarial x Cámara de Comercio BAQ" />
        <Topic img="/health.webp" title="Salud digital" />
        <Topic img="/education.webp" title="Educación personalizada" />
        <Topic img="/environment.webp" title="Sostenibilidad ambiental" />
        <Topic img="/assistant.webp" title="Agentes x ShadAI" />
        <Topic
          img="/entertainment.webp"
          title="Entretenimiento y creatividad"
        />
        <Topic img="/security.webp" title="Seguridad y privacidad" /> */}
      </div>
            {/* <div className="absolute top-0 left-0 w-full h-full grid bg-black opacity-50">
                <div className="h-96 w-96 bg-white"></div>
            </div> */}
    </section>
  );
}
