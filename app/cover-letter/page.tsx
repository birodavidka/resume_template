"use client";

import React from "react";
import { useLangStore } from "@/lib/store/lang";
import { coverLetterDATA } from "@/content/CoverLetterData";

// Kis segéd: szekciócím
function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-xs tracking-[0.2em] font-semibold text-gray-500 uppercase mb-3">
      {children}
    </h3>
  );
}

// Nyelvválasztó
function LanguageSelector() {
  const lang = useLangStore((s) => s.lang);
  const setLang = useLangStore((s) => s.setLang);
  const Btn = (k: any, label: string) => (
    <button
      key={k}
      onClick={() => setLang(k)}
      className={`px-3 py-1 rounded-full text-xs border ${
        lang === k ? "bg-black text-white" : "bg-white text-gray-700"
      }`}
      aria-pressed={lang === k}
    >
      {label}
    </button>
  );
  return (
    <div className="flex gap-2">
      {Btn("en", "EN")}
      {Btn("de", "DE")}
      {Btn("hu", "HU")}
    </div>
  );
}

export default function CoverLetterPage() {
  const lang = useLangStore((s) => s.lang);
  const t = coverLetterDATA[lang];

  return (
    <main className="min-h-dvh bg-neutral-100 py-10 print:bg-white print:py-0 print:min-h-0">
      <div className="mx-auto w-[900px] max-w-full bg-white shadow-xl print:shadow-none rounded-xl p-10">
        {/* Header */}
        <div className="flex items-start justify-between gap-6 pb-6 border-b">
          <div>
            <h1 className="text-5xl font-extrabold tracking-tight leading-none">
              {t.nameTop}
            </h1>
            <h2 className="text-5xl font-extrabold tracking-tight leading-none -mt-2">
              {t.nameBottom}
            </h2>
            <p className="mt-2 text-gray-500 uppercase tracking-[0.2em] text-xs">
              {t.title}
            </p>
          </div>
          <div className="text-right text-sm text-gray-600 max-w-xs">
            <p>
              {t.contact.addressLines[0]}
              <br />
              {t.contact.addressLines[1]}
            </p>
            <p className="mt-2">
              p. {t.contact.phone}
              <br />
              e. {t.contact.email}
              <br />
              w. {t.contact.website}
            </p>
          </div>
        </div>

        {/* Lang switch */}
        <div className="mt-4 mb-2 flex justify-end print:hidden">
          <LanguageSelector />
        </div>

        {/* Body */}
        <div className="pt-6 grid grid-cols-1 md:grid-cols-[1fr_1px_2fr] gap-8">
          {/* Bal oszlop – Info */}
          <aside className="flex flex-col gap-8">
            <section>
              <SectionTitle>Info</SectionTitle>
              <div className="space-y-5 text-sm text-gray-700">
                <div>
                  <p className="uppercase text-xs text-gray-500">
                    {t.info.toLabel}
                  </p>
                  <p className="font-semibold">{t.info.toName}</p>
                  <p className="text-gray-600">{t.info.toSubtitle}</p>
                  <p className="mt-2 text-gray-600">
                    {t.info.street}
                    <br />
                    {t.info.city}
                  </p>
                </div>
                <div>
                  <p className="uppercase text-xs text-gray-500">
                    {t.info.dateLabel}
                  </p>
                  <p className="font-semibold">{t.info.dateText}</p>
                </div>
              </div>
            </section>
          </aside>

          {/* Középső elválasztó */}
          <div className="hidden md:block bg-gray-200" aria-hidden />

          {/* Jobb oszlop – Levél */}
          <section className="flex flex-col gap-8">
            <div>
              <SectionTitle>{t.coverLetterTitle}</SectionTitle>
              <h4 className="font-semibold mb-3">{t.greeting}</h4>
              <div className="space-y-4 text-sm leading-6 text-gray-700">
                {t.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <div className="mt-10">
                <p className="text-sm">{t.closing.sincerely}</p>
                <p className="font-semibold mt-1">{t.closing.signatureName}</p>
                <div className="mt-4 h-6 w-32 border-t border-gray-400"></div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
