"use client";

import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import ResumePage from "@/app/resume/page";
import CoverLetterPage from "@/app/cover-letter/page";

export default function PrintAll() {
  const printRef = useRef<HTMLDivElement>(null);

  // ÚJ API react-to-print@3
  const handlePrint = useReactToPrint({
    contentRef: printRef, // !! nem content: () => ref.current !!
    documentTitle: "Resume_and_CoverLetter",
  });

  return (
    <main className="p-6">
      <button
        onClick={handlePrint}
        className="mb-6 rounded bg-black text-white px-4 py-2"
      >
        Print PDF
      </button>

      <div ref={printRef} className="space-y-10 print:space-y-0">
        <div className="page-break-inside-avoid">
          <ResumePage />
        </div>
        <div className="page-break" />
        <div className="page-break-inside-avoid">
          <CoverLetterPage />
        </div>
      </div>
    </main>
  );
}
