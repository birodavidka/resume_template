"use client";

import React from "react";
import { Sparkles } from "lucide-react";
import { Button } from "./ui/button";

type Props = {};

const ExportPDFButton = (props: Props) => {
  return (
    <div>
      <Button>
        <Sparkles className="mr-2 h-4 w-4" />
        Export PDF
      </Button>
    </div>
  );
};

export default ExportPDFButton;
