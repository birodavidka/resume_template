// app/lib/store/useResumeStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Locale, PersonId } from "@/app/shared/types";

type ResumeState = {
  locale: Locale;
  personId: PersonId;
  setLocale: (l: Locale) => void;
  setPerson: (p: PersonId) => void;
  reset: () => void;
  init?: (partial: Partial<Pick<ResumeState, "locale" | "personId">>) => void;
};

export const useResumeStore = create<ResumeState>()(
  persist(
    (set) => ({
      locale: "hu",
      personId: "personA",
      setLocale: (l) => {
        // opcionális: cookie sync
        if (typeof document !== "undefined") {
          document.cookie = `resume-locale=${l}; path=/; max-age=31536000`;
        }
        set({ locale: l });
      },
      setPerson: (p) => {
        if (typeof document !== "undefined") {
          document.cookie = `resume-person=${p}; path=/; max-age=31536000`;
        }
        set({ personId: p });
      },
      reset: () => set({ locale: "hu", personId: "personA" }),
      init: (partial) => set((s) => ({ ...s, ...partial })),
    }),
    { name: "resume-store" } // localStorage kulcs
  )
);
