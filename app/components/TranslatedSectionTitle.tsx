"use client";

import { useTranslation } from "@/app/i18n/useTranslation";

interface Props {
  titleKey: string;
  className?: string;
}

export default function TranslatedSectionTitle({ titleKey, className = "" }: Props) {
  const { t } = useTranslation();
  return (
    <h2
      className={`border-principleViolet pl-2 border-l-4 font-bold text-2xl lg:text-4xl uppercase ${className}`.trim()}
    >
      {t(titleKey)}
    </h2>
  );
}
