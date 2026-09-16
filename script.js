(() => {
  const whatsappNumber = "5514996734555";
  const form = document.querySelector(".lp-form");
  const menu = document.querySelector(".mobile-menu");

  function track(event, payload = {}) {
    if (Array.isArray(window.dataLayer)) window.dataLayer.push({ event, ...payload });
    if (typeof window.lpTrack === "function") window.lpTrack(event, payload);
  }

  if (menu) {
    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => { menu.open = false; });
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && menu.open) {
        menu.open = false;
        menu.querySelector("summary").focus();
      }
    });
    document.addEventListener("click", (event) => {
      if (!menu.contains(event.target)) menu.open = false;
    });
  }

  document.querySelectorAll("[data-cta]").forEach((link) => {
    link.addEventListener("click", () => track("cta_click", { cta: link.dataset.cta }));
  });

  const mobileContact = document.querySelector(".mobile-contact");
  const heroCta = document.querySelector(".hero-cta");
  const formPanel = document.querySelector(".form-panel");
  if (mobileContact && heroCta && formPanel && "IntersectionObserver" in window) {
    const visibility = new Map();
    const updateContact = () => mobileContact.classList.toggle(
      "is-visible", window.scrollY > 180 && !visibility.get(heroCta) && !visibility.get(formPanel)
    );
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => visibility.set(entry.target, entry.isIntersecting));
      updateContact();
    }, { rootMargin: "-80px 0px 0px 0px" });
    observer.observe(heroCta);
    observer.observe(formPanel);
    window.addEventListener("scroll", updateContact, { passive: true });
  }

  if (!form) return;
  const nameInput = form.elements.nome;
  const phoneInput = form.elements.whatsapp;
  const topicInput = form.elements.assunto;
  const consentInput = form.elements.consent;
  const summary = form.querySelector(".form-errors");
  const status = form.querySelector(".form-status");
  const submit = form.querySelector('button[type="submit"]');

  document.querySelectorAll("[data-situacao]").forEach((link) => {
    link.addEventListener("click", () => {
      topicInput.value = link.dataset.situacao;
      requestAnimationFrame(() => nameInput.focus({ preventScroll: true }));
      track("situation_selected", { situacao: topicInput.value });
    });
  });

  function digitsOnly(value) {
    return value.replace(/\D/g, "").slice(0, 11);
  }

  function formatPhone(value) {
    const digits = digitsOnly(value);
    if (digits.length <= 2) return digits ? "(" + digits : "";
    if (digits.length <= 6) return "(" + digits.slice(0, 2) + ") " + digits.slice(2);
    const split = digits.length <= 10 ? 6 : 7;
    return "(" + digits.slice(0, 2) + ") " + digits.slice(2, split) + "-" + digits.slice(split);
  }

  function setInvalid(input, invalid) {
    input.setAttribute("aria-invalid", String(invalid));
    document.getElementById("erro-" + input.id).hidden = !invalid;
  }

  phoneInput.addEventListener("input", () => {
    phoneInput.value = formatPhone(phoneInput.value);
    setInvalid(phoneInput, false);
  });
  nameInput.addEventListener("input", () => setInvalid(nameInput, false));
  consentInput.addEventListener("change", () => setInvalid(consentInput, false));

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (form.elements.empresa.value.trim() || submit.disabled) return;

    const name = nameInput.value.trim();
    const phone = digitsOnly(phoneInput.value);
    const nameValid = (name.match(/\p{L}/gu) || []).length >= 2 && /^[\p{L}\p{M} .’'-]+$/u.test(name);
    const phoneValid = /^[1-9]{2}(?:9\d{8}|[2-5]\d{7})$/.test(phone);
    const errors = [
      [nameInput, !nameValid, "Informe seu nome."],
      [phoneInput, !phoneValid, "Confira seu WhatsApp com DDD."],
      [consentInput, !consentInput.checked, "Autorize o uso dos dados."]
    ];
    errors.forEach(([input, invalid]) => setInvalid(input, invalid));
    const invalidFields = errors.filter(([, invalid]) => invalid);
    status.hidden = true;

    if (invalidFields.length) {
      summary.replaceChildren(document.createTextNode("Confira antes de continuar: "));
      invalidFields.forEach(([input, , message]) => {
        const link = document.createElement("a");
        link.href = "#" + input.id;
        link.textContent = message;
        summary.append(link);
      });
      summary.hidden = false;
      summary.focus();
      return;
    }

    summary.hidden = true;
    const message = [
      "Olá, Dr. Ronaldo. Meu nome é " + name + ".",
      topicInput.value ? "Gostaria de conversar sobre: " + topicInput.value + "." : "Gostaria de conversar sobre aposentadoria ou benefício do INSS.",
      "Meu WhatsApp é " + formatPhone(phone) + ".",
      "Vim pelo site e gostaria de saber como funciona o atendimento."
    ].join(" ");
    const url = new URL("https://wa.me/" + whatsappNumber);
    url.searchParams.set("text", message);
    const link = document.createElement("a");
    link.href = url.href;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = "Abrir conversa no WhatsApp";
    status.replaceChildren(document.createTextNode("Mensagem preparada. Envie no WhatsApp para iniciar a conversa. "), link);
    status.hidden = false;
    link.click();
    track("whatsapp_message_prepared", { situacao: topicInput.value });
    submit.disabled = true;
    window.setTimeout(() => { submit.disabled = false; }, 1500);
  });
})();
