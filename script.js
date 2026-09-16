const LP_CONFIG = {
  whatsapp: "5514996734555",
  endpoint: ""
};

(function () {
  const config = LP_CONFIG;
  const forms = Array.from(document.querySelectorAll(".lp-form"));
  if (!forms.length) return;

  let situacao = "";
  const startedAt = Date.now();

  function onlyDigits(value) {
    return value.replace(/\D/g, "").slice(0, 11);
  }

  function formatPhone(digits) {
    const d = onlyDigits(digits);
    if (d.length <= 2) return d.length ? "(" + d : "";
    if (d.length <= 6) return "(" + d.slice(0, 2) + ") " + d.slice(2);
    if (d.length <= 10) return "(" + d.slice(0, 2) + ") " + d.slice(2, 6) + "-" + d.slice(6);
    return "(" + d.slice(0, 2) + ") " + d.slice(2, 7) + "-" + d.slice(7);
  }

  function isValidPhone(digits) {
    if (digits.length < 10 || digits.length > 11) return false;
    if (digits[0] === "0") return false;
    if (digits.length === 11 && digits[2] !== "9") return false;
    return true;
  }

  function setError(field, errorEl, show) {
    field.setAttribute("aria-invalid", show ? "true" : "false");
    if (errorEl) errorEl.hidden = !show;
  }

  function applySituacao(value) {
    situacao = value || "";
    document.querySelectorAll("[data-chips] .chip").forEach((chip) => {
      chip.setAttribute("aria-pressed", chip.dataset.value === situacao ? "true" : "false");
    });
  }

  document.querySelectorAll("[data-chips] .chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      applySituacao(chip.getAttribute("aria-pressed") === "true" ? "" : chip.dataset.value);
    });
  });

  document.querySelectorAll(".card-link").forEach((link) => {
    link.addEventListener("click", () => {
      applySituacao(link.dataset.situacao || "");
      const target = document.getElementById("formulario");
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
      const firstForm = document.querySelector(".lp-form");
      const nameInput = firstForm && firstForm.querySelector('input[name="nome"]');
      if (nameInput) window.setTimeout(() => nameInput.focus({ preventScroll: true }), 420);
    });
  });

  function track(event, payload) {
    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push(Object.assign({ event: event }, payload || {}));
    }
    if (typeof window.lpTrack === "function") {
      window.lpTrack(event, payload || {});
    }
  }

  document.querySelectorAll('a[data-cta]').forEach((link) => {
    link.addEventListener("click", () => track("cta_click", { cta: link.dataset.cta }));
  });

  forms.forEach((form) => {
    const nameInput = form.querySelector('input[name="nome"]');
    const phoneInput = form.querySelector('input[name="whatsapp"]');
    const consentInput = form.querySelector('input[name="consent"]');
    const honeypot = form.querySelector('input[name="empresa"]');
    const status = form.querySelector(".form-status");
    const submit = form.querySelector('button[type="submit"]');
    const nameError = nameInput && document.getElementById("erro-" + nameInput.id);
    const phoneError = phoneInput && document.getElementById("erro-" + phoneInput.id);
    const consentError = consentInput && document.getElementById("erro-" + consentInput.id);

    if (phoneInput) {
      phoneInput.addEventListener("input", () => {
        phoneInput.value = formatPhone(phoneInput.value);
        setError(phoneInput, phoneError, false);
      });
    }

    if (nameInput) {
      nameInput.addEventListener("input", () => setError(nameInput, nameError, false));
    }

    if (consentInput) {
      consentInput.addEventListener("change", () => setError(consentInput, consentError, false));
    }

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!nameInput || !phoneInput || !consentInput) return;

      if (honeypot && honeypot.value.trim() !== "") return;
      if (Date.now() - startedAt < 1500) return;

      const name = nameInput.value.trim();
      const digits = onlyDigits(phoneInput.value);
      const nameValid = name.length >= 3 && !/\d/.test(name);
      const phoneValid = isValidPhone(digits);
      const consentValid = consentInput.checked;

      setError(nameInput, nameError, !nameValid);
      setError(phoneInput, phoneError, !phoneValid);
      setError(consentInput, consentError, !consentValid);

      if (!nameValid || !phoneValid || !consentValid) {
        const firstInvalid = !nameValid ? nameInput : !phoneValid ? phoneInput : consentInput;
        firstInvalid.focus();
        return;
      }

      const message =
        "Olá, Dr. Ronaldo! Meu nome é " + name + ". Meu WhatsApp é " + formatPhone(digits) + "." +
        (situacao ? " Situação: " + situacao + "." : "") +
        " Vim pela página de direito previdenciário e gostaria de entender meus direitos.";

      const waUrl = "https://wa.me/" + config.whatsapp + "?text=" + encodeURIComponent(message);

      if (config.endpoint) {
        fetch(config.endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ nome: name, whatsapp: digits, situacao: situacao, origem: location.href }),
          keepalive: true
        }).catch(function () {});
      }

      track("lead_form_submit", { situacao: situacao });

      const opened = window.open(waUrl, "_blank", "noopener");
      if (!opened) window.location.href = waUrl;

      if (status) {
        status.innerHTML = 'Contato encaminhado! Se o WhatsApp não abrir automaticamente, <a href="' + waUrl + '" target="_blank" rel="noopener">clique aqui para falar agora</a>.';
        status.hidden = false;
      }

      if (submit) submit.disabled = true;
      form.reset();
      applySituacao("");
      window.setTimeout(function () {
        if (submit) submit.disabled = false;
      }, 2500);
    });
  });
})();
