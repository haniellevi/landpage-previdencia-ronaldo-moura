const LP_CONFIG = {
  whatsapp: "5514996734555",
  endpoint: ""
};

(function () {
  const forms = Array.from(document.querySelectorAll(".lp-form"));
  if (!forms.length) return;

  let situacao = "";

  function onlyDigits(value) {
    return value.replace(/\D/g, "").slice(0, 11);
  }

  function formatPhone(value) {
    const digits = onlyDigits(value);
    if (digits.length <= 2) return digits.length ? "(" + digits : "";
    if (digits.length <= 6) return "(" + digits.slice(0, 2) + ") " + digits.slice(2);
    if (digits.length <= 10) return "(" + digits.slice(0, 2) + ") " + digits.slice(2, 6) + "-" + digits.slice(6);
    return "(" + digits.slice(0, 2) + ") " + digits.slice(2, 7) + "-" + digits.slice(7);
  }

  function validPhone(digits) {
    return digits.length >= 10 && digits.length <= 11 && digits[0] !== "0" && !(digits.length === 11 && digits[2] !== "9");
  }

  function track(event, payload) {
    if (Array.isArray(window.dataLayer)) window.dataLayer.push(Object.assign({ event }, payload || {}));
    if (typeof window.lpTrack === "function") window.lpTrack(event, payload || {});
  }

  function applySituation(value) {
    situacao = value || "";
    document.querySelectorAll("[data-chips] .chip").forEach((chip) => {
      chip.setAttribute("aria-pressed", String(chip.dataset.value === situacao));
    });
  }

  function showFieldError(field, error, show) {
    field.setAttribute("aria-invalid", String(show));
    if (error) error.hidden = !show;
  }

  document.querySelectorAll("[data-chips] .chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      applySituation(chip.getAttribute("aria-pressed") === "true" ? "" : chip.dataset.value);
      track("situation_selected", { situacao });
    });
  });

  document.querySelectorAll(".card-link").forEach((button) => {
    button.addEventListener("click", () => {
      applySituation(button.dataset.situacao || "");
      const target = document.getElementById("formulario");
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
      const nameInput = document.getElementById("nome");
      if (nameInput) window.setTimeout(() => nameInput.focus({ preventScroll: true }), 450);
      track("situation_card_click", { situacao });
    });
  });

  document.querySelectorAll("a[data-cta]").forEach((link) => {
    link.addEventListener("click", () => track("cta_click", { cta: link.dataset.cta, situacao }));
  });

  forms.forEach((form) => {
    const nameInput = form.querySelector('input[name="nome"]');
    const phoneInput = form.querySelector('input[name="whatsapp"]');
    const consentInput = form.querySelector('input[name="consent"]');
    const honeypot = form.querySelector('input[name="empresa"]');
    const submit = form.querySelector('button[type="submit"]');
    const status = form.querySelector(".form-status");
    const summary = form.querySelector(".form-errors");
    const nameError = document.getElementById("erro-" + nameInput.id);
    const phoneError = document.getElementById("erro-" + phoneInput.id);
    const consentError = document.getElementById("erro-" + consentInput.id);

    phoneInput.addEventListener("input", () => {
      phoneInput.value = formatPhone(phoneInput.value);
      showFieldError(phoneInput, phoneError, false);
    });
    nameInput.addEventListener("input", () => showFieldError(nameInput, nameError, false));
    consentInput.addEventListener("change", () => showFieldError(consentInput, consentError, false));

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (honeypot && honeypot.value.trim()) return;

      const name = nameInput.value.trim();
      const digits = onlyDigits(phoneInput.value);
      const nameOk = name.length >= 3 && !/\d/.test(name);
      const phoneOk = validPhone(digits);
      const consentOk = consentInput.checked;
      const problems = [];

      showFieldError(nameInput, nameError, !nameOk);
      showFieldError(phoneInput, phoneError, !phoneOk);
      showFieldError(consentInput, consentError, !consentOk);

      if (!nameOk) problems.push('<a href="#nome">Informe seu nome.</a>');
      if (!phoneOk) problems.push('<a href="#whatsapp">Confira seu WhatsApp com DDD.</a>');
      if (!consentOk) problems.push('<a href="#consent">Autorize o contato pelo WhatsApp.</a>');

      if (problems.length) {
        summary.innerHTML = "Confira antes de continuar: " + problems.join(" ");
        summary.hidden = false;
        summary.focus();
        return;
      }

      summary.hidden = true;
      const message = [
        "Olá, Dr. Ronaldo.",
        "Meu nome é " + name + ".",
        situacao ? "Quero falar sobre: " + situacao + "." : "Quero falar sobre meu caso previdenciário.",
        "Vim pela página e gostaria de entender os próximos passos."
      ].join(" ");
      const waUrl = "https://wa.me/" + LP_CONFIG.whatsapp + "?text=" + encodeURIComponent(message);

      if (LP_CONFIG.endpoint) {
        fetch(LP_CONFIG.endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ nome: name, whatsapp: digits, situacao, origem: location.href }),
          keepalive: true
        }).catch(() => {});
      }

      track("lead_form_submit", { situacao });
      const opened = window.open(waUrl, "_blank", "noopener");
      if (!opened) window.location.href = waUrl;

      status.innerHTML = 'Abrimos o WhatsApp para você continuar a conversa. Se ele não abrir, <a href="' + waUrl + '" target="_blank" rel="noopener">clique aqui</a>.';
      status.hidden = false;
      submit.disabled = true;
      form.reset();
      applySituation("");
      window.setTimeout(() => { submit.disabled = false; }, 2500);
    });
  });
})();
