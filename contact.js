(() => {
  "use strict";

  const form = document.getElementById("contact-form");
  const submitBtn = document.getElementById("submit-btn");
  const statusEl = document.getElementById("form-status");
  const honeypot = document.getElementById("website");
  const captchaInput = document.getElementById("captcha");
  const captchaQuestion = document.getElementById("captcha-question");

  // --- Show success if redirected back after submission ---
  if (new URLSearchParams(window.location.search).get("sent") === "true") {
    statusEl.textContent = "Thanks! I'll get back to you soon.";
    statusEl.className = "form-status success";
    window.history.replaceState({}, "", window.location.pathname);
  }

  // --- Math CAPTCHA ---
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  const captchaAnswer = num1 + num2;
  captchaQuestion.textContent = `What is ${num1} + ${num2}?`;

  // --- Time-based protection ---
  const loadTime = Date.now();
  const MIN_SUBMIT_MS = 3000;

  // --- Rate limiting ---
  const COOLDOWN_MS = 60000;
  let lastSubmit = 0;

  // --- Enable submit only after captcha has a value ---
  captchaInput.addEventListener("input", () => {
    submitBtn.disabled = captchaInput.value.trim() === "";
  });

  // --- Form submission ---
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    clearStatus();

    // 1. Honeypot check
    if (honeypot.value !== "") {
      showStatus("Something went wrong. Please try again.", "error");
      return;
    }

    // 2. Time-based check
    if (Date.now() - loadTime < MIN_SUBMIT_MS) {
      showStatus("Please take a moment to fill out the form.", "error");
      return;
    }

    // 3. Rate limiting
    if (Date.now() - lastSubmit < COOLDOWN_MS && lastSubmit > 0) {
      const wait = Math.ceil((COOLDOWN_MS - (Date.now() - lastSubmit)) / 1000);
      showStatus(`Please wait ${wait} seconds before sending another message.`, "error");
      return;
    }

    // 4. CAPTCHA verification
    if (parseInt(captchaInput.value.trim(), 10) !== captchaAnswer) {
      showStatus("Incorrect answer. Please try again.", "error");
      captchaInput.value = "";
      captchaInput.focus();
      return;
    }

    // 5. Basic input validation
    const name = form.elements.name.value.trim();
    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();

    if (!name || !email || !message) {
      showStatus("Please fill out all fields.", "error");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showStatus("Please enter a valid email address.", "error");
      return;
    }

    // 6. Submit via Formsubmit AJAX (falls back to regular POST if not yet activated)
    submitBtn.disabled = true;
    submitBtn.textContent = "Sending…";

    const formData = new FormData(form);
    // Remove our client-side-only fields
    formData.delete("captcha");
    formData.delete("website");

    fetch("https://formsubmit.co/ajax/fb8602582d61a255332dbf789ea49a6b", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success === "true" || data.success === true) {
          lastSubmit = Date.now();
          form.reset();
          submitBtn.textContent = "Sent!";
          showStatus("Thanks! I'll get back to you soon.", "success");

          setTimeout(() => {
            submitBtn.textContent = "Send Message";
            submitBtn.disabled = true;
          }, 3000);
        } else {
          // Not yet activated — fall back to regular form POST
          // so Formsubmit can show the activation/confirmation page
          form.submit();
        }
      })
      .catch(() => {
        // Network or parse error — fall back to regular form POST
        form.submit();
      });
  });

  function showStatus(msg, type) {
    statusEl.textContent = msg;
    statusEl.className = "form-status " + type;
  }

  function clearStatus() {
    statusEl.textContent = "";
    statusEl.className = "form-status";
  }
})();
