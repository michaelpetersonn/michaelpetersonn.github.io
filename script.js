const revealElements = Array.from(document.querySelectorAll(".reveal"));

if (revealElements.length) {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReducedMotion) {
    revealElements.forEach((el) => el.classList.add("visible"));
  } else {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 }
    );

    revealElements.forEach((el) => observer.observe(el));
  }
}
