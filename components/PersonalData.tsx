"use client";

import React from "react";
import { MapPin, Phone, Mail, Calendar1, type LucideIcon } from "lucide-react";

type Item = {
  id: number;
  label: string;
  value: string;
  Icon: LucideIcon;
  href?: string;
};

const items: Item[] = [
  { id: 1, label: "Birthday", value: "January 1, 1990", Icon: Calendar1 },
  {
    id: 2,
    label: "Address",
    value: "123 Main St, City, Country",
    Icon: MapPin,
    href: "https://maps.google.com/?q=123 Main St, City, Country",
  },
  {
    id: 3,
    label: "Phone",
    value: "+123 456 7890",
    Icon: Phone,
    href: "tel:+1234567890", // tel: -hez érdemes szóköz nélkül adni
  },
  {
    id: 4,
    label: "Email",
    value: "biro.david93@gmail.com",
    Icon: Mail,
    href: "mailto:biro.david93@gmail.com",
  },
];

const PersonalData: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 w-full">
      {items.map(({ id, label, value, Icon, href }) => (
        <div
          key={id}
          className="grid grid-cols-[1.25rem,7rem,1fr] items-center gap-x-2 min-w-0"
        >
          {/* ikon */}
          <Icon className="h-4 w-4 text-muted-foreground" aria-hidden />

          {/* label – fix szélesség, hogy minden sor szépen igazodjon */}
          <span className="text-sm text-muted-foreground whitespace-nowrap">
            {label}:
          </span>

          {/* value – egy sor, ne tördeljen; szűk helyen ellipszis */}
          {href ? (
            <a
              href={href}
              className="font-medium min-w-0 whitespace-nowrap truncate hover:underline"
              title={value}
            >
              {value}
            </a>
          ) : (
            <span
              className="font-medium min-w-0 text-sm whitespace-nowrap truncate"
              title={value}
            >
              {value}
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default PersonalData;
