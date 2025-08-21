import React from "react";
import {
  Timeline,
  TimelineContent,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/ui/timeline";
import Image from "next/image";

type Props = {};

const items = [
  {
    id: 1,
    title: "English",
    description: "B1",
    flag: "🇬🇧",
  },
  {
    id: 2,
    title: "German",
    description: "Learning in progress",
    flag: "🇩🇪",
  },
];

const Language = (props: Props) => {
  return (
    <Timeline defaultValue={1}>
      {items.map((item) => (
        <TimelineItem key={item.id} step={item.id}>
          <TimelineHeader className="flex items-center gap-2">
            <span
              aria-label={`${item.title} flag`}
              role="img"
              className="text-2xl"
            >
              {item.flag}
            </span>
            <div className="flex flex-col items-start">
              <TimelineTitle className="-mt-0.5">{item.title}</TimelineTitle>
              <TimelineContent>{item.description}</TimelineContent>
            </div>
          </TimelineHeader>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default Language;
