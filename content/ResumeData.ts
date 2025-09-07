// content/ResumeData.ts
import type { Lang } from "@/lib/store/lang";

export type PersonId = 'David' | 'Dzsenifer'; // Add 'David' to the PersonId type

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
        addressLines: ["Szombathely", "HUNGARY"],
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
        { from: "2011", to: "2013", degree: "Logistics Administrator", place: "VMSZC Savaria , Szombathely" },
      ],
      skillsHeader: "// Professional",
      skills: [
        "Lean 5S principles",
        "Quality assurance & attention to detail",
        "Team collaboration in production environments",
        "Basic database management (SQL)",
        "Network administration fundamentals",
        "Programming & scripting (Python, C#)",
      ],
      award: {
        year: "2011",
        title: "Driving License",
        place: " ",
        note: "Category B",
      },
      profile:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the leap into electronic typesetting.",
      experience: [
        {
          year: "2024",
          company: "Schaeffler Savaria Kft.",
          position: "Production Operator (Assembly)",
          summary: "Since 2024 employed in the production department, responsible for precise assembly tasks within an international automotive supplier.",
          bullets: [
            "Performed assembly tasks in accordance with strict quality and safety standards",
            "Adhered to production schedules while working in a team-oriented environment",
            "Maintained strong attention to detail and consistent quality throughout the manufacturing process",
          ],
        },
        {
          year: "2018",
          company: "Aptiv Services Hungary Kft.",
          position: "Production Operator (Electronics Manufacturing)",
          summary: "Worked in an international automotive supplier company, focusing on the assembly of electronic components (SMT) and applying lean principles such as 5S.",
          bullets: [
            "Operated and monitored SMT (Surface-Mount Technology) production processes",
            "Applied lean manufacturing tools (5S) to ensure efficient and safe workflows",
            "Contributed to maintaining product quality standards in a fast-paced environment",
          ],
        },
      ],
    },
    de: {
      nameTop: "BIRO",
      nameBottom: "DAVID",
      title: "Universität Dunaújváros, Abschluss",
      contact: {
        addressLines: ["Kenyérvíz strasse", "Ungarn, Szombathely"],
        phone: "(+36 30) 185-5542",
        email: "biro.david93@gmail.com",
        website: " ",
      },
      labels: {
        education: "Ausbildung",
        skills: "Fähigkeiten",
        award: "Kentnisse",
        profile: "Profil",
        workExperience: "Berufserfahrung",
        languages: "Fremdsprachen",
      },
      languages: [
        { name: "Ungarisch", value: 100, levelLabel: "Muttersprache" },
        { name: "Englisch", value: 75, levelLabel: "" },
        { name: "Deutsch", value: 15, levelLabel: "" },
      ],
      education: [
        { from: "2024", to: "2026", degree: "Studienabschluss eintragen", place: "Institutsname, Ort" },
        { from: "2010", to: "2014", degree: "Studienabschluss eintragen", place: "Institutsname, Ort" },
      ],
      skillsHeader: "// Professionell",
      skills: [
        "Lean 5S Prinzipien",
        "Qualitätssicherung & Liebe zum Detail",
        "Teamarbeit in Produktionsumgebungen",
        "Grundlagen der Datenbankverwaltung (SQL)",
        "Grundlagen der Netzwerkadministration",
        "Programmierung & Scripting (Python, C#)",
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
          year: "2024",
          company: "Schaeffler Savaria Kft.",
          position: "Produktionsmitarbeiter (Montage)",
          summary: "Seit 2024 in der Produktion tätig, Schwerpunkt auf präziser Montagearbeit in einem internationalen Automobilzulieferbetrieb.",
          bullets: [
            "Durchführung von Montagearbeiten nach genauen Qualitäts- und Sicherheitsvorgaben",
            "Einhaltung von Produktionsplänen in einem teamorientierten Umfeld",
            "Kontinuierliche Aufmerksamkeit für Qualität und Details im Fertigungsprozess",
          ],
        },
        {
          year: "2018",
          company: "Aptiv Services Hungary Kft.",
          position: "Produktionsmitarbeiter (Elektronikfertigung)",
          summary: "Tätig bei einem internationalen Automobilzulieferer mit Schwerpunkt auf der Montage elektronischer Komponenten (SMT) und der Anwendung von Lean-Prinzipien wie 5S.",
          bullets: [
            "Bedienung und Überwachung von SMT-Produktionsprozessen",
            "Anwendung von Lean-Methoden (5S) zur Sicherstellung effizienter und sicherer Arbeitsabläufe",
            "Mitwirkung an der Einhaltung hoher Qualitätsstandards in einem dynamischen Produktionsumfeld",
          ],
        },
      ],
    },
    hu: {
      nameTop: "BIRÓ",
      nameBottom: "DÁVID",
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
        award: "Egyéb",
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
        { from: "2024", to: "2026", degree: "Mérnökinformatikus", place: "Dunaújvárosi Egyetem, Dunaújváros" },
        { from: "2011", to: "2013", degree: "Logisztikai műszakimenedzser asszisztens", place: "Intézmény neve, Szombathely" },
      ],
      skillsHeader: "// Professzionális",
      skills: [
        "Lean 5S elvek",
        "Minőségbiztosítás & részletekre való odafigyelés",
        "Csapatmunka termelési környezetben",
        "Alapvető adatbázis-kezelés (SQL)",
        "Hálózatkezelési alapok",
        "Programozás & szkriptnyelvek (Python, C#)",
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
          year: "2024",
          company: "Schaeffler Savaria Kft.",
          position: "Termelési munkatárs (Összeszerelés)",
          summary: "2024 óta dolgozom egy nemzetközi autóipari beszállítónál, ahol precíz összeszerelési feladatokat látok el a termelésben.",
          bullets: [
            "Összeszerelési munkák elvégzése szigorú minőségi és biztonsági előírások szerint",
            "Termelési tervek teljesítése csapatmunkára épülő környezetben",
            "Folyamatos figyelem a részletekre és a minőség fenntartására a gyártási folyamat során",
          ],
        },
        {
          year: "2019",
          company: "Aptiv Services Hungary Kft.",
          position: "Termelési munkatárs (Elektronikai gyártás)",
          summary: "Nemzetközi autóipari beszállítónál dolgoztam, főként elektronikai alkatrészek összeszerelésében (SMT), valamint lean eszközök – például 5S – alkalmazásában.",
          bullets: [
            "SMT (Surface-Mount Technology) gyártási folyamatok kezelése és felügyelete",
            "Lean gyártási eszközök (5S) alkalmazása a hatékony és biztonságos munkavégzés érdekében",
            "A termékminőségi előírások folyamatos biztosítása gyors ütemű környezetben",
          ],
        },
      ],
    },
  },

  // példa: második személy – töltsd ki később
  Dzsenifer: {
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
