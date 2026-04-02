import Link from "next/link";

export default function Footer() {
  return (
    <footer className="max-w-[960px] w-full mx-auto px-10 py-10 pb-16 border-t border-[#e8e4df] flex justify-between items-center text-[#4a4a4a] text-sm mt-auto">
      <div>Michael C. Peterson</div>
      <div className="flex gap-6">
        <Link href="/contact" className="text-[#4a4a4a] hover:text-[#1a1a1a] no-underline transition-colors">
          Contact
        </Link>
        <a
          href="https://www.linkedin.com/in/michaelpetersonn"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#4a4a4a] hover:text-[#1a1a1a] no-underline transition-colors"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/michaelpetersonn"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#4a4a4a] hover:text-[#1a1a1a] no-underline transition-colors"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}
