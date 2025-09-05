import type { Lang } from "@/lib/store/lang";

export type CoverLetterData = {
  nameTop: string;
  nameBottom: string;
  title: string;
  contact: {
    addressLines: string[];
    phone: string;
    email: string;
    website: string;
  };
  info: {
    toLabel: string;
    toName: string;
    toSubtitle: string;
    street: string;
    city: string;
    dateLabel: string;
    dateText: string;
  };
  coverLetterTitle: string;
  greeting: string;
  paragraphs: string[];
  closing: {
    sincerely: string;
    signatureName: string;
  };
};

export const coverLetterDATA: Record<Lang, CoverLetterData> = {
  en: {
    nameTop: "ARENA",
    nameBottom: "HERNADES",
    title: "Professional Title",
    contact: {
      addressLines: ["Lorem Ipsum, simply dummy", "Avenue, New York, USA"],
      phone: "(+0123) 456 789",
      email: "nameinfo@example.com",
      website: "www.namedomain.com",
    },
    info: {
      toLabel: "To",
      toName: "Michael Smith",
      toSubtitle: "Institute Name, Position",
      street: "1234 • Street Address Here",
      city: "New York, USA",
      dateLabel: "Date",
      dateText: "03 December 2023",
    },
    coverLetterTitle: "Cover Letter",
    greeting: "Hello!",
    paragraphs: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the leap into electronic typesetting.",
      "It was popularised with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software.",
      "I am excited about the opportunity to contribute and would welcome the chance to discuss how my background fits your needs.",
    ],
    closing: {
      sincerely: "Sincerely",
      signatureName: "Arena Hernades",
    },
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
    info: {
      toLabel: "An",
      toName: "Michael Smith",
      toSubtitle: "Institutsname, Position",
      street: "1234 • Straßenadresse",
      city: "New York, USA",
      dateLabel: "Datum",
      dateText: "03. Dezember 2023",
    },
    coverLetterTitle: "Anschreiben",
    greeting: "Hallo!",
    paragraphs: [
      "Lorem Ipsum ist ein Blindtext der Druck- und Satzindustrie. Er hat Jahrhunderte überdauert und den Sprung in das elektronische Zeitalter geschafft.",
      "Popularität erlangte er mit dem Einsatz auf Letraset-Bögen und später in DTP-Software.",
      "Gern erläutere ich in einem Gespräch, wie mein Profil zu Ihren Anforderungen passt.",
    ],
    closing: {
      sincerely: "Mit freundlichen Grüßen",
      signatureName: "Arena Hernades",
    },
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
    info: {
      toLabel: "Címzett",
      toName: "Michael Smith",
      toSubtitle: "Intézmény neve, Beosztás",
      street: "1234 • Utca, házszám",
      city: "New York, USA",
      dateLabel: "Dátum",
      dateText: "2023. december 3.",
    },
    coverLetterTitle: "Motivációs levél",
    greeting: "Üdvözlöm!",
    paragraphs: [
      "A Lorem Ipsum nyomdai helykitöltő szöveg, amely évszázadok óta használatos, és túlélte az elektronikus kiadványszerkesztésre való átállást is.",
      "Elterjedését a Letraset lapok, majd a DTP szoftverek segítették.",
      "Szívesen egyeztetek egy beszélgetést, ahol bemutatom, hogyan illeszkedik a tapasztalatom az Önök igényeihez.",
    ],
    closing: {
      sincerely: "Tisztelettel",
      signatureName: "Arena Hernades",
    },
  },
};
