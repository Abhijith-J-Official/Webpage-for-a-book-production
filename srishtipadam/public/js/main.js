/**
 * Srishtipadam Website - Core Engine
 * Manages translation, dark mode, hamburger drawer, particles background, scroll animations, modals, and forms.
 */

document.addEventListener("DOMContentLoaded", () => {
  // --- 1. Global State & DOM Selections ---
  const state = {
    lang: localStorage.getItem("srishtipadam_lang") || "en",
    theme: localStorage.getItem("srishtipadam_theme") || "light"
  };

  const body = document.body;
  const header = document.querySelector("header");
  const menuToggle = document.querySelector(".menu-toggle");
  const slidingDrawer = document.querySelector(".sliding-drawer");
  const particleCanvas = document.getElementById("particle-canvas");

  // --- 2. Theme Switching Logic ---
  const initTheme = () => {
    if (state.theme === "dark") {
      body.classList.add("dark");
    } else {
      body.classList.remove("dark");
    }
    updateThemeButtons();
  };

  const updateThemeButtons = () => {
    document.querySelectorAll(".theme-btn").forEach(btn => {
      if (btn.dataset.theme === state.theme) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
  };

  document.querySelectorAll(".theme-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      state.theme = btn.dataset.theme;
      localStorage.setItem("srishtipadam_theme", state.theme);
      initTheme();
    });
  });

  // --- 3. Language Switching & Dynamic Translations ---
  const initLanguage = () => {
    // Set HTML lang attribute for CSS font selection
    document.documentElement.setAttribute("lang", state.lang);
    updateLanguageButtons();
    translatePage();
  };

  const updateLanguageButtons = () => {
    document.querySelectorAll(".lang-btn").forEach(btn => {
      if (btn.dataset.lang === state.lang) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
  };

  const translatePage = () => {
    const dictionary = SrishtipadamData.translations[state.lang];
    if (!dictionary) return;

    // Translate all standard elements with data-translate attribute
    document.querySelectorAll("[data-translate]").forEach(el => {
      const key = el.dataset.translate;
      if (dictionary[key]) {
        if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
          el.placeholder = dictionary[key];
        } else {
          el.innerHTML = dictionary[key];
        }
      }
    });

    // Translate select box options specifically if they have data-translate values
    document.querySelectorAll("option[data-translate]").forEach(option => {
      const key = option.dataset.translate;
      if (dictionary[key]) {
        option.textContent = dictionary[key];
      }
    });

    // Toggle specific English/Malayalam UI layouts if any
    document.querySelectorAll("[data-lang-show]").forEach(el => {
      if (el.dataset.langShow === state.lang) {
        el.style.display = "";
      } else {
        el.style.display = "none";
      }
    });

    // Re-render team and updates dynamically to reflect language switch if those grids exist
    renderTeamGrid();
    renderUpdatesGrid();
  };

  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      state.lang = btn.dataset.lang;
      localStorage.setItem("srishtipadam_lang", state.lang);
      initLanguage();
      // Dispatch an event so book.js knows language changed
      window.dispatchEvent(new CustomEvent("languageChanged", { detail: { lang: state.lang } }));
    });
  });

  // --- 4. Hamburger Menu Drawer ---
  const toggleDrawer = () => {
    menuToggle.classList.toggle("active");
    slidingDrawer.classList.toggle("active");
  };

  menuToggle.addEventListener("click", toggleDrawer);

  // Close drawer when clicking outside on content
  document.addEventListener("click", (e) => {
    if (!slidingDrawer.contains(e.target) && !menuToggle.contains(e.target) && slidingDrawer.classList.contains("active")) {
      toggleDrawer();
    }
  });

  // Smooth scroll, toggle active state, and close drawer when nav links are clicked
  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      const href = link.getAttribute("href");
      if (href && (href.startsWith("#") || href.includes("#"))) {
        const hash = href.substring(href.indexOf("#"));
        document.querySelectorAll(".nav-link").forEach(l => {
          const lHref = l.getAttribute("href");
          if (lHref && lHref.endsWith(hash)) {
            l.classList.add("active");
          } else {
            l.classList.remove("active");
          }
        });
      }
      
      if (slidingDrawer && slidingDrawer.classList.contains("active")) {
        toggleDrawer();
      }
    });
  });

  // Header Scroll Effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
      header.classList.add("glass-nav");
    } else {
      header.classList.remove("scrolled");
      header.classList.remove("glass-nav");
    }
  });

  // --- 5. Canvas Particles Background (Hero) ---
  const runParticles = () => {
    if (!particleCanvas) return;
    const ctx = particleCanvas.getContext("2d");
    let particlesArray = [];
    let animationFrameId;

    const resizeCanvas = () => {
      particleCanvas.width = particleCanvas.parentElement.offsetWidth;
      particleCanvas.height = particleCanvas.parentElement.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    class Particle {
      constructor() {
        this.x = Math.random() * particleCanvas.width;
        this.y = Math.random() * particleCanvas.height + particleCanvas.height;
        this.size = Math.random() * 5 + 2;
        this.speedX = Math.random() * 0.8 - 0.4;
        this.speedY = -(Math.random() * 0.7 + 0.3);
        this.opacity = Math.random() * 0.5 + 0.1;
        this.color = state.theme === "dark" ? "46, 196, 114" : "21, 122, 68"; // green RGBs
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.y < 0 || this.x < 0 || this.x > particleCanvas.width) {
          this.y = particleCanvas.height + Math.random() * 20;
          this.x = Math.random() * particleCanvas.width;
          this.size = Math.random() * 5 + 2;
        }
      }

      draw() {
        ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      particlesArray = [];
      const numberOfParticles = Math.min(Math.floor(particleCanvas.width / 15), 60);
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, particleCanvas.width, particleCanvas.height);
      for (let i = 0; i < particlesArray.length; i++) {
        // Dynamic color update on theme switch
        particlesArray[i].color = state.theme === "dark" ? "46, 196, 114" : "21, 122, 68";
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    window.addEventListener("resize", () => {
      init();
    });
  };

  // --- 6. Intersection Observer for Scroll Animations ---
  const setupScrollAnimations = () => {
    const animatedElements = document.querySelectorAll(".scroll-animate");
    
    // Add entrance animation to hero immediately
    const heroContent = document.querySelector(".hero-content");
    if (heroContent) {
      setTimeout(() => {
        heroContent.classList.add("fade-in-up");
      }, 100);
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animated");
          
          // If What We Do section is intersecting, run the statistics counter
          if (entry.target.id === "what-we-do") {
            animateCounters();
          }
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px"
    });

    animatedElements.forEach(el => observer.observe(el));
  };

  // Statistic Counters Animation
  let countersAnimated = false;
  const animateCounters = () => {
    if (countersAnimated) return;
    countersAnimated = true;

    const counters = document.querySelectorAll(".ach-num");
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute("data-target"));
      const duration = 2000; // 2 seconds
      const stepTime = 30;
      const totalSteps = Math.ceil(duration / stepTime);
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        const currentVal = Math.floor((target / totalSteps) * currentStep);
        counter.textContent = currentVal + "+";

        if (currentStep >= totalSteps) {
          counter.textContent = target + "+";
          clearInterval(timer);
        }
      }, stepTime);
    });
  };

  // --- 7. Gallery Lightbox ---
  const setupGalleryLightbox = () => {
    const galleryItems = document.querySelectorAll(".gallery-item");
    const lightbox = document.getElementById("lightbox");
    if (!lightbox) return;

    const lightboxImg = lightbox.querySelector("img");
    const lightboxCaption = lightbox.querySelector(".lightbox-caption");
    const lightboxClose = lightbox.querySelector(".lightbox-close");

    galleryItems.forEach(item => {
      item.addEventListener("click", () => {
        const img = item.querySelector("img");
        const caption = item.querySelector(".gallery-caption").textContent;

        lightboxImg.src = img.src;
        lightboxCaption.textContent = caption;
        lightbox.classList.add("active");
        body.style.overflow = "hidden"; // Disable scroll
      });
    });

    const closeLightbox = () => {
      lightbox.classList.remove("active");
      body.style.overflow = "";
    };

    lightboxClose.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  };

  // --- 8. Team Grid Render ---
  const renderTeamGrid = () => {
    const teamGrid = document.getElementById("team-grid");
    if (!teamGrid) return; // Only on index.html
    
    teamGrid.innerHTML = "";
    
    SrishtipadamData.team.forEach(member => {
      const name = state.lang === "ml" ? member.name_ml : member.name;
      const role = state.lang === "ml" ? member.role_ml : member.role;

      const card = document.createElement("div");
      card.className = "team-card glass-panel";
      card.innerHTML = `
        <div class="team-img-wrapper">
          <img src="${member.image}" alt="${name}" loading="lazy">
        </div>
        <div class="team-name">${name}</div>
        <div class="team-role">${role}</div>
        <div class="team-socials">
          <a href="#" class="team-social-icon" aria-label="Facebook">
            <svg viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
          </a>
          <a href="#" class="team-social-icon" aria-label="Twitter">
            <svg viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
          </a>
          <a href="#" class="team-social-icon" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </a>
        </div>
      `;
      teamGrid.appendChild(card);
    });
  };

  // --- 9. Updates Section Render & Event Modals ---
  let activeUpdateFilter = "all";
  
  const setupUpdatesFilters = () => {
    const chips = document.querySelectorAll(".filter-chip");
    chips.forEach(chip => {
      chip.addEventListener("click", () => {
        chips.forEach(c => c.classList.remove("active"));
        chip.classList.add("active");
        activeUpdateFilter = chip.dataset.filter;
        renderUpdatesGrid();
      });
    });
  };

  const renderUpdatesGrid = () => {
    const updatesGrid = document.getElementById("updates-grid");
    if (!updatesGrid) return; // Only on index.html

    updatesGrid.innerHTML = "";

    const filtered = SrishtipadamData.updates.filter(item => {
      if (activeUpdateFilter === "all") return true;
      return item.category === activeUpdateFilter;
    });

    filtered.forEach(item => {
      const title = state.lang === "ml" ? item.title_ml : item.title;
      const desc = state.lang === "ml" ? item.desc_ml : item.desc;
      
      const card = document.createElement("div");
      card.className = "update-card glass-panel";
      card.innerHTML = `
        <div class="update-img-container">
          <div class="update-category-badge">${state.lang === "ml" ? getCategoryMl(item.category) : item.category}</div>
          <img src="${item.image}" alt="${title}" loading="lazy">
        </div>
        <div class="update-card-content">
          <h3 class="update-card-title">${title}</h3>
          <p class="update-card-desc">${desc}</p>
        </div>
      `;

      card.addEventListener("click", () => openUpdateModal(item));
      updatesGrid.appendChild(card);
    });
  };

  const getCategoryMl = (category) => {
    const mapping = {
      events: "പരിപാടി",
      releases: "പ്രകാശനം",
      announcements: "അറിയിപ്പ്"
    };
    return mapping[category] || category;
  };

  const openUpdateModal = (item) => {
    const modal = document.getElementById("update-modal");
    if (!modal) return;

    const title = state.lang === "ml" ? item.title_ml : item.title;
    const desc = state.lang === "ml" ? item.desc_ml : item.desc;
    const date = state.lang === "ml" ? item.date_ml : item.date;
    const venue = state.lang === "ml" ? item.venue_ml : item.venue;

    const dict = SrishtipadamData.translations[state.lang];

    modal.querySelector(".modal-img-container img").src = item.image;
    modal.querySelector(".modal-body").innerHTML = `
      <h2 class="book-modal-title" style="font-size: 2rem;">${title}</h2>
      <p class="book-modal-desc">${desc}</p>
      <div class="modal-meta-grid">
        <div class="modal-meta-item">
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
          <div>
            <span class="modal-meta-label">${dict.event_date}:</span>
            <span>${date}</span>
          </div>
        </div>
        <div class="modal-meta-item">
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
          <div>
            <span class="modal-meta-label">${dict.event_venue}:</span>
            <span>${venue}</span>
          </div>
        </div>
      </div>
      <button class="btn btn-primary modal-close-trigger" style="margin-top: 15px; width: 100%;">${dict.event_close}</button>
    `;

    modal.classList.add("active");
    body.style.overflow = "hidden";

    const closeTriggers = [
      modal.querySelector(".modal-close-btn"),
      modal.querySelector(".modal-close-trigger")
    ];

    const closeModal = () => {
      modal.classList.remove("active");
      body.style.overflow = "";
    };

    closeTriggers.forEach(trigger => trigger.addEventListener("click", closeModal));
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
  };

  // --- 10. Join Us Modals & Form Submission Validation ---
  const setupJoinUsModal = () => {
    const openBtn = document.getElementById("join-cta-btn");
    const modal = document.getElementById("join-modal");
    if (!modal || !openBtn) return;

    const closeBtn = modal.querySelector(".modal-close-btn");
    const form = document.getElementById("join-registration-form");
    const successAlert = modal.querySelector(".form-success-alert");

    const openModal = () => {
      modal.classList.add("active");
      body.style.overflow = "hidden";
      successAlert.style.display = "none";
      form.style.display = "flex";
      form.reset();
    };

    const closeModal = () => {
      modal.classList.remove("active");
      body.style.overflow = "";
    };

    openBtn.addEventListener("click", openModal);
    closeBtn.addEventListener("click", closeModal);
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });

    // Client side Form Validation
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const name = form.querySelector("#join-name").value.trim();
      const email = form.querySelector("#join-email").value.trim();
      const phone = form.querySelector("#join-phone").value.trim();
      const district = form.querySelector("#join-district").value;
      const occupation = form.querySelector("#join-occupation").value.trim();
      const message = form.querySelector("#join-message").value.trim();

      const dict = SrishtipadamData.translations[state.lang];

      // Form validation rules
      let isValid = true;
      
      if (!name || name.length < 2) isValid = false;
      
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email || !emailRegex.test(email)) isValid = false;

      const phoneRegex = /^[0-9+()-\s]{10,15}$/;
      if (!phone || !phoneRegex.test(phone.replace(/\s/g, ""))) isValid = false;

      if (!district) isValid = false;
      if (!occupation) isValid = false;
      if (!message || message.length < 10) isValid = false;

      if (!isValid) {
        alert(dict.form_validation_error);
        return;
      }

      // If valid, show mock success response
      form.style.display = "none";
      successAlert.textContent = dict.form_success;
      successAlert.style.display = "flex";

      // Auto-close after 3.5s
      setTimeout(() => {
        closeModal();
      }, 3500);
    });
  };

  // --- 11. Initializations ---
  initTheme();
  initLanguage();
  runParticles();
  setupScrollAnimations();
  setupGalleryLightbox();
  renderTeamGrid();
  setupUpdatesFilters();
  renderUpdatesGrid();
  setupJoinUsModal();
});
