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

type Props = {};

const PersonSelector: React.FC<Props> = ({}) => {
  const id = useId();

  return (
    <div className="*:not-first:mt-2">
      <Select defaultValue="1">
        <SelectTrigger
          id={id}
          className="h-auto ps-2 text-left [&>span]:flex [&>span]:items-center [&>span]:gap-2 [&>span_img]:shrink-0"
        >
          <SelectValue placeholder="Choose a plan" />
        </SelectTrigger>
        <SelectContent className="[&_*[role=option]]:ps-2 [&_*[role=option]]:pe-8 [&_*[role=option]>span]:start-auto [&_*[role=option]>span]:end-2">
          <SelectItem value="1">
            <span className="flex items-center gap-2">
              <img
                className="rounded-full"
                src="/avatar-40-01.jpg"
                alt="Jenny Hamilton"
                width={40}
                height={40}
              />
              <span>
                <span className="block font-medium">Jenny Hamilton</span>
                <span className="text-muted-foreground mt-0.5 block text-xs">
                  @jennycodes
                </span>
              </span>
            </span>
          </SelectItem>
          <SelectItem value="2">
            <span className="flex items-center gap-2">
              <img
                className="rounded-full"
                src="/avatar-40-02.jpg"
                alt="Paul Smith"
                width={40}
                height={40}
              />
              <span>
                <span className="block font-medium">Paul Smith</span>
                <span className="text-muted-foreground mt-0.5 block text-xs">
                  @paulsmith
                </span>
              </span>
            </span>
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default PersonSelector;
