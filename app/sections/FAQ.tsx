'use client'
import React, { useState } from "react";
import { ArrowDown } from "../components/Icons";
import Title from "../components/Title";
import { THEME_LANDINGS } from "../utils/theme";
import { useTranslation } from "@/app/i18n/useTranslation";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQGroup {
  title: string;
  faqs: FAQ[];
}

interface Props {
  landing: string;
  data: FAQGroup[] | FAQ[];
}

const BACKGROUND_FAQ: Record<string, string> = {
  'default': '#1C1F2E',
  'barranqui-ia': '#3e2451',
  'samar-ia': '#37372f',
  'cartagen-ia': '#1e4351',
}

// Check if data is FAQGroup[] or FAQ[]
const isFAQGroupArray = (data: FAQGroup[] | FAQ[]): data is FAQGroup[] => {
  return Array.isArray(data) && data.length > 0 && 'title' in data[0] && 'faqs' in data[0];
}

export default function FAQ({ landing, data }: Props) {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState(0);
  const theme = THEME_LANDINGS[landing];
  const isDefault = landing === 'default';
  const isGroupedData = isFAQGroupArray(data);

  const getTabLabelTranslated = (title: string | undefined): string => {
    if (!title) return t('faq.general');
    if (title.includes('Hackatones')) return t('faq.participants');
    if (title.includes('Incubación')) return t('faq.incubation');
    if (title.includes('Empresas')) return t('faq.enterprises');
    if (title.includes('Demo Day') || title.includes('Crowdfunding')) return t('faq.investors');
    return title;
  };

  // Only create tabs if we have grouped data and it's the default landing
  const tabs = isGroupedData && isDefault
    ? data.map((group, index) => ({
        id: index,
        label: getTabLabelTranslated(group.title),
        group: group
      }))
    : [];

  const activeGroup = tabs[activeTab]?.group;

  return (
    <div id="faqs" className="max-w-6xl mx-auto px-5 lg:px-10 w-full flex flex-col gap-5 relative py-20 md:py-28">
      <div style={{ background: THEME_LANDINGS[landing].principal + '40' }} className="absolute -top-20 -z-10 -left-36 w-[300px] h-[300px] lg:w-[600px] lg:h-[600px] rounded-full blur-3xl"></div>

      <Title
        title={t('faq.title')}
        landing={landing}
      />

      {isDefault && isGroupedData ? (
        <div className="mt-8">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-8 border-b border-white/10 pb-4">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-2 rounded-t-lg font-semibold text-sm lg:text-base transition-all ${
                  activeTab === index
                    ? 'text-white'
                    : 'text-white/60 hover:text-white/80'
                }`}
                style={{
                  borderBottom: activeTab === index
                    ? `2px solid ${isDefault ? '#FF97EF' : theme.principal}`
                    : '2px solid transparent',
                  backgroundColor: activeTab === index
                    ? isDefault ? 'rgba(255, 151, 239, 0.1)' : `${theme.principal}20`
                    : 'transparent'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* FAQ Items for Active Tab */}
          <div className="space-y-4">
            {activeGroup?.faqs.map((faq, i) => (
              <div
                key={i}
                style={{
                  background: BACKGROUND_FAQ[landing],
                  border: `1px solid ${isDefault ? 'rgba(255, 151, 239, 0.3)' : `${theme.principal}66`}`
                }}
                className="py-4 px-4 rounded-2xl text-white venture-card"
              >
                <details className="group">
                  <summary className="flex justify-between items-center font-semibold text-lg lg:text-xl cursor-pointer list-none gap-4">
                    <span className="text-left">{faq.question}</span>
                    <span className="group-open:rotate-180 transition flex-shrink-0">
                      <ArrowDown />
                    </span>
                  </summary>
                  <p
                    style={{
                      borderTop: `1px solid ${isDefault ? 'rgba(255, 151, 239, 0.3)' : `${theme.principal}66`}`
                    }}
                    className="mt-3 text-gray-300 group-open:animate-fadeIn py-5 text-base lg:text-lg leading-relaxed"
                  >
                    {faq.answer}
                  </p>
                </details>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="grid w-full mx-auto divide-y divide-neutral-200">
          {isGroupedData ? (
            // If it's grouped data but not default landing, flatten it
            data.map((group: FAQGroup) =>
              group.faqs.map((faq: FAQ, i: number) => (
                <div
                  key={i}
                  style={{
                    background: BACKGROUND_FAQ[landing],
                    border: `1px solid ${THEME_LANDINGS[landing].principal}`
                  }}
                  className="py-4 mb-5 border px-4 rounded-2xl text-white"
                >
                  <details className="group">
                    <summary className="flex justify-between items-center font-semibold text-xl cursor-pointer list-none">
                      <span>{faq.question}</span>
                      <span className="group-open:rotate-180 transition">
                        <ArrowDown />
                      </span>
                    </summary>
                    <p
                      style={{ borderTop: `1px solid ${THEME_LANDINGS[landing].principal}` }}
                      className="mt-3 text-gray-300 group-open:animate-fadeIn py-5"
                    >
                      {faq.answer}
                    </p>
                  </details>
                </div>
              ))
            )
          ) : (
            // If it's flat FAQ array
            (data as FAQ[]).map((faq: FAQ, i: number) => (
              <div
                key={i}
                style={{
                  background: BACKGROUND_FAQ[landing],
                  border: `1px solid ${THEME_LANDINGS[landing].principal}`
                }}
                className="py-4 mb-5 border px-4 rounded-2xl text-white"
              >
                <details className="group">
                  <summary className="flex justify-between items-center font-semibold text-xl cursor-pointer list-none">
                    <span>{faq.question}</span>
                    <span className="group-open:rotate-180 transition">
                      <ArrowDown />
                    </span>
                  </summary>
                  <p
                    style={{ borderTop: `1px solid ${THEME_LANDINGS[landing].principal}` }}
                    className="mt-3 text-gray-300 group-open:animate-fadeIn py-5"
                  >
                    {faq.answer}
                  </p>
                </details>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
