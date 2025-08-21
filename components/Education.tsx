"use client";

import React from "react";
import { CheckIcon } from "lucide-react";
import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/ui/timeline";
import { useResumeStore } from "@/lib/store/useResumeStore";
import { getProfile } from "@/data/data";

type Props = {};

// Define the EducationEntry type
type EducationEntry = {
  year: string;
  institution: string;
  major?: string; // Optional field if it might not exist
};
/* const items = [
  {
    id: 1,
    date: "Mar 15, 2024",
    title: "Project Kickoff",
    description:
      "Initial team meeting and project scope definition. Established key milestones and resource allocation.",
  },
  {
    id: 2,
    date: "Mar 22, 2024",
    title: "Design Phase",
    description:
      "Completed wireframes and user interface mockups. Stakeholder review and feedback incorporated.",
  },
]; */

const Education = (props: Props) => {
  // 1) Aktuális nyelv és személy az állapotból
  const locale = useResumeStore((s) => s.locale);
  const personId = useResumeStore((s) => s.personId);

  // 2) Profil kiválasztása a helperrel
  const profile = getProfile(locale, personId);

  // 3) Education lista (fallback üres tömbre)
  const items: EducationEntry[] = profile?.education ?? [];
  return (
    <Timeline defaultValue={items.length || 1}>
      {items.map((item, idx) => (
        <TimelineItem key={`${item.institution}-${idx}`} step={idx + 1}>
          <TimelineHeader>
            <TimelineSeparator />
            <TimelineDate>{item.year}</TimelineDate>
            <TimelineTitle>{item.institution}</TimelineTitle>
            <TimelineIndicator>
              <CheckIcon className="h-4 w-4" />
            </TimelineIndicator>
          </TimelineHeader>

          {/* A leírást a meglévő mezőkből állítjuk össze:
            - year -> TimelineDate
            - institution -> TimelineTitle
            - major -> tartalom / leírás */}
          <TimelineContent>{item.major}</TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default Education;
