// app/resume/page.tsx — Multi-language with shared useLangStore + external data
"use client";

import React, { useMemo } from "react";
import { PersonId, useLangStore } from "@/lib/store/lang"; // shared Zustand store
import { resumeDATA } from "@/content/ResumeData"; // externalized resume content
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";

// ---------- UI bits ----------
function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-xs tracking-[0.2em] font-semibold text-gray-500 uppercase mb-3">
      {children}
    </h3>
  );
}

function TimelineItem({
  yearFrom,
  yearTo,
  title,
  subtitle,
}: {
  yearFrom: string;
  yearTo: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="relative pl-5">
      <span className="absolute left-0 top-1.5 h-2 w-2 rounded-full bg-gray-400" />
      <div className="flex items-start gap-3 text-sm">
        <div className="w-16 shrink-0 text-gray-500">
          {yearFrom}
          <br /> {yearTo}
        </div>
        <div>
          <p className="font-semibold leading-5">{title}</p>
          {subtitle && <p className="text-gray-500 text-sm">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
}

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
function PersonSelector() {
  const person = useLangStore((s) => s.person);
  const setPerson = useLangStore((s) => s.setPerson);

  // ha dinamikus listát akarsz, Object.keys(resumeDATA)-ból generálhatod:
  const options = [
    { id: "David", label: "David" },
    { id: "Dzsenifer", label: "Dzsenifer" },
  ] as const;

  return (
    <div className="flex gap-2">
      {options.map((o) => (
        <button
          key={o.id}
          onClick={() => setPerson(o.id as any)}
          className={`px-3 py-1 rounded-full text-xs border ${
            person === (o.id as PersonId)
              ? "bg-black text-white"
              : "bg-white text-gray-700"
          }`}
          aria-pressed={person === o.id}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

// ---------- Page ----------
export default function ResumePage() {
  const lang = useLangStore((s) => s.lang);
  const person = useLangStore((s) => s.person);

  const t = useMemo(() => {
    // elérhető személyek
    const people = Object.keys(resumeDATA);
    if (people.length === 0) return undefined;

    // ha a store-ban lévő person nem létezik, válasszuk az elsőt
    const personKey = resumeDATA[person]
      ? person
      : (people[0] as keyof typeof resumeDATA);
    if (!resumeDATA[person]) {
      console.warn(
        `[resume] missing person "${person}", falling back to "${personKey}"`
      );
    }

    const personData = resumeDATA[personKey];
    const langs = Object.keys(personData);
    if (langs.length === 0) return undefined;

    // ha a kért lang nem létezik az adott személynél, essünk vissza az elsőre
    const langKey = personData[lang]
      ? lang
      : (langs[0] as keyof typeof personData);
    if (!personData[lang]) {
      console.warn(
        `[resume] missing lang "${lang}" for person "${String(
          personKey
        )}", falling back to "${String(langKey)}"`
      );
    }

    return personData[langKey];
  }, [person, lang]);

  if (!t) {
    return (
      <main className="min-h-dvh bg-neutral-100 py-10 print:bg-white print:min-h-0 print:py-0">
        <div className="mx-auto w-[900px] max-w-full bg-white rounded-xl p-10">
          <p className="text-red-600 font-medium">
            Missing resume data. Please check resumeDATA structure.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-dvh bg-neutral-100 py-10 print:bg-white print:min-h-0">
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

        {/* Switches */}
        <div className="mt-4 mb-2 flex items-center justify-between gap-3 print:hidden">
          <PersonSelector />
          <LanguageSelector />
        </div>

        {/* Body (3-col grid with 1px separator) */}
        <div className="pt-6 grid grid-cols-1 md:grid-cols-[1fr_1px_2fr] gap-8">
          {/* Left column */}
          <aside className="flex flex-col gap-8">
            {/* Education */}
            <section>
              <SectionTitle>{t.labels.education}</SectionTitle>
              <div className="space-y-5">
                {t.education.map((e, i) => (
                  <div key={i}>
                    <p className="text-xs text-gray-500">
                      {e.from} - {e.to}
                    </p>
                    <p className="font-semibold">{e.degree}</p>
                    <p className="text-sm text-gray-600">{e.place}</p>
                  </div>
                ))}
              </div>
            </section>
            <Separator />

            {/* Skills */}
            <section>
              <SectionTitle>{t.labels.skills}</SectionTitle>
              <p className="uppercase text-xs text-gray-500 tracking-[0.1em] mb-1"></p>
              <ul className="space-y-1 text-sm text-gray-700">
                {t.skills.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </section>
            <Separator />

            {/* Languages */}
            {t.languages && t.languages.length > 0 && (
              <section>
                <SectionTitle>{t.labels.languages}</SectionTitle>
                <ul className="space-y-4">
                  {t.languages.map((lng, i) => (
                    <li key={i}>
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span className="font-medium text-gray-800">
                          {lng.name}
                        </span>
                        {typeof lng.value === "number" && (
                          <span className="text-gray-500">
                            {lng.levelLabel ? `${lng.levelLabel} · ` : ""}
                            {lng.value}%
                          </span>
                        )}
                      </div>
                      <Progress value={lng.value ?? 0} className="h-2" />
                    </li>
                  ))}
                </ul>
              </section>
            )}
            <Separator />
            {/* Award */}
            {t.award && (
              <section>
                <SectionTitle>{t.labels.award}</SectionTitle>
                <div>
                  <p className="text-xs text-gray-500">{t.award.year}</p>
                  <p className="font-semibold uppercase">{t.award.title}</p>
                  <p className="text-sm text-gray-600">{t.award.place}</p>
                  {t.award.note && (
                    <p className="text-sm text-gray-600 mt-2">{t.award.note}</p>
                  )}
                </div>
              </section>
            )}
          </aside>

          {/* Center separator */}
          <div className="hidden md:block bg-gray-200" aria-hidden />

          {/* Right column */}
          <section className="flex flex-col gap-8">
            {/* Profile */}
            <div>
              <SectionTitle>{t.labels.profile}</SectionTitle>
              <p className="text-sm leading-6 text-gray-700">{t.profile}</p>
            </div>

            {/* Work Experience */}
            <div>
              <SectionTitle>{t.labels.workExperience}</SectionTitle>
              {t.experience.map((exp, idx) => (
                <div
                  key={idx}
                  className={`rounded-xl  p-5 ${idx > 0 ? "mt-6" : ""}`}
                >
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <span className="w-12">{exp.year}</span>
                    <span className="text-gray-400">{exp.company}</span>
                  </div>
                  <Separator />
                  <h4 className="mt-1 font-semibold text-lg">{exp.position}</h4>
                  <div className="mt-4 space-y-2 text-sm text-gray-700">
                    {exp.summary && <p>{exp.summary}</p>}
                    <ul className="list-disc pl-5 space-y-1">
                      {exp.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
