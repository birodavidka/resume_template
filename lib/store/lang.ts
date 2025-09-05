"use client";

import { create } from "zustand";

export type Lang = "en" | "de" | "hu";
export type PersonId = "arena" | "john"; // tetszőleges azonosítók

interface UIState {
  lang: Lang;
  person: PersonId;
  setLang: (l: Lang) => void;
  setPerson: (p: PersonId) => void;
}

export const useLangStore = create<UIState>((set) => ({
  lang: "en",
  person: "arena",
  setLang: (l) => set({ lang: l }),
  setPerson: (p) => set({ person: p }),
}));


interface UIState {
  lang: Lang;
  person: PersonId;
  setLang: (l: Lang) => void;
  setPerson: (p: PersonId) => void;
}