import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects | Michael Peterson",
  description:
    "Portfolio of data and BI projects by Michael Peterson, including nonprofit Tableau dashboards, Power BI competition work, and Python-based real estate analysis.",
};

const projects = [
  {
    name: "Ella Rises",
    meta: "Data insights for a youth non-profit",
    description:
      "Built a dashboard to track program engagement and outcomes, spotlighting metrics that helped leaders focus resources where they mattered most.",
    tags: ["SQL", "Tableau", "Data Storytelling"],
  },
  {
    name: "EY Case",
    meta: "Analytics case competition",
    description:
      "Modeled business scenarios and delivered a concise BI narrative, tying recommendations to clear visuals and defensible assumptions.",
    tags: ["Power BI", "Excel", "Financial Modeling"],
  },
  {
    name: "Aimes Data",
    meta: "Real estate pricing study",
    description:
      "Analyzed property data to identify pricing drivers and surfaced features that improved model accuracy and stakeholder understanding.",
    tags: ["Python (Pandas)", "SQL", "EDA"],
  },
];

export default function ProjectsPage() {
  return (
    <main className="max-w-[960px] mx-auto px-10 pt-16 pb-16">
      <h1 className="font-[family-name:var(--font-source-serif)] text-4xl font-semibold tracking-tight mb-2">
        Projects
      </h1>
      <p className="text-[#4a4a4a] mb-10">
        Selected work where I applied BI, data storytelling, and automation to
        real problems.
      </p>

      <div className="divide-y divide-[#e8e4df]">
        {projects.map((project) => (
          <div key={project.name} className="py-7">
            <h3 className="font-[family-name:var(--font-source-serif)] text-lg font-semibold mb-1">
              {project.name}
            </h3>
            <p className="text-[#1a6bca] text-sm font-medium mb-2.5">
              {project.meta}
            </p>
            <p className="text-[#4a4a4a] text-[0.925rem] leading-relaxed mb-3">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-[#e8e4df] rounded-full px-3.5 py-1.5 text-[0.825rem] font-medium bg-white"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="pt-10 border-t border-[#e8e4df] mt-3 flex flex-col gap-4">
        <p className="text-[#4a4a4a]">
          Interested in working together or want to see more?
        </p>
        <Link
          href="/contact"
          className="inline-block px-6 py-2.5 text-sm font-medium text-white bg-[#1a6bca] rounded-full hover:bg-[#155ba0] transition-colors no-underline w-fit hover:-translate-y-px transition-transform"
        >
          Get in Touch
        </Link>
      </div>
    </main>
  );
}
