import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  weight: ["400", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Michael Peterson — Data & BI Analyst",
  description:
    "Michael Peterson — Data & BI Analyst at Brevium and BYU Information Systems student specializing in SQL, Python, Tableau, and Power BI. 3.8 GPA.",
  metadataBase: new URL("https://michael-peterson.com"),
  openGraph: {
    type: "website",
    title: "Michael Peterson — Data & BI Analyst",
    description:
      "Data & BI Analyst at Brevium and BYU student specializing in SQL, Python, Tableau, and Power BI.",
    url: "https://michael-peterson.com",
    images: [{ url: "/headshot.jpg" }],
  },
  twitter: {
    card: "summary",
    title: "Michael Peterson — Data & BI Analyst",
    description:
      "Data & BI Analyst at Brevium and BYU student specializing in SQL, Python, Tableau, and Power BI.",
    images: ["/headshot.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sourceSerif.variable}`}>
      <body className="min-h-full flex flex-col bg-[#faf8f5] text-[#1a1a1a] antialiased font-[family-name:var(--font-inter)]">
        <Nav />
        <div className="max-w-[960px] w-full mx-auto px-10">
          <hr className="border-none h-px bg-[#e8e4df]" />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
