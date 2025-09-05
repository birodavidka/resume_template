// app/api/pdf/route.ts
import { NextResponse } from "next/server";
import { renderToStream } from "@react-pdf/renderer";
import MyPDFDocument from "@/pdf/MyPDFDocument";

export async function GET() {
  const stream = await renderToStream(<MyPDFDocument />);
  return new NextResponse(stream as any, {
    headers: { "Content-Type": "application/pdf" },
  });
}
