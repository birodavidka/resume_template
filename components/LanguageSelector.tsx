"use client";

import React, { useId, useMemo, useState } from "react";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// src/data/languages.ts
export type LanguageItem = {
  id: string; // string, mert shadcn Select value string
  name: string;
  flag: string; // pl. "🇬🇧"
};

export const languages: LanguageItem[] = [
  { id: "1", name: "Magyar", flag: "🇭🇺" },
  { id: "2", name: "English", flag: "🇬🇧" },
  { id: "3", name: "German", flag: "🇩🇪" },
];

type Props = {
  label?: string;
  defaultId?: string; // pl. "1"
  onChange?: (lang: LanguageItem) => void;
};

const LanguageSelector: React.FC<Props> = ({
  label = "Language",
  defaultId = languages[0]?.id,
  onChange,
}) => {
  const id = useId();
  const [value, setValue] = useState<string>(defaultId);

  const selected = useMemo(
    () => languages.find((l) => l.id === value) ?? languages[0],
    [value]
  );

  const handleChange = (val: string) => {
    setValue(val);
    const lang = languages.find((l) => l.id === val);
    if (lang && onChange) onChange(lang);
  };

  return (
    <div className="space-y-2">
      <Select value={value} onValueChange={handleChange}>
        <SelectTrigger
          id={id}
          className="h-auto ps-3 py-2 text-left [&>span]:flex [&>span]:items-center [&>span]:gap-2"
        >
          {/* Egyedi trigger tartalom */}
          <SelectValue>
            <span className="flex items-center gap-2">
              <span aria-hidden className="text-xl leading-none">
                {selected?.flag}
              </span>
            </span>
          </SelectValue>
        </SelectTrigger>

        <SelectContent className="[&_*[role=option]]:ps-3 [&_*[role=option]]:pe-8">
          {languages.map((lang) => (
            <SelectItem key={lang.id} value={lang.id}>
              <span className="flex items-center gap-2">
                <span aria-hidden className="text-xl leading-none">
                  {lang.flag}
                </span>
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSelector;
