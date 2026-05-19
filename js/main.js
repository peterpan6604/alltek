/* =====================================================
   Alltek — main.js
   Vanilla JS. No external libraries.
   Handles: sticky nav, mobile menu, reveal-on-scroll,
   counter animation, testimonial dots, floating CTA, form.
   ===================================================== */

(() => {
  "use strict";

  const $  = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  /* ---------- Sticky nav background ---------- */
  const nav = $("#nav");
  const onScrollNav = () => {
    if (window.scrollY > 24) nav.classList.add("is-scrolled");
    else nav.classList.remove("is-scrolled");
  };
  window.addEventListener("scroll", onScrollNav, { passive: true });
  onScrollNav();

  /* ---------- Mobile hamburger ---------- */
  const burger = $("#nav-burger");
  const mobileMenu = $("#nav-mobile");
  const closeMenu = () => {
    nav.classList.remove("is-open");
    burger.setAttribute("aria-expanded", "false");
    mobileMenu.hidden = true;
  };
  const openMenu = () => {
    nav.classList.add("is-open");
    burger.setAttribute("aria-expanded", "true");
    mobileMenu.hidden = false;
  };
  burger.addEventListener("click", () => {
    if (mobileMenu.hidden) openMenu(); else closeMenu();
  });
  $$("a", mobileMenu).forEach(a => a.addEventListener("click", closeMenu));
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) closeMenu();
  });

  /* ---------- Reveal-on-scroll via Intersection Observer ---------- */
  const reveals = $$(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    reveals.forEach(el => io.observe(el));
  } else {
    reveals.forEach(el => el.classList.add("is-visible"));
  }

  /* ---------- Counter animation (trust bar) ---------- */
  const counters = $$(".trust__num");
  const animateCounter = (el) => {
    const target = parseInt(el.dataset.count, 10) || 0;
    const suffix = el.dataset.suffix || "";
    const duration = 1400;
    const start = performance.now();
    const step = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = Math.floor(eased * target) + suffix;
      if (t < 1) requestAnimationFrame(step);
      else el.textContent = target + suffix;
    };
    requestAnimationFrame(step);
  };
  if ("IntersectionObserver" in window) {
    const cio = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          cio.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    counters.forEach(c => cio.observe(c));
  } else {
    counters.forEach(animateCounter);
  }

  /* ---------- Testimonial dots ---------- */
  const carousel = $("#testimonials-carousel");
  const dots = $$(".testimonials__dot");
  if (carousel && dots.length) {
    const slides = $$(".testimonial", carousel);

    dots.forEach(dot => {
      dot.addEventListener("click", () => {
        const i = parseInt(dot.dataset.index, 10) || 0;
        const target = slides[i];
        if (target) {
          carousel.scrollTo({
            left: target.offsetLeft - carousel.offsetLeft,
            behavior: "smooth"
          });
        }
      });
    });

    // Update active dot as the user scrolls the carousel
    let scrollRaf = null;
    carousel.addEventListener("scroll", () => {
      if (scrollRaf) return;
      scrollRaf = requestAnimationFrame(() => {
        scrollRaf = null;
        const center = carousel.scrollLeft + carousel.clientWidth / 2;
        let bestIndex = 0;
        let bestDist = Infinity;
        slides.forEach((slide, i) => {
          const slideCenter = slide.offsetLeft + slide.clientWidth / 2;
          const d = Math.abs(slideCenter - center);
          if (d < bestDist) { bestDist = d; bestIndex = i; }
        });
        dots.forEach((d, i) => d.classList.toggle("is-active", i === bestIndex));
      });
    }, { passive: true });
  }

  /* ---------- Floating mobile CTA ---------- */
  const mobileCta = $("#mobile-cta");
  const onScrollCta = () => {
    if (window.scrollY > 200) mobileCta.classList.add("is-visible");
    else mobileCta.classList.remove("is-visible");
  };
  window.addEventListener("scroll", onScrollCta, { passive: true });
  onScrollCta();

  /* ---------- Contact form ---------- */
  // Auto-detects whether the Formspree endpoint has been wired.
  // While the action still contains the REPLACE_WITH_ placeholder,
  // we intercept the submit and show a friendly success message
  // without actually sending. Once the client pastes their real
  // Formspree URL, we let the browser submit normally — Formspree
  // handles the rest (email delivery, spam filtering, thank-you page).
  const form = $("#contact-form");
  const status = $("#form-status");
  if (form) {
    const isWired = !form.action.includes("REPLACE_WITH_");

    form.addEventListener("submit", (e) => {
      if (!form.checkValidity()) {
        e.preventDefault();
        form.reportValidity();
        return;
      }

      if (!isWired) {
        // Stub mode — pre-handoff. Don't submit; tell the user honestly
        // that the form isn't active and steer them to working channels.
        e.preventDefault();
        status.textContent = "Our contact form isn't live yet — please call 07507 851590 or message us on WhatsApp / Facebook. We'll get back to you fast.";
        return;
      }

      // Wired mode — let the browser submit to Formspree as normal.
      // Show a brief in-flight message; Formspree returns a thank-you page.
      status.textContent = "Sending…";
    });
  }
})();
