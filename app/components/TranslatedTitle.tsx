"use client";

import React from "react";
import { useTranslation } from "@/app/i18n/useTranslation";
import Title from "./Title";

interface Props {
  titleKey: string;
  landing?: string;
  size?: "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl" | "xxxxl" | "xxxxxl";
  align?: "left" | "center" | "right";
}

export default function TranslatedTitle({ titleKey, landing, size, align }: Props) {
  const { t } = useTranslation();
  return <Title title={t(titleKey)} landing={landing} size={size} align={align} />;
}
