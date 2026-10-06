
document.addEventListener("DOMContentLoaded", function () {
  /* =========================
     MOBILE MENU
  ========================= */
  const menuButton = document.querySelector(".soccer-menu-toggle");
  const navigation = document.querySelector(".soccer-main-nav");

  function closeMenu() {
    navigation.classList.remove("mobile-open");
    menuButton.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  }

  if (menuButton && navigation) {
    menuButton.setAttribute("aria-expanded", "false");

    menuButton.addEventListener("click", function () {
      const isOpen = navigation.classList.toggle("mobile-open");
      menuButton.classList.toggle("open", isOpen);
      menuButton.setAttribute("aria-expanded", String(isOpen));
    });

    // Link click -> menu band, section tak smooth scroll CSS se hota hai
    navigation.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    // Desktop size par wapas jaane par menu reset
    window.addEventListener("resize", function () {
      if (window.innerWidth > 850) closeMenu();
    });
  }

  /* =========================
     HEADER SHADOW
  ========================= */
  const header = document.querySelector(".site-header");

  if (header) {
    const onScroll = function () {
      header.style.boxShadow =
        window.scrollY > 10 ? "0 5px 25px rgba(0, 0, 0, 0.45)" : "none";
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* =========================
     ACTIVE MENU LINK (scroll spy)
  ========================= */
  const navLinks = document.querySelectorAll(".soccer-main-nav a[href^='#']");
  const spySections = [];

  navLinks.forEach(function (link) {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) spySections.push({ link: link, target: target });
  });

  function updateActiveLink() {
    const offset = (header ? header.offsetHeight : 0) + 40;
    let current = null;

    spySections.forEach(function (item) {
      if (item.target.getBoundingClientRect().top - offset <= 0) {
        current = item;
      }
    });

    navLinks.forEach(function (l) { l.classList.remove("active"); });
    if (current) current.link.classList.add("active");
  }

  window.addEventListener("scroll", updateActiveLink, { passive: true });
  updateActiveLink();

  /* =========================
     SCROLL REVEAL
  ========================= */
  const revealItems = document.querySelectorAll(
    ".engaging-info-card, .stat-card, .image-card, .insight-card, .contact-card"
  );

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    revealItems.forEach(function (item) {
      item.classList.add("reveal");
      observer.observe(item);
    });
  }
});
