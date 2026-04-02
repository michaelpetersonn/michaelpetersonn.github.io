import Image from "next/image";
import Link from "next/link";
import { BackgroundPaths } from "@/components/ui/background-paths";

const skills = [
  "SQL (MySQL, PostgreSQL)",
  "Python (Pandas)",
  "Tableau",
  "Power BI",
  "Advanced Excel",
  "VBA",
  "JavaScript",
  "HTML/CSS",
  "Node.js",
  "Webflow",
  "WordPress",
  "AWS",
  "Spanish Fluency",
];

const experience = [
  {
    title: "Data Analyst",
    company: "Brevium",
    period: "Jan 2026 – Present",
    description:
      "Analyzing healthcare data to drive patient reactivation and improve revenue cycle outcomes through reporting, dashboards, and data-driven insights.",
  },
  {
    title: "Teaching Assistant — Introduction to Information Systems",
    company: "BYU Marriott School of Business",
    period: "Aug 2025 – Present",
    description:
      "Taught 385+ students SQL, Tableau, HTML/CSS, VBA, and Excel; built labs and answered 20–40 weekly technical questions.",
  },
  {
    title: "Web Developer / Content Manager",
    company: "BYU School of Accountancy",
    period: "Mar 2025 – Present",
    description:
      "Restructured 50+ articles to lift SEO and improved load speed 15% across four Webflow sites serving 10K+ users.",
  },
  {
    title: "Deliverables & Reports Manager",
    company: "Ohana Luggage LLC",
    period: "Jan 2025 – Apr 2025",
    description:
      "Launched the WordPress site, grew traffic from 0 to 300 monthly visitors, and automated booking and payments.",
  },
  {
    title: "Volunteer Representative — Spanish Fluency",
    company: "San Pedro Sula, Honduras",
    period: "Sep 2022 – Aug 2024",
    description:
      "Delivered 100+ trainings, facilitated conflict resolution, and led teams in cross-cultural, high-pressure settings.",
  },
];

export default function Home() {
  return (
    <>
      {/* Animated hero */}
      <BackgroundPaths title="Michael Peterson" />

      {/* Experience */}
      <section className="max-w-[960px] mx-auto px-10 py-14 border-t border-[#e8e4df]">
        <h2 className="font-[family-name:var(--font-source-serif)] text-2xl font-semibold tracking-tight mb-8">
          Experience
        </h2>
        <div className="divide-y divide-[#e8e4df]">
          {experience.map((item) => (
            <div key={item.title} className="py-5">
              <h3 className="text-base font-semibold mb-1">{item.title}</h3>
              <p className="text-[#4a4a4a] text-sm mb-2">
                {item.company} · {item.period}
              </p>
              <p className="text-[#4a4a4a] text-[0.925rem] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-[960px] mx-auto px-10 py-14 border-t border-[#e8e4df]">
        <h2 className="font-[family-name:var(--font-source-serif)] text-2xl font-semibold tracking-tight mb-8">
          Skills
        </h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="border border-[#e8e4df] rounded-full px-3.5 py-1.5 text-[0.825rem] font-medium bg-white"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="max-w-[960px] mx-auto px-10 py-14 border-t border-[#e8e4df]">
        <h2 className="font-[family-name:var(--font-source-serif)] text-2xl font-semibold tracking-tight mb-8">
          Education
        </h2>
        <div className="py-5">
          <h3 className="text-base font-semibold mb-1">
            Brigham Young University
          </h3>
          <p className="text-[#4a4a4a] text-sm mb-2">
            B.S. Information Systems — Data Analytics Emphasis (STEM) · GPA 3.8
            · Apr 2027
          </p>
          <p className="text-[#4a4a4a] text-[0.925rem] leading-relaxed">
            Relevant coursework: Spreadsheets &amp; Business Analysis, Python
            Programming, Exploratory Data Analysis, Database Systems, Enterprise
            Application Development, Machine Learning. Association of
            Information Systems member.
          </p>
        </div>
      </section>
    </>
  );
}
