// components/avatar.tsx
"use client";

import React, { useMemo } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { resumeDATA } from "@/content/ResumeData";
import { useLangStore } from "@/lib/store/lang";

const AvatarPic = () => {
  const person = useLangStore((s) => s.person) as keyof typeof resumeDATA;
  const lang = useLangStore((s) => s.lang);

  const t = useMemo(() => {
    const people = Object.keys(resumeDATA);
    const personKey = resumeDATA[person]
      ? person
      : (people[0] as keyof typeof resumeDATA);
    const personData = resumeDATA[personKey];
    const langs = Object.keys(personData);
    const langKey = personData[lang]
      ? lang
      : (langs[0] as keyof typeof personData);
    return personData[langKey];
  }, [person, lang]);

  return (
    <Avatar className="h-20 w-20 md:h-20 md:w-20 shrink-0 ring-1 ring-gray-200 shadow-sm overflow-hidden">
      <AvatarImage
        src={t?.avatarUrl}
        alt="Profile photo"
        className="h-full w-full object-cover "
        onError={() =>
          console.warn("Avatar image failed to load:", t?.avatarUrl)
        }
      />
      <AvatarFallback className="bg-gray-200" />
    </Avatar>
  );
};

export default AvatarPic;
