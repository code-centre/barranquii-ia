"use client";

import { useTranslation } from "@/app/i18n/useTranslation";

export default function GraphicsIntro() {
  const { t } = useTranslation();
  return (
    <p className="text-base lg:text-lg mb-5 text-gray-300">
      {t("graphics2025.intro")}
    </p>
  );
}
