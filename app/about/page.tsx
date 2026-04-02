import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Michael Peterson",
  description:
    "Learn about Michael Peterson — Data & BI Analyst at Brevium, BYU TA, and Information Systems student who has supported 10K+ monthly users and taught 385+ students.",
};

const stats = [
  {
    number: "385+",
    description:
      "Students taught SQL, Tableau, HTML/CSS, VBA, and Excel through labs and office hours.",
  },
  {
    number: "10K+",
    description:
      "Monthly users supported across Webflow sites maintained and optimized.",
  },
  {
    number: "50+",
    description:
      "Articles restructured for SEO and readability, improving traffic and clarity.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <main className="max-w-[960px] mx-auto px-10 pt-20 pb-16">
        <div className="flex gap-12 items-start">
          <div className="flex-1">
            <h1 className="font-[family-name:var(--font-source-serif)] text-4xl font-semibold tracking-tight mb-2">
              Hi, I&apos;m Michael.
            </h1>
            <p className="text-[#4a4a4a] text-lg mb-5">
              Data &amp; BI Analyst
            </p>
            <p className="text-[#4a4a4a] font-medium mb-5">
              I Seek Discomfort and Choose Faith Over Fear.
            </p>
            <p className="text-[#4a4a4a] text-[1.05rem] leading-[1.75] max-w-[600px]">
              I&apos;m a Data Analyst at Brevium and a BS Information Systems
              student at Brigham Young University with a Data Analytics emphasis.
              I work with Python, SQL, Tableau, and Power BI to turn raw data
              into clear decisions. Outside of work, I teach SQL, Excel, and
              Tableau to 385+ students as a TA — which keeps me sharp and forces
              me to explain things simply. I care about building things that are
              fast, clear, and actually useful.
            </p>
            <Link
              href="/projects"
              className="inline-block mt-6 px-6 py-2.5 text-sm font-medium text-white bg-[#1a6bca] rounded-full hover:bg-[#155ba0] transition-all no-underline hover:-translate-y-px"
            >
              View Projects
            </Link>
          </div>
          <div className="flex-shrink-0">
            <Image
              src="/headshot.jpg"
              alt="Michael Peterson, Data and Business Intelligence Analyst"
              width={160}
              height={160}
              className="rounded-2xl object-cover border border-[#e8e4df]"
              style={{ objectPosition: "center 20%" }}
              priority
            />
          </div>
        </div>
      </main>

      {/* Stats */}
      <section className="max-w-[960px] mx-auto px-10 py-14 border-t border-[#e8e4df]">
        <h2 className="font-[family-name:var(--font-source-serif)] text-2xl font-semibold tracking-tight mb-8">
          The Numbers
        </h2>
        <div className="grid grid-cols-3 gap-5">
          {stats.map((stat) => (
            <div
              key={stat.number}
              className="p-7 border border-[#e8e4df] rounded-xl bg-white text-center"
            >
              <div className="font-[family-name:var(--font-source-serif)] text-4xl font-semibold text-[#1a6bca] mb-2">
                {stat.number}
              </div>
              <p className="text-[#4a4a4a] text-sm leading-snug">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="max-w-[960px] mx-auto px-10 py-14 border-t border-[#e8e4df]">
        <h2 className="font-[family-name:var(--font-source-serif)] text-2xl font-semibold tracking-tight mb-6">
          Contact
        </h2>
        <p className="text-[#4a4a4a] mb-6">
          I&apos;m seeking opportunities to collaborate with inspiring teams and
          turn data into real-world wins. Let&apos;s connect!
        </p>
        <div className="flex gap-4 flex-wrap">
          <Link
            href="/contact"
            className="flex items-center gap-2.5 px-6 py-4 border border-[#e8e4df] rounded-xl bg-white text-[#1a1a1a] font-medium text-[0.925rem] no-underline hover:border-[#1a6bca] hover:bg-blue-50/40 transition-all"
          >
            Send me a message
          </Link>
          <a
            href="https://www.linkedin.com/in/michaelpetersonn"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-6 py-4 border border-[#e8e4df] rounded-xl bg-white text-[#1a1a1a] font-medium text-[0.925rem] no-underline hover:border-[#1a6bca] hover:bg-blue-50/40 transition-all"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/michaelpetersonn"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-6 py-4 border border-[#e8e4df] rounded-xl bg-white text-[#1a1a1a] font-medium text-[0.925rem] no-underline hover:border-[#1a6bca] hover:bg-blue-50/40 transition-all"
          >
            GitHub
          </a>
        </div>
      </section>
    </>
  );
}
