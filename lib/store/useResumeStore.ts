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
};

export const useResumeStore = create<ResumeState>()(
  persist(
    (set) => ({
      locale: "hu",
      personId: "personA",
      setLocale: (l) => set({ locale: l }),
      setPerson: (p) => set({ personId: p }),
      reset: () => set({ locale: "hu", personId: "personA" }),
    }),
    {
      name: "resume-store", // localStorage kulcs
    }
  )
);
