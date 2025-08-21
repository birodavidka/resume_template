// app/providers/ResumeStoreProvider.tsx
"use client";

import { useEffect, useRef } from "react";
import { useResumeStore } from "@/lib/store/useResumeStore";
import type { Locale, PersonId } from "@/app/shared/types";

type Props = {
  initialLocale?: Locale;
  initialPersonId?: PersonId;
  children: React.ReactNode;
};

export default function ResumeStoreProvider({
  initialLocale = "hu",
  initialPersonId = "personA",
  children,
}: Props) {
  const didInit = useRef(false);
  const init = useResumeStore((s) => s.init);

  useEffect(() => {
    if (!didInit.current && init) {
      init({ locale: initialLocale, personId: initialPersonId });
      didInit.current = true;
    }
  }, [init, initialLocale, initialPersonId]);

  return <>{children}</>;
}
