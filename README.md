<!-- This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
 -->

 # 📄 Resume Template

A multilingual **Resume & Cover Letter generator** built with [Next.js 15](https://nextjs.org/),  
featuring multi-person & multi-language support, print-ready PDF export, and a clean UI.

---

## 🚀 Features

- 🌍 Multilingual support (EN / DE / HU)  
- 👤 Person selector (multiple CVs in one app)  
- 📝 Resume + Cover Letter templates  
- 🖨️ Print-ready PDF export (via `react-to-print`)  
- 🎨 Styled with [shadcn/ui](https://ui.shadcn.com/) components  
- ⚡ Built on [Next.js 15](https://nextjs.org/) + [TypeScript](https://www.typescriptlang.org/)  
- 🗂️ Centralized data structure (`resumeDATA`, `coverLetterDATA`)  

---

## 🛠️ Tech Stack

<p align="left">
  <img src="https://skillicons.dev/icons?i=nextjs,typescript,tailwind,react" height="40" />
  <img src="https://raw.githubusercontent.com/shadcn/ui/main/apps/www/public/favicon.ico" height="40" />
  <img src="https://skillicons.dev/icons?i=firebase,aws" height="40" />
</p>

- **Next.js 15 (App Router)** – Routing, SSR/CSR/ISR  
- **TypeScript** – Type safety  
- **TailwindCSS** – Utility-first styling  
- **shadcn/ui** – Accessible UI components  
- **Framer Motion** – Animations  
- **Zustand** – Global state (language & person selection)  
- **react-to-print** – Print/PDF export  

---

## 📂 Project Structure

```bash
resume_template/
├─ app/
│  ├─ resume/        # Resume page
│  ├─ cover-letter/  # Cover Letter page
│  ├─ print/         # Print both pages into one PDF
│  └─ globals.css
├─ components/
│  ├─ ui/            # shadcn/ui components
│  └─ PersonSelector.tsx, LanguageSelector.tsx
├─ content/
│  ├─ ResumeData.ts  # Multilingual & multi-person resume data
│  └─ CoverLetterData.ts
├─ lib/
│  └─ store/         # Zustand store (lang & person)
└─ README.md
