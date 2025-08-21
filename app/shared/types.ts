// app/shared/types.ts

export type Locale = "hu" | "en" | "de";
export type PersonId = "personA" | "personB";

export interface PersonalInfo {
  name: string;
  email: string;
  address: string;
  phone: string;
}

export interface Education {
  institution: string;
  year: string;           // pl. "2021–2025"
  major: string;          // szak / szakirány
  description?: string;
  keySubjects?: string[]; // főbb tantárgyak
}

export interface Experience {
  company: string;
  position: string;
  description?: string;
  year: string;           // pl. "2019–2021"
}

export interface LanguageItem {
  name: string;           // megnevezés (pl. "Angol")
  level: string;          // szint (pl. "B2 – középfok")
  flag?: string;          // emoji 🇭🇺 / asset útvonal
}

export interface Skillset {
  title: string;          // pl. "Frontend", "DevOps"
  items: string[];        // pl. ["React", "Next.js", ...]
}

export interface CVProfile {
  personal: PersonalInfo;
  education: Education[]; // (iskola1, iskola2)
  experience: Experience[];// (munka1, munka2)
  languages: LanguageItem[]; // (nyelv1, nyelv2)
  skills: Skillset[];        // 3–4 blokk
}

// Nyelvi -> Account -> Profil
export type CVData = Record<Locale, Record<PersonId, CVProfile>>;
