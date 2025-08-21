// app/shared/data.ts
import type { CVData } from "./types";

export const CV_DATA: CVData = {
  hu: {
    personA: {
      personal: {
        name: "Kiss Péter",
        email: "peter.kiss@example.com",
        address: "1111 Budapest, Minta utca 1.",
        phone: "+36 30 123 4567",
      },
      education: [
        {
          institution: "Dunaújvárosi Egyetem",
          year: "2023–2026",
          major: "Mérnökinformatikus – rendszergazda elágazás",
          description:
            "Rendszergazdai alapismeretek, hálózatok, szerverüzemeltetés.",
          keySubjects: [
            "Hálózatmenedzselés",
            "Script nyelvek",
            "Adatbáziskezelés",
          ],
        },
        {
          institution: "Minta Középiskola",
          year: "2017–2021",
          major: "Informatika",
          description: "Programozási alapok és rendszerüzemeltetés.",
        },
      ],
      experience: [
        {
          company: "Aptiv",
          position: "Gyártási operátor",
          year: "2021–2022",
          description:
            "Lean eszközök használata, SMT folyamatok, minőségbiztosítás.",
        },
        {
          company: "Demo Kft.",
          position: "IT gyakornok",
          year: "2020 nyár",
          description:
            "Helpdesk támogatás, eszközök beüzemelése, alap hálózati feladatok.",
        },
      ],
      languages: [
        { name: "Magyar", level: "Anyanyelv", flag: "🇭🇺" },
        { name: "Angol", level: "B2 – középfok", flag: "🇬🇧" },
      ],
      skills: [
        { title: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind"] },
        { title: "Backend", items: ["Node.js", "Express", "Firebase", "AWS Lambda"] },
        { title: "DevOps", items: ["Docker", "Terraform (alap)", "CI/CD (GitHub Actions)"] },
        { title: "Egyéb", items: ["Git", "Zustand", "Redux (alap)"] },
      ],
    },
    personB: {
      personal: {
        name: "Nagy Anna",
        email: "anna.nagy@example.com",
        address: "4026 Debrecen, Példa u. 5.",
        phone: "+36 70 987 6543",
      },
      education: [
        {
          institution: "Budapesti Műszaki és Gazdaságtudományi Egyetem",
          year: "2018–2022",
          major: "Gazdaságinformatikus",
          description: "Adatvezérelt rendszerek, üzleti folyamatok.",
          keySubjects: ["Adatbázisok", "Statisztika", "IT menedzsment"],
        },
        {
          institution: "Példa Gimnázium",
          year: "2014–2018",
          major: "Emelt informatika",
        },
      ],
      experience: [
        {
          company: "WebLab Zrt.",
          position: "Frontend fejlesztő",
          year: "2022–",
          description:
            "SPA fejlesztés, UI komponensek, hozzáférhetőség és performance.",
        },
        {
          company: "ShopStart",
          position: "Gyakornok",
          year: "2021 nyár",
          description: "Webshop modulok, Stripe integráció, QA.",
        },
      ],
      languages: [
        { name: "Magyar", level: "Anyanyelv", flag: "🇭🇺" },
        { name: "Német", level: "B1 – alap/közép", flag: "🇩🇪" },
      ],
      skills: [
        { title: "Frontend", items: ["React", "Next.js", "Zustand", "Shadcn UI"] },
        { title: "Design", items: ["Figma", "Responsive layout", "A11y alapok"] },
        { title: "Tesztelés", items: ["Jest", "Testing Library"] },
      ],
    },
  },

  en: {
    personA: {
      personal: {
        name: "Peter Kiss",
        email: "peter.kiss@example.com",
        address: "Minta st. 1, Budapest 1111",
        phone: "+36 30 123 4567",
      },
      education: [
        {
          institution: "University of Dunaújváros",
          year: "2023–2026",
          major: "Computer Engineering – System Administration",
          description:
            "Networking, servers, and system administration fundamentals.",
          keySubjects: ["Network Management", "Scripting", "Database Systems"],
        },
        { institution: "Sample High School", year: "2017–2021", major: "IT" },
      ],
      experience: [
        {
          company: "Aptiv",
          position: "Manufacturing Operator",
          year: "2021–2022",
          description:
            "Lean tools, SMT processes, and quality assurance practices.",
        },
        {
          company: "Demo LLC",
          position: "IT Intern",
          year: "Summer 2020",
          description:
            "Helpdesk, device provisioning, and basic networking tasks.",
        },
      ],
      languages: [
        { name: "Hungarian", level: "Native", flag: "🇭🇺" },
        { name: "English", level: "B2 – upper-intermediate", flag: "🇬🇧" },
      ],
      skills: [
        { title: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind"] },
        { title: "Backend", items: ["Node.js", "Express", "Firebase", "AWS Lambda"] },
        { title: "DevOps", items: ["Docker", "Terraform (basic)", "CI/CD (GitHub Actions)"] },
        { title: "Other", items: ["Git", "Zustand", "Redux (basic)"] },
      ],
    },
    personB: {
      personal: {
        name: "Anna Nagy",
        email: "anna.nagy@example.com",
        address: "Példa u. 5, Debrecen 4026",
        phone: "+36 70 987 6543",
      },
      education: [
        {
          institution: "Budapest University of Technology and Economics",
          year: "2018–2022",
          major: "Business Information Systems",
          description: "Data-driven systems and business processes.",
          keySubjects: ["Databases", "Statistics", "IT Management"],
        },
        { institution: "Example Grammar School", year: "2014–2018", major: "Advanced IT" },
      ],
      experience: [
        {
          company: "WebLab Plc.",
          position: "Frontend Developer",
          year: "2022–",
          description:
            "SPA development, UI components, accessibility and performance.",
        },
        {
          company: "ShopStart",
          position: "Intern",
          year: "Summer 2021",
          description: "Webshop modules, Stripe integration, QA.",
        },
      ],
      languages: [
        { name: "Hungarian", level: "Native", flag: "🇭🇺" },
        { name: "German", level: "B1 – intermediate", flag: "🇩🇪" },
      ],
      skills: [
        { title: "Frontend", items: ["React", "Next.js", "Zustand", "Shadcn UI"] },
        { title: "Design", items: ["Figma", "Responsive layout", "A11y basics"] },
        { title: "Testing", items: ["Jest", "Testing Library"] },
      ],
    },
  },

  de: {
    personA: {
      personal: {
        name: "Péter Kiss",
        email: "peter.kiss@example.com",
        address: "Minta Str. 1, 1111 Budapest",
        phone: "+36 30 123 4567",
      },
      education: [
        {
          institution: "Universität Dunaújváros",
          year: "2023–2026",
          major: "Ingenieurinformatik – Systemadministration",
          description:
            "Netzwerke, Server und Grundlagen der Systemadministration.",
          keySubjects: ["Netzwerkmanagement", "Skripting", "Datenbanken"],
        },
        { institution: "Beispiel Oberschule", year: "2017–2021", major: "IT" },
      ],
      experience: [
        {
          company: "Aptiv",
          position: "Fertigungsmitarbeiter",
          year: "2021–2022",
          description:
            "Einsatz von Lean-Tools, SMT-Prozesse und Qualitätssicherung.",
        },
        {
          company: "Demo GmbH",
          position: "IT-Praktikant",
          year: "Sommer 2020",
          description:
            "Helpdesk, Gerätebereitstellung und grundlegende Netzwerkthemen.",
        },
      ],
      languages: [
        { name: "Ungarisch", level: "Muttersprache", flag: "🇭🇺" },
        { name: "Englisch", level: "B2 – Oberstufe", flag: "🇬🇧" },
      ],
      skills: [
        { title: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind"] },
        { title: "Backend", items: ["Node.js", "Express", "Firebase", "AWS Lambda"] },
        { title: "DevOps", items: ["Docker", "Terraform (Basis)", "CI/CD (GitHub Actions)"] },
        { title: "Sonstiges", items: ["Git", "Zustand", "Redux (Basis)"] },
      ],
    },
    personB: {
      personal: {
        name: "Anna Nagy",
        email: "anna.nagy@example.com",
        address: "Példa Str. 5, 4026 Debrecen",
        phone: "+36 70 987 6543",
      },
      education: [
        {
          institution:
            "Budapester Universität für Technik und Wirtschaft",
          year: "2018–2022",
          major: "Wirtschaftsinformatik",
          description: "Datengetriebene Systeme und Geschäftsprozesse.",
          keySubjects: ["Datenbanken", "Statistik", "IT-Management"],
        },
        { institution: "Beispiel Gymnasium", year: "2014–2018", major: "Erweitertes IT" },
      ],
      experience: [
        {
          company: "WebLab AG",
          position: "Frontend-Entwicklerin",
          year: "seit 2022",
          description:
            "SPA-Entwicklung, UI-Komponenten, Barrierefreiheit und Performance.",
        },
        {
          company: "ShopStart",
          position: "Praktikantin",
          year: "Sommer 2021",
          description: "Webshop-Module, Stripe-Integration, QA.",
        },
      ],
      languages: [
        { name: "Ungarisch", level: "Muttersprache", flag: "🇭🇺" },
        { name: "Deutsch", level: "B1 – Mittelstufe", flag: "🇩🇪" },
      ],
      skills: [
        { title: "Frontend", items: ["React", "Next.js", "Zustand", "Shadcn UI"] },
        { title: "Design", items: ["Figma", "Responsive Layout", "A11y Basics"] },
        { title: "Testing", items: ["Jest", "Testing Library"] },
      ],
    },
  },
};

// Helper (nem kötelező, de kényelmes)
export const getProfile = (locale: "hu" | "en" | "de", personId: "personA" | "personB") =>
  CV_DATA[locale][personId];
