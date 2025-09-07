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
    others: string;
    profile: string;
    workExperience: string;
    languages: string; 
  };
  education: Education[];
  skillsHeader: string;
  skills: string[];
  others?: { title: string; note?: string }[];
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
        addressLines: ["Lorem Ipsum, egyszerű minta", "Sugárút, New York, USA"],
        phone: "+(0123) 456 789",
        email: "nameinfo@example.com",
        website: "www.namedomain.com",
      },
      labels: {
        education: "Education",
        skills: "Skills",
        others: "Others",
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
      others: [
        { title: "Driving License (Category B)" },
        { title: "MS Office proficiency" },
        { title: "AWS Cloud Practitioner – in progress" },
        { title: "German language learning – in progress" },
      ],
      profile:
        "Reliable and adaptable employee with practical experience in manufacturing. Known for precision, teamwork, and a willingness to learn new skills.",
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
        addressLines: ["Lorem Ipsum, egyszerű minta", "Sugárút, New York, USA"],
        phone: "+(0123) 456 789",
        email: "nameinfo@example.com",
        website: "www.namedomain.com",
      },
      labels: {
        education: "Ausbildung",
        skills: "Fähigkeiten",
        others: "Sonstiges",
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
        {
          from: "2024",
          to: "2026",
          degree: "Studium Wirtschaftsingenieurwesen – Fachrichtung Informatik",
          place: "Universität Dunaújváros, Dunaújváros",
        },
        {
          from: "2011",
          to: "2013",
          degree: "Assistent für Logistik- und Produktionsmanagement",
          place: "Berufsbildungszentrum Savaria (VMSZC), Szombathely",
        },
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
      others: [
        { title: "Führerschein (Klasse B)" },
        { title: "MS Office Kenntnisse" },
        { title: "AWS Cloud Practitioner – in Ausbildung" },
        { title: "Deutsch lernen – in Ausbildung" },
      ],
      profile: "Zuverlässiger und anpassungsfähiger Mitarbeiter mit praktischer Erfahrung in der Produktion. Bekannt für Genauigkeit, Teamarbeit und die Bereitschaft, neue Fähigkeiten zu erlernen.",
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
        others: "Egyéb", 
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
        { from: "2011", to: "2013", degree: "Logisztikai műszakimenedzser asszisztens", place: "VMSZC Savaria , Szombathely" },
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
      others: [
        { title: "B kategóriás jogosítvány" },
        { title: "MS Office ismeretek" },
        { title: "AWS Cloud Practitioner – folyamatban" },
        { title: "Német nyelv tanulás – folyamatban" },
      ],
      
      profile:
        "Megbízható és alkalmazkodó munkavállaló termelési tapasztalattal. Erősségeim a precizitás, a csapatmunka és az új készségek elsajátítására való nyitottság.",
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
      nameTop: "KULCSAR",
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
        others: "Others",
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
        { from: "2017", to: "2019", degree: "Nursing qualification", place: "Deák Ferenc Technical School, Zalaegerszeg" },
        { from: "2020", to: "2021", degree: "Pedagogical Assistant", place: "Számpont Educational Center" },
      ],
      skillsHeader: " asd",
      skills: [
        "Team collaboration",
        "Adaptability",
        "Patience & empathy",
        "Basic knowledge of 5S principles",
        "Attention to detail",
        "Supporting learning processes",
      ],
      others: [
        { title: "MS Office skills" },
        { title: "B category driving license" },
      ],
      profile: "Reliable and supportive employee with experience in education and manufacturing. Known for teamwork, adaptability, and willingness to learn new skills.",
      experience: [
        {
          year: "2022 – 2025",
          company: "Aptiv Services Hungary Kft.",
          position: "Production Operator (Electronics Assembly)",
          summary: "Worked in electronics manufacturing (SMT), focusing on precision and teamwork.",
          bullets: [
            "Performed assembly tasks in line with quality standards",
            "Applied 5S principles and maintained workplace organization",
            "Ensured production goals were met in a fast-paced environment",
          ],
        },
        {
          year: "2020 – 2021",
          company: "Mindszenti József Primary and Secondary School",
          position: "Pedagogical Assistant",
          summary: "Assisted teachers and supported students in daily school activities.",
          bullets: [
            "Supported classroom activities and learning processes",
            "Assisted students with individual needs",
            "Contributed to a positive and organized learning environment",
          ],
        },
      ],
    },
    de: {
        nameTop: "KULCSAR",
        nameBottom: "DZSENIFER",
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
          others: "Auszeichnung",
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
          { from: "2017", to: "2019", degree: "Abschluss in Krankenpflege", place: "Deák Ferenc Technikum, Zalaegerszeg" },
          { from: "2020", to: "2021", degree: "Pädagogische Assistentin", place: "Számpont Bildungszentrum" },
        ],
        skillsHeader: "// Professionell",
        skills: [
          "Teamarbeit",
          "Anpassungsfähigkeit",
          "Geduld & Empathie",
          "Grundkenntnisse der 5S-Prinzipien",
          "Detailgenauigkeit",
          "Unterstützung von Lernprozessen",
        ],
        others: [
          { title: "MS Office Kenntnisse" },
          { title: "Führerschein Klasse B" },
        ],
        profile: "Zuverlässige und hilfsbereite Mitarbeiterin mit Erfahrung im Bildungswesen und in der Produktion. Bekannt für Teamarbeit, Anpassungsfähigkeit und Lernbereitschaft.",
        experience: [
          {
            year: "2022 – 2025",
            company: "Aptiv Services Hungary Kft.",
            position: "Produktionsmitarbeiterin (Elektronikmontage)",
            summary: "Tätig in der Elektronikfertigung (SMT) mit Schwerpunkt auf Genauigkeit und Teamarbeit.",
            bullets: [
              "Montagearbeiten nach Qualitätsstandards durchgeführt",
              "5S-Prinzipien angewendet und Arbeitsplatzorganisation sichergestellt",
              "Erreichung der Produktionsziele in einem dynamischen Umfeld",
            ],
          },
          {
            year: "2020 – 2021",
            company: "Mindszenti József Grund- und Oberschule",
            position: "Pädagogische Assistentin",
            summary: "Unterstützung von Lehrkräften und Schülern im Schulalltag.",
            bullets: [
              "Unterstützung bei Unterrichtsaktivitäten und Lernprozessen",
              "Begleitung von Schülern mit individuellem Förderbedarf",
              "Mitwirkung an einer positiven und strukturierten Lernumgebung",
            ],
          },
        ],
    } as ResumeData,
    hu: {nameTop: "KULCSAR",
      nameBottom: "DZSENIFER",
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
        others: "Egyéb",
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
        { from: "2017", to: "2019", degree: "Ápolói végzettség", place: "Zalaegerszegi SZC Deák Ferenc Technikum" },
        { from: "2020", to: "2021", degree: "Pedagógiai asszisztens", place: "Számpont Oktatási Központ" },
      ],
      skillsHeader: "// Professzionális",
      skills: [
        "Csapatmunka",
        "Alkalmazkodóképesség",
        "Türelem és empátia",
        "5S alapelvek alapszintű ismerete",
        "Részletorientáltság",
        "Tanulási folyamatok támogatása",
      ],
      others: [
        { title: "MS Office ismeretek" },
        { title: "B kategóriás jogosítvány" },
      ],
      profile: "Megbízható és segítőkész munkavállaló oktatási és termelési tapasztalattal. Erősségeim a csapatmunka, az alkalmazkodóképesség és az új készségek elsajátítása iránti nyitottság.",
      experience: [
        {
          year: "2022 – 2025",
          company: "Aptiv Services Hungary Kft.",
          position: "Termelési munkatárs (elektronikai összeszerelés)",
          summary: "Elektronikai gyártásban (SMT) dolgoztam, főként precizitást és csapatmunkát igénylő feladatokban.",
          bullets: [
            "Összeszerelési feladatok végrehajtása minőségi előírások szerint",
            "5S alapelvek alkalmazása és a munkahelyi rend fenntartása",
            "Termelési célok teljesítése gyors ütemű környezetben",
          ],
        },
        {
          year: "2020 – 2021",
          company: "Mindszenti József Általános Iskola és Gimnázium",
          position: "Pedagógiai asszisztens",
          summary: "Tanári munka támogatása, diákok segítése a mindennapi iskolai tevékenységekben.",
          bullets: [
            "Tanórák és tanulási folyamatok támogatása",
            "Egyéni igényű diákok segítése",
            "Pozitív és szervezett tanulási környezet kialakításában való közreműködés",
          ],
        },
      ],} as ResumeData,
  },
};
