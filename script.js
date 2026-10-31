// ==========================================
// TANAY SRIVASTAVA - PORTFOLIO JAVASCRIPT
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

  // MOBILE NAVIGATION
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", isOpen);
    });

    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // DARK / LIGHT MODE
  const themeToggle = document.getElementById("themeToggle");
  const themeIcon = document.getElementById("themeIcon");

  function setTheme(theme) {
    document.body.classList.toggle("dark-theme", theme === "dark");

    if (themeIcon) {
      themeIcon.textContent = theme === "dark" ? "☀" : "☾";
    }

    if (themeToggle) {
      themeToggle.setAttribute(
        "aria-label",
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
      );
    }
  }

  let savedTheme = "light";

  try {
    savedTheme = localStorage.getItem("tanayPortfolioTheme") || "light";
  } catch (error) {
    savedTheme = "light";
  }

  setTheme(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const newTheme = document.body.classList.contains("dark-theme")
        ? "light"
        : "dark";

      setTheme(newTheme);

      try {
        localStorage.setItem("tanayPortfolioTheme", newTheme);
      } catch (error) {
        // Theme still works if browser storage is unavailable.
      }
    });
  }

  // PROJECT FILTERS
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");
  const projectCount = document.getElementById("projectCount");

  function updateProjectCount(count) {
    if (projectCount) {
      projectCount.textContent =
        `SHOWING ${String(count).padStart(2, "0")} PROJECTS`;
    }
  }

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const selectedFilter = button.dataset.filter;

      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      let visibleCount = 0;

      projectCards.forEach(card => {
        const category = card.dataset.category;
        const shouldShow =
          selectedFilter === "all" || category === selectedFilter;

        card.classList.toggle("is-hidden", !shouldShow);

        if (shouldShow) {
          visibleCount++;
        }
      });

      updateProjectCount(visibleCount);
    });
  });

  // SCROLL REVEAL
  const revealElements = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12
    });

    revealElements.forEach(element => {
      revealObserver.observe(element);
    });
  } else {
    revealElements.forEach(element => {
      element.classList.add("visible");
    });
  }

  // SCROLL PROGRESS + BACK TO TOP
  const scrollProgress = document.getElementById("scrollProgress");
  const backToTop = document.getElementById("backToTop");

  function handleScroll() {
    const scrollableHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    const scrollPercentage = scrollableHeight > 0
      ? (window.scrollY / scrollableHeight) * 100
      : 0;

    if (scrollProgress) {
      scrollProgress.style.width = `${scrollPercentage}%`;
    }

    if (backToTop) {
      backToTop.classList.toggle("visible", window.scrollY > 450);
    }
  }

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  if (backToTop) {
    backToTop.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  // COPY EMAIL
  const copyEmailButton = document.getElementById("copyEmail");
  const copyFeedback = document.getElementById("copyFeedback");

  if (copyEmailButton) {
    copyEmailButton.addEventListener("click", async () => {
      const email = copyEmailButton.dataset.email;

      try {
        await navigator.clipboard.writeText(email);

        if (copyFeedback) {
          copyFeedback.textContent = "Email copied!";
        }

        copyEmailButton.innerHTML = 'Copied <span>✓</span>';

        setTimeout(() => {
          copyEmailButton.innerHTML = 'Copy email <span>▢</span>';

          if (copyFeedback) {
            copyFeedback.textContent = "";
          }
        }, 2200);

      } catch (error) {
        if (copyFeedback) {
          copyFeedback.textContent = email;
        }
      }
    });
  }

  // AUTOMATIC FOOTER YEAR
  const currentYear = document.getElementById("currentYear");

  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

});