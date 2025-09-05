// content/ResumeData.ts
import type { Lang } from "@/lib/store/lang";

export type PersonId = 'David' | 'dzsenifer'; // Add 'David' to the PersonId type

export type Education = { from: string; to: string; degree: string; place: string };
export type Experience = {
  year: string;
  company: string;
  position: string;
  bullets: string[];
  summary?: string;
};
export type LanguageSkill = {
  name: string;        // pl. "English"
  value: number;       // 0..100 (Progress érték)
  levelLabel?: string; // opcionális, pl. "C1", "Native", stb.
};
export type ResumeData = {
  nameTop: string;
  nameBottom: string;
  title: string;
  contact: { addressLines: string[]; phone: string; email: string; website: string };
  labels: {
    education: string;
    skills: string;
    award: string;
    profile: string;
    workExperience: string;
    languages: string; 
  };
  education: Education[];
  skillsHeader: string;
  skills: string[];
  award?: { year: string; title: string; place: string; note?: string };
  profile: string;
  experience: Experience[];
  languages?: LanguageSkill[];
};

// ⚠️ Csak EGY export legyen ebben a fájlban ezzel a névvel!
export const resumeDATA: Record<PersonId, Record<Lang, ResumeData>> = {
  David: {
    en: {
      nameTop: "BIRO",
      nameBottom: "DAVID",
      title: "University of Dunaújváros grad",
      contact: {
        addressLines: ["Kenyérvíz", "Street, Szombathely, HU"],
        phone: "(+36 30) 185 5542",
        email: "biro.david93@gmail.com",
        website: " ",
      },
      labels: {
        education: "Education",
        skills: "Skills",
        award: "Others",
        profile: "Profile",
        workExperience: "Work Experience",
        languages: "Languages", // ⬅️
      },
      languages: [               // ⬅️
        { name: "Hungarian", value: 100, levelLabel: "Native" },
        { name: "English", value: 75, levelLabel: "" },
        { name: "German", value: 15, levelLabel: "" },
      ],
      education: [
        { from: "2024", to: "2026", degree: "Information Technology Engineer ", place: "University of Dunaújváros, Dunaújváros" },
        { from: "2011", to: "2013", degree: "Logistics Clerk", place: "VMSZC Savaria , Szombathely" },
      ],
      skillsHeader: "// Professional",
      skills: [
        "Public Relations",
        "Resource Management",
        "Team Leadership",
        "Social Media Marketing",
        "Online Marketing",
        "Budgeting and Planning",
        "Problem Solving",
        "IT Applications",
      ],
      award: {
        year: "2011",
        title: "Award / Achievement",
        place: "Company Name / Location",
        note: "Lorem ipsum is simply dummy text printing and typesetting.",
      },
      profile:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the leap into electronic typesetting.",
      experience: [
        {
          year: "2014",
          company: "Company Name",
          position: "Enter Your Job Position",
          summary: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
          bullets: ["Wrote and maintained production-grade code.", "Cross-team collaboration.", "Improved performance."],
        },
        {
          year: "2018",
          company: "Company Name",
          position: "Enter Your Job Position",
          summary: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
          bullets: ["Owned deliverables.", "Mentored juniors.", "Automated workflows."],
        },
        {
          year: "2024",
          company: "Company Name",
          position: "Enter Your Job Position",
          summary: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
          bullets: ["Led migration.", "Shipped features.", "Optimized costs."],
        },
      ],
    },
    de: {
      nameTop: "ARENA",
      nameBottom: "HERNADES",
      title: "Berufliche Bezeichnung",
      contact: {
        addressLines: ["Lorem Ipsum, einfach Dummy", "Allee, New York, USA"],
        phone: "(+0123) 456 789",
        email: "nameinfo@example.com",
        website: "www.namedomain.com",
      },
      labels: {
        education: "Ausbildung",
        skills: "Fähigkeiten",
        award: "Auszeichnung",
        profile: "Profil",
        workExperience: "Berufserfahrung",
        languages: "Sprachen",
      },
      languages: [
        { name: "Ungarisch", value: 100, levelLabel: "Muttersprache" },
        { name: "Englisch", value: 75, levelLabel: "" },
        { name: "Deutsch", value: 15, levelLabel: "" },
      ],
      education: [
        { from: "2014", to: "2018", degree: "Studienabschluss eintragen", place: "Institutsname, Ort" },
        { from: "2010", to: "2014", degree: "Studienabschluss eintragen", place: "Institutsname, Ort" },
      ],
      skillsHeader: "// Professionell",
      skills: [
        "Öffentlichkeitsarbeit",
        "Ressourcenmanagement",
        "Teamführung",
        "Social-Media-Marketing",
        "Online-Marketing",
        "Budgetierung & Planung",
        "Problemlösung",
        "IT-Anwendungen",
      ],
      award: {
        year: "2013",
        title: "Auszeichnung / Leistung",
        place: "Firmenname / Ort",
        note: "Lorem ipsum Blindtext für Druck & Satz.",
      },
      profile: "Lorem Ipsum ist ein Blindtext der Druck- und Satzindustrie und hat Jahrhunderte überdauert.",
      experience: [
        {
          year: "2014",
          company: "Firmenname",
          position: "Jobbezeichnung",
          summary: "Kurzbeschreibung der Tätigkeit.",
          bullets: ["Produktionscode gepflegt", "Mit Teams kooperiert", "Performance verbessert"],
        },
        {
          year: "2018",
          company: "Firmenname",
          position: "Jobbezeichnung",
          summary: "Kurzbeschreibung der Tätigkeit.",
          bullets: ["Deliverables verantwortet", "Juniors gecoacht", "Workflows automatisiert"],
        },
        {
          year: "2024",
          company: "Firmenname",
          position: "Jobbezeichnung",
          summary: "Kurzbeschreibung der Tätigkeit.",
          bullets: ["Migration geleitet", "Features ausgeliefert", "Kosten optimiert"],
        },
      ],
    },
    hu: {
      nameTop: "ARENA",
      nameBottom: "HERNADES",
      title: "Pozíció megnevezése",
      contact: {
        addressLines: ["Lorem Ipsum, egyszerű minta", "Sugárút, New York, USA"],
        phone: "+(0123) 456 789",
        email: "nameinfo@example.com",
        website: "www.namedomain.com",
      },
      labels: {
        education: "Tanulmányok",
        skills: "Készségek",
        award: "Díj",
        profile: "Profil",
        workExperience: "Szakmai tapasztalat",
        languages: "Nyelvek",
      },
      languages: [
        { name: "Magyar", value: 100, levelLabel: "Anyanyelv" },
        { name: "Angol", value: 75, levelLabel: "" },
        { name: "Német", value: 15, levelLabel: "" },
      ],
      education: [
        { from: "2014", to: "2018", degree: "Végzettség megnevezése", place: "Intézmény neve, Helyszín" },
        { from: "2010", to: "2014", degree: "Végzettség megnevezése", place: "Intézmény neve, Helyszín" },
      ],
      skillsHeader: "// Professzionális",
      skills: [
        "PR",
        "Erőforrás-menedzsment",
        "Csapatvezetés",
        "Közösségi média marketing",
        "Online marketing",
        "Költségvetés és tervezés",
        "Problémamegoldás",
        "IT alkalmazások",
      ],
      award: {
        year: "2013",
        title: "Díj / Eredmény",
        place: "Cégnév / Helyszín",
        note: "Nyomdai és szedési helykitöltő szöveg.",
      },
      profile:
        "Helykitöltő szöveg a nyomdai és kiadói iparból; évszázadok óta használatos, és túlélte az elektronikus kiadványszerkesztés korát.",
      experience: [
        {
          year: "2014",
          company: "Cégnév",
          position: "Munkakör megnevezése",
          summary: "Rövid összefoglaló.",
          bullets: ["Termelési kód karbantartása", "Csapatmunka", "Teljesítményjavítás"],
        },
        {
          year: "2018",
          company: "Cégnév",
          position: "Munkakör megnevezése",
          summary: "Rövid összefoglaló.",
          bullets: ["Felelősségvállalás", "Mentorálás", "Automatizálás"],
        },
        {
          year: "2024",
          company: "Cégnév",
          position: "Munkakör megnevezése",
          summary: "Rövid összefoglaló.",
          bullets: ["Migráció vezetése", "Feature-ök szállítása", "Költségoptimalizálás"],
        },
      ],
    },
  },

  // példa: második személy – töltsd ki később
  dzsenifer: {
    en: {
      nameTop: "KULCSÁR",
      nameBottom: "DZSENIFER",
      title: "Professional Title",
      contact: {
        addressLines: ["Lorem Ipsum, simply dummy", "Avenue, New York, USA"],
        phone: "(+0123) 456 789",
        email: "nameinfo@example.com",
        website: "www.namedomain.com",
      },
      labels: {
        education: "Education",
        skills: "Skills",
        award: "Award",
        profile: "Profile",
        workExperience: "Work Experience",
        languages: "Languages", // 
      },
      languages: [               // ⬅️
        { name: "Hungarian", value: 100, levelLabel: "Native" },
        { name: "English", value: 75, levelLabel: "" },
        { name: "German", value: 15, levelLabel: "" },
      ],
      education: [
        { from: "2014", to: "2018", degree: "Enter Your Degree", place: "Institute Name, Location" },
        { from: "2010", to: "2014", degree: "Enter Your Degree", place: "Institute Name, Location" },
      ],
      skillsHeader: " asd",
      skills: [
        "Public Relations",
        "Resource Management",
        "Team Leadership",
        "Social Media Marketing",
        "Online Marketing",
        "Budgeting and Planning",
        "Problem Solving",
        "IT Applications",
      ],
      award: {
        year: "2013",
        title: "Award / Achievement",
        place: "Company Name / Location",
        note: "Lorem ipsum is simply dummy text printing and typesetting.",
      },
      profile:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the leap into electronic typesetting.",
      experience: [
        {
          year: "2014",
          company: "Company Name",
          position: "Enter Your Job Position",
          summary: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
          bullets: ["Wrote and maintained production-grade code.", "Cross-team collaboration.", "Improved performance."],
        },
        {
          year: "2018",
          company: "Company Name",
          position: "Enter Your Job Position",
          summary: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
          bullets: ["Owned deliverables.", "Mentored juniors.", "Automated workflows."],
        },
        {
          year: "2024",
          company: "Company Name",
          position: "Enter Your Job Position",
          summary: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
          bullets: ["Led migration.", "Shipped features.", "Optimized costs."],
        },
      ],
    },
    de: {
        nameTop: "ARENA",
        nameBottom: "HERNADES",
        title: "Berufliche Bezeichnung",
        contact: {
          addressLines: ["Lorem Ipsum, einfach Dummy", "Allee, New York, USA"],
          phone: "(+0123) 456 789",
          email: "nameinfo@example.com",
          website: "www.namedomain.com",
        },
        labels: {
          education: "Ausbildung",
          skills: "Fähigkeiten",
          award: "Auszeichnung",
          profile: "Profil",
          workExperience: "Berufserfahrung",
          languages: "Sprachen",
        },
        languages: [
          { name: "Ungarisch", value: 100, levelLabel: "Muttersprache" },
          { name: "Englisch", value: 75, levelLabel: "" },
          { name: "Deutsch", value: 15, levelLabel: "" },
        ],
        education: [
          { from: "2014", to: "2018", degree: "Studienabschluss eintragen", place: "Institutsname, Ort" },
          { from: "2010", to: "2014", degree: "Studienabschluss eintragen", place: "Institutsname, Ort" },
        ],
        skillsHeader: "// Professionell",
        skills: [
          "Öffentlichkeitsarbeit",
          "Ressourcenmanagement",
          "Teamführung",
          "Social-Media-Marketing",
          "Online-Marketing",
          "Budgetierung & Planung",
          "Problemlösung",
          "IT-Anwendungen",
        ],
        award: {
          year: "2013",
          title: "Auszeichnung / Leistung",
          place: "Firmenname / Ort",
          note: "Lorem ipsum Blindtext für Druck & Satz.",
        },
        profile: "Lorem Ipsum ist ein Blindtext der Druck- und Satzindustrie und hat Jahrhunderte überdauert.",
        experience: [
          {
            year: "2014",
            company: "Firmenname",
            position: "Jobbezeichnung",
            summary: "Kurzbeschreibung der Tätigkeit.",
            bullets: ["Produktionscode gepflegt", "Mit Teams kooperiert", "Performance verbessert"],
          },
          {
            year: "2018",
            company: "Firmenname",
            position: "Jobbezeichnung",
            summary: "Kurzbeschreibung der Tätigkeit.",
            bullets: ["Deliverables verantwortet", "Juniors gecoacht", "Workflows automatisiert"],
          },
          {
            year: "2024",
            company: "Firmenname",
            position: "Jobbezeichnung",
            summary: "Kurzbeschreibung der Tätigkeit.",
            bullets: ["Migration geleitet", "Features ausgeliefert", "Kosten optimiert"],
          },
        ],
    } as ResumeData,
    hu: {nameTop: "ARENA",
      nameBottom: "HERNADES",
      title: "Pozíció megnevezése",
      contact: {
        addressLines: ["Lorem Ipsum, egyszerű minta", "Sugárút, New York, USA"],
        phone: "+(0123) 456 789",
        email: "nameinfo@example.com",
        website: "www.namedomain.com",
      },
      labels: {
        education: "Tanulmányok",
        skills: "Készségek",
        award: "Díj",
        profile: "Profil",
        workExperience: "Szakmai tapasztalat",
        languages: "Nyelvek",
      },
      languages: [
        { name: "Magyar", value: 100, levelLabel: "Anyanyelv" },
        { name: "Angol", value: 60, levelLabel: "" },
        { name: "Német", value: 20, levelLabel: "" },
      ],
      education: [
        { from: "2014", to: "2018", degree: "Végzettség megnevezése", place: "Intézmény neve, Helyszín" },
        { from: "2010", to: "2014", degree: "Végzettség megnevezése", place: "Intézmény neve, Helyszín" },
      ],
      skillsHeader: "// Professzionális",
      skills: [
        "PR",
        "Erőforrás-menedzsment",
        "Csapatvezetés",
        "Közösségi média marketing",
        "Online marketing",
        "Költségvetés és tervezés",
        "Problémamegoldás",
        "IT alkalmazások",
      ],
      award: {
        year: "2013",
        title: "Díj / Eredmény",
        place: "Cégnév / Helyszín",
        note: "Nyomdai és szedési helykitöltő szöveg.",
      },
      profile:
        "Helykitöltő szöveg a nyomdai és kiadói iparból; évszázadok óta használatos, és túlélte az elektronikus kiadványszerkesztés korát.",
      experience: [
        {
          year: "2014",
          company: "Cégnév",
          position: "Munkakör megnevezése",
          summary: "Rövid összefoglaló.",
          bullets: ["Termelési kód karbantartása", "Csapatmunka", "Teljesítményjavítás"],
        },
        {
          year: "2018",
          company: "Cégnév",
          position: "Munkakör megnevezése",
          summary: "Rövid összefoglaló.",
          bullets: ["Felelősségvállalás", "Mentorálás", "Automatizálás"],
        },
        {
          year: "2024",
          company: "Cégnév",
          position: "Munkakör megnevezése",
          summary: "Rövid összefoglaló.",
          bullets: ["Migráció vezetése", "Feature-ök szállítása", "Költségoptimalizálás"],
        },
      ],} as ResumeData,
  },
};
