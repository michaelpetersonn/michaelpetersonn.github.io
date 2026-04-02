"use client";

import { useState, useEffect, useRef } from "react";

export default function ContactPage() {
  const [captchaQuestion, setCaptchaQuestion] = useState("");
  const [captchaAnswer, setCaptchaAnswer] = useState<number | null>(null);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [captchaInput, setCaptchaInput] = useState("");
  const [isValid, setIsValid] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const a = Math.floor(Math.random() * 10) + 1;
    const b = Math.floor(Math.random() * 10) + 1;
    setCaptchaQuestion(`What is ${a} + ${b}?`);
    setCaptchaAnswer(a + b);
  }, []);

  useEffect(() => {
    const form = formRef.current;
    if (!form) return;
    const name = (form.querySelector("#name") as HTMLInputElement)?.value;
    const email = (form.querySelector("#email") as HTMLInputElement)?.value;
    const message = (form.querySelector("#message") as HTMLTextAreaElement)?.value;
    setIsValid(
      !!name && !!email && !!message && parseInt(captchaInput) === captchaAnswer
    );
  }, [captchaInput, captchaAnswer]);

  function handleInputChange() {
    const form = formRef.current;
    if (!form) return;
    const name = (form.querySelector("#name") as HTMLInputElement)?.value;
    const email = (form.querySelector("#email") as HTMLInputElement)?.value;
    const message = (form.querySelector("#message") as HTMLTextAreaElement)?.value;
    setIsValid(
      !!name && !!email && !!message && parseInt(captchaInput) === captchaAnswer
    );
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!isValid) return;
    const form = e.currentTarget;
    if ((form.querySelector("#website") as HTMLInputElement)?.value) return;

    setSubmitting(true);
    setStatus(null);

    try {
      const data = new FormData(form);
      const res = await fetch("https://formsubmit.co/fb8602582d61a255332dbf789ea49a6b", {
        method: "POST",
        body: data,
      });
      if (res.ok) {
        setStatus({ type: "success", message: "Message sent! I'll get back to you soon." });
        form.reset();
        setCaptchaInput("");
        setIsValid(false);
      } else {
        setStatus({ type: "error", message: "Something went wrong. Please try again." });
      }
    } catch {
      setStatus({ type: "error", message: "Something went wrong. Please try again." });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="max-w-[960px] mx-auto px-10 pt-16 pb-16">
      <h1 className="font-[family-name:var(--font-source-serif)] text-4xl font-semibold tracking-tight mb-2">
        Get in Touch
      </h1>
      <p className="text-[#4a4a4a] mb-10">
        Have a question or want to work together? Fill out the form below and
        I&apos;ll get back to you.
      </p>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="max-w-[520px]"
        noValidate
      >
        {/* Formsubmit config */}
        <input type="hidden" name="_subject" value="New message from michael-peterson.com" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_captcha" value="true" />

        {/* Honeypot */}
        <input type="text" id="website" name="website" className="absolute left-[-9999px]" tabIndex={-1} autoComplete="off" />

        <div className="mb-5">
          <label htmlFor="name" className="block text-sm font-medium mb-1.5">Name</label>
          <input
            type="text" id="name" name="name" required autoComplete="name"
            placeholder="Your name" onChange={handleInputChange}
            className="w-full px-3.5 py-2.5 font-[family-name:var(--font-inter)] text-[0.925rem] text-[#1a1a1a] bg-white border border-[#e8e4df] rounded-lg outline-none focus:border-[#1a6bca] transition-colors placeholder:text-[#aaa]"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block text-sm font-medium mb-1.5">Email</label>
          <input
            type="email" id="email" name="email" required autoComplete="email"
            placeholder="you@example.com" onChange={handleInputChange}
            className="w-full px-3.5 py-2.5 font-[family-name:var(--font-inter)] text-[0.925rem] text-[#1a1a1a] bg-white border border-[#e8e4df] rounded-lg outline-none focus:border-[#1a6bca] transition-colors placeholder:text-[#aaa]"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="message" className="block text-sm font-medium mb-1.5">Message</label>
          <textarea
            id="message" name="message" rows={5} required
            placeholder="What would you like to say?" onChange={handleInputChange}
            className="w-full px-3.5 py-2.5 font-[family-name:var(--font-inter)] text-[0.925rem] text-[#1a1a1a] bg-white border border-[#e8e4df] rounded-lg outline-none focus:border-[#1a6bca] transition-colors placeholder:text-[#aaa] resize-y min-h-[120px]"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="captcha" className="block text-sm font-medium mb-1.5">
            Verify you&apos;re human: {captchaQuestion}
          </label>
          <input
            type="text" id="captcha" name="captcha" required autoComplete="off"
            placeholder="Your answer" value={captchaInput}
            onChange={(e) => { setCaptchaInput(e.target.value); handleInputChange(); }}
            className="w-full px-3.5 py-2.5 font-[family-name:var(--font-inter)] text-[0.925rem] text-[#1a1a1a] bg-white border border-[#e8e4df] rounded-lg outline-none focus:border-[#1a6bca] transition-colors placeholder:text-[#aaa]"
          />
        </div>

        {status && (
          <p className={`text-sm mb-4 ${status.type === "success" ? "text-green-700" : "text-red-600"}`}>
            {status.message}
          </p>
        )}

        <button
          type="submit"
          disabled={!isValid || submitting}
          className="px-6 py-2.5 text-sm font-medium text-white bg-[#1a6bca] rounded-full hover:bg-[#155ba0] transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer font-[family-name:var(--font-inter)]"
        >
          {submitting ? "Sending…" : "Send Message"}
        </button>
      </form>
    </main>
  );
}
