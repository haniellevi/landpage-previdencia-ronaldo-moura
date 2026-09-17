(() => {
  const track = (event, payload = {}) => {
    if (Array.isArray(window.dataLayer)) window.dataLayer.push({ event, ...payload });
  };

  document.querySelectorAll("[data-cta]").forEach((link) => {
    link.addEventListener("click", () => track("cta_click", { cta: link.dataset.cta }));
  });

  const menu = document.querySelector(".mobile-menu");
  if (menu) {
    menu.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => { menu.open = false; }));
    document.addEventListener("click", (event) => { if (!menu.contains(event.target)) menu.open = false; });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && menu.open) {
        menu.open = false;
        menu.querySelector("summary").focus();
      }
    });
  }

  const video = document.querySelector(".journey-video");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (video && !reduceMotion && "IntersectionObserver" in window) {
    let userPaused = false;
    video.addEventListener("pause", () => { if (video.dataset.autoPausing !== "1") userPaused = true; });
    new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !userPaused) {
        video.play().catch(() => {});
      } else if (!entry.isIntersecting && !video.paused) {
        video.dataset.autoPausing = "1";
        video.pause();
        delete video.dataset.autoPausing;
      }
    }, { threshold: 0.6 }).observe(video);
  }
})();
