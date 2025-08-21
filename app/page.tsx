import Education from "@/components/Education";
import Experience from "@/components/Experience";
import PersonalData from "@/components/PersonalData";
import Avatar from "@/components/Avatar";
import Image from "next/image";
import {
  BriefcaseBusiness,
  GraduationCap,
  Languages,
  User,
} from "lucide-react";
import Language from "@/components/Language";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-6">
      <section id="hero" className="flex items-center justify-center">
        <div className="mx-auto w-full max-w-2xl space-y-6 flex-2">
          <label htmlFor="" className="flex items-center space-x-2">
            <User className="mr-2" size={30} />
            <h2 className="text-xl font-bold">Personal data</h2>
          </label>
          <PersonalData />
        </div>
        <div className="flex flex-1 items-center justify-center">
          <Avatar />
        </div>
      </section>
      <section id="education">
        <div className="mx-auto w-full max-w-2xl space-y-6">
          <label htmlFor="" className="flex items-center space-x-2">
            <GraduationCap className="mr-2" size={30} />
            <h2 className="text-xl font-bold">Education</h2>
          </label>
          <Education />
        </div>
      </section>
      <section id="workexperience">
        <div className="mx-auto w-full max-w-2xl space-y-6">
          <label htmlFor="" className="flex items-center space-x-2">
            <BriefcaseBusiness className="mr-2" size={30} />
            <h2 className="text-xl font-bold">Work experience</h2>
          </label>
          <Experience />
        </div>
      </section>
      <div className="flex space-y-6">
        <section id="language" className="flex-1">
          <div className="mx-auto w-full max-w-2xl space-y-6">
            <label htmlFor="" className="flex items-center space-x-2">
              <Languages className="mr-2" size={30} />
              <h2 className="text-xl font-bold">Language</h2>
            </label>
            <Language />
          </div>
        </section>
        <section id="Skills" className="flex-1">
          <div className="mx-auto w-full max-w-2xl space-y-6">
            <label htmlFor="" className="flex items-center space-x-2">
              <Languages className="mr-2" size={30} />
              <h2 className="text-xl font-bold">Skills</h2>
            </label>
            <Skills />
          </div>
        </section>
      </div>
    </main>
  );
}
