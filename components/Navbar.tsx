import React from "react";
import LanguageSelector from "./LanguageSelector";
import ExportPDFButton from "./ExportPDFButton";
import PersonSelector from "./PersonSelector";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="flex justify-between items-center p-4 ">
      <div></div>
      <div></div>
      <div className="flex items-center gap-4">
        <PersonSelector />
        <LanguageSelector />
        <ExportPDFButton />
      </div>
    </div>
  );
};

export default Navbar;
