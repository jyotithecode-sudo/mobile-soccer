document.addEventListener("DOMContentLoaded", function () {

  /* =========================
     MOBILE MENU
  ========================= */

  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".main-nav");

  if (menuButton && navigation) {

    menuButton.addEventListener("click", function () {
      navigation.classList.toggle("mobile-open");
    });


    navigation.querySelectorAll("a").forEach(function (link) {

      link.addEventListener("click", function () {
        navigation.classList.remove("mobile-open");
      });

    });

  }


  /* =========================
     HEADER SHADOW
  ========================= */

  const header = document.querySelector(".site-header");

  if (header) {

    window.addEventListener("scroll", function () {

      if (window.scrollY > 10) {

        header.style.boxShadow =
          "0 5px 25px rgba(0, 0, 0, 0.05)";

      } else {

        header.style.boxShadow = "none";

      }

    });

  }


  /* =========================
     SCROLL REVEAL
  ========================= */

  const revealItems = document.querySelectorAll(
    ".info-card, .stat-card, .image-card, .insight-card, .contact-card"
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
      {
        threshold: 0.08
      }
    );


    revealItems.forEach(function (item) {

      item.classList.add("reveal");

      observer.observe(item);

    });

  } else {

    revealItems.forEach(function (item) {
      item.classList.add("show");
    });

  }

});