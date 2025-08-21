import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ResumeStoreProvider from "./providers/ResumeStoreProvider";
import type { Locale, PersonId } from "@/app/shared/types";
import { cookies } from "next/headers";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "resume-template",
  description: "A customizable resume template",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // ⬇️ NEXT 15: cookies() aszinkron
  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get("resume-locale")?.value as
    | Locale
    | undefined;
  const cookiePerson = cookieStore.get("resume-person")?.value as
    | PersonId
    | undefined;
  return (
    <html lang={cookieLocale || "hu"}>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6",
          fontSans.variable
        )}
      >
        <ResumeStoreProvider>
          <nav className="z-0">
            <Navbar />
          </nav>
          <main className="z-10">{children}</main>
        </ResumeStoreProvider>
      </body>
    </html>
  );
}
