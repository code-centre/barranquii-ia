import React from "react";
import { ArrowDown } from "../components/Icons";
import faqs from "../utils/FAQ.json";

export default function FAQ() {
  return (
    <div id="faqs" className="py-20">
      <div>
        <h2 className="border-principleViolet pl-2 border-l-4 font-bold text-lg lg:text-4xl uppercase">
          Preguntas Frecuentes
        </h2>
      </div>

      <div className="grid mx-auto mt-8 divide-y divide-neutral-200">
        {faqs.map((faq, i) => (
          <div key={i} className="py-5">
            <details className="group">
              <summary className="flex justify-between items-center font-semibold text-xl cursor-pointer list-none">
                <span>{faq.question}</span>
                <span className="group-open:rotate-180 transition">
                  <ArrowDown />
                </span>
              </summary>
              <p className="mt-3 text-gray-300 group-open:animate-fadeIn">
                {faq.answer}
              </p>
            </details>
          </div>
        ))}
      </div>
    </div>
  );
}
