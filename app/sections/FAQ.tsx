import React from "react";
import { ArrowDown } from "../components/Icons";
import faqs from "../utils/FAQ.json";
import Title from "../components/Title";
import { THEME_LANDINGS } from "../utils/theme";

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
  data: FAQGroup[] | any
}

const BACKGROUND_FAQ: Record<string, string> = {
  'default': '#3e2451',
  'barranqui-ia': '#3e2451',
  'samar-ia': '#37372f',
  'cartagen-ia': '#1e4351',
}

export default function FAQ({ landing, data }: Props) {
  return (
    <div id="faqs" className="max-w-6xl mx-auto px-5 w-full flex flex-col gap-10 relative">
      <div style={{ background: THEME_LANDINGS[landing].principal + '40' }} className="absolute -top-20 -z-10 -left-36 w-[600px] h-[600px] rounded-full blur-3xl"></div>

      <Title
        title="Preguntas Frecuentes"
        landing={landing}
      />

      {
        landing === 'default'
          ? <div className="grid w-full mx-auto divide-neutral-200">
            {data.map((item: FAQGroup, i: number) => (
              <>
                <h2 className="font-mono text-2xl my-4">{item.title}</h2>
                {
                  item.faqs.map((faq, i) =>
                    <div style={{ background: BACKGROUND_FAQ[landing], border: `1px solid ${THEME_LANDINGS[landing].principal}` }} key={i} className="py-4 mb-5 border px-4 rounded-2xl text-white">
                      <details className="group">
                        <summary className="flex justify-between items-center font-semibold text-xl cursor-pointer list-none">
                          <span>{faq.question}</span>
                          <span className="group-open:rotate-180 transition">
                            <ArrowDown />
                          </span>
                        </summary>
                        <p style={{ borderTop: `1px solid ${THEME_LANDINGS[landing].principal}` }} className="mt-3 text-gray-300 group-open:animate-fadeIn py-5">
                          {faq.answer}
                        </p>
                      </details>
                    </div>
                  )}
              </>
            ))
            }
          </div>
          : <div className="grid w-full mx-auto divide-y divide-neutral-200">
            {data.map((faq: FAQ, i: number) => (
              <div style={{ background: BACKGROUND_FAQ[landing], border: `1px solid ${THEME_LANDINGS[landing].principal}` }} key={i} className="py-4 mb-5 border px-4 rounded-2xl text-white">
                <details className="group">
                  <summary className="flex justify-between items-center font-semibold text-xl cursor-pointer list-none">
                    <span>{faq.question}</span>
                    <span className="group-open:rotate-180 transition">
                      <ArrowDown />
                    </span>
                  </summary>
                  <p style={{ borderTop: `1px solid ${THEME_LANDINGS[landing].principal}` }} className="mt-3 text-gray-300 group-open:animate-fadeIn py-5">
                    {faq.answer}
                  </p>
                </details>
              </div>
            ))}
          </div>
      }


    </div>
  );
}
