import { BlurFade } from "@/components/magicui/blur-fade";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="flex-col flex flex-1 space-y-1.5">
          <BlurFade delay={0.25} inView>
            <h2 className="text-6xl font-bold tracking-tighter">
              SOME TEXT HERE
            </h2>
          </BlurFade>
          <BlurFade delay={0.25 * 2} inView>
            <span className="text-pretty text-4xl tracking-tighter sm:text-3xl xl:text-4xl/none">
              Nice to meet you
            </span>
          </BlurFade>
        </div>
      </section>
      <section id="david">david</section>
      <section id="dzsenifer">dzsenifer</section>
      <section id="">dzsenifer</section>
    </main>
  );
}
