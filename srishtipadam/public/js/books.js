/**
 * Srishtipadam Website - Books Page Engine
 * Handles searching, filtering, sorting, pagination, and details modal rendering.
 */

document.addEventListener("DOMContentLoaded", () => {
  // DOM Elements
  const searchInput = document.getElementById("books-search");
  const categoryFilter = document.getElementById("filter-category");
  const priceSlider = document.getElementById("filter-price");
  const priceVal = document.getElementById("price-val");
  const ratingFilter = document.getElementById("filter-rating");
  const sortSelect = document.getElementById("sort-select");
  const booksGrid = document.getElementById("books-grid");
  const paginationContainer = document.getElementById("pagination");
  const bookModal = document.getElementById("book-modal");

  if (!booksGrid) return; // Only run on books.html

  // State Management
  const state = {
    lang: localStorage.getItem("srishtipadam_lang") || "en",
    searchQuery: "",
    selectedCategory: "all",
    maxPrice: parseInt(priceSlider?.value || "500"),
    minRating: 0.0,
    sortBy: "default",
    currentPage: 1,
    itemsPerPage: 4 // Show 4 books per page to demonstrate pagination
  };

  // --- 1. Event Listeners ---

  // Search Input
  searchInput.addEventListener("input", (e) => {
    state.searchQuery = e.target.value.toLowerCase().trim();
    state.currentPage = 1;
    applyFiltersAndRender();
  });

  // Category Filter
  categoryFilter.addEventListener("change", (e) => {
    state.selectedCategory = e.target.value;
    state.currentPage = 1;
    applyFiltersAndRender();
  });

  // Price Slider
  if (priceSlider) {
    priceSlider.addEventListener("input", (e) => {
      state.maxPrice = parseInt(e.target.value);
      if (priceVal) priceVal.textContent = "₹" + state.maxPrice;
      state.currentPage = 1;
      applyFiltersAndRender();
    });
  }

  // Rating Filter
  ratingFilter.addEventListener("change", (e) => {
    state.minRating = parseFloat(e.target.value) || 0.0;
    state.currentPage = 1;
    applyFiltersAndRender();
  });

  // Sorting
  sortSelect.addEventListener("change", (e) => {
    state.sortBy = e.target.value;
    state.currentPage = 1;
    applyFiltersAndRender();
  });

  // Language Change Listener
  window.addEventListener("languageChanged", (e) => {
    state.lang = e.detail.lang;
    applyFiltersAndRender();
  });

  // Clear Filters Button
  const clearFiltersBtn = document.getElementById("clear-filters-btn");
  if (clearFiltersBtn) {
    clearFiltersBtn.addEventListener("click", () => {
      searchInput.value = "";
      categoryFilter.value = "all";
      if (priceSlider) {
        priceSlider.value = "500";
        if (priceVal) priceVal.textContent = "₹500";
      }
      ratingFilter.value = "0";
      sortSelect.value = "default";

      state.searchQuery = "";
      state.selectedCategory = "all";
      state.maxPrice = 500;
      state.minRating = 0.0;
      state.sortBy = "default";
      state.currentPage = 1;

      applyFiltersAndRender();
    });
  }

  // --- 2. Filter & Sort Logic ---

  const applyFiltersAndRender = () => {
    // 1. Filtering
    let filteredBooks = SrishtipadamData.books.filter(book => {
      // Search Query Match (Title or Author or Category)
      const bookTitle = (state.lang === "ml" ? book.title_ml : book.title).toLowerCase();
      const bookAuthor = (state.lang === "ml" ? book.author_ml : book.author).toLowerCase();
      const queryMatch = bookTitle.includes(state.searchQuery) || bookAuthor.includes(state.searchQuery);

      // Category Match
      const categoryMatch = state.selectedCategory === "all" || book.category === state.selectedCategory;

      // Price Match
      const priceMatch = book.price <= state.maxPrice;

      // Rating Match
      const ratingMatch = book.rating >= state.minRating;

      return queryMatch && categoryMatch && priceMatch && ratingMatch;
    });

    // 2. Sorting
    if (state.sortBy === "rating") {
      filteredBooks.sort((a, b) => b.rating - a.rating);
    } else if (state.sortBy === "price_asc") {
      filteredBooks.sort((a, b) => a.price - b.price);
    } else if (state.sortBy === "newest") {
      filteredBooks.sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));
    } else if (state.sortBy === "alpha") {
      filteredBooks.sort((a, b) => {
        const titleA = state.lang === "ml" ? a.title_ml : a.title;
        const titleB = state.lang === "ml" ? b.title_ml : b.title;
        return titleA.localeCompare(titleB, state.lang === "ml" ? "ml" : "en");
      });
    }

    // 3. Render Grid & Pagination
    renderBooksGrid(filteredBooks);
    renderPagination(filteredBooks.length);
  };

  // --- 3. Rendering ---

  const renderBooksGrid = (booksList) => {
    booksGrid.innerHTML = "";
    const dict = SrishtipadamData.translations[state.lang];

    if (booksList.length === 0) {
      booksGrid.innerHTML = `<div class="no-results" data-translate="no_books_found">${dict.no_books_found}</div>`;
      return;
    }

    // Calculate Pagination Slices
    const startIndex = (state.currentPage - 1) * state.itemsPerPage;
    const endIndex = startIndex + state.itemsPerPage;
    const paginatedBooks = booksList.slice(startIndex, endIndex);

    paginatedBooks.forEach(book => {
      const title = state.lang === "ml" ? book.title_ml : book.title;
      const author = state.lang === "ml" ? book.author_ml : book.author;
      const categoryText = state.lang === "ml" ? book.category_ml : book.category;

      const card = document.createElement("div");
      card.className = "book-card glass-panel scroll-animate animated";
      card.innerHTML = `
        <div class="book-cover-container">
          <img src="${book.image}" alt="${title}" loading="lazy">
        </div>
        <div class="book-details">
          <div class="book-title">${title}</div>
          <div class="book-author-text">${dict.book_author}: ${author}</div>
          <div class="book-bottom">
            <div class="book-price-tag">₹${book.price}</div>
            <div class="book-rating-tag">
              <svg viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
              <span>${book.rating.toFixed(1)}</span>
            </div>
          </div>
        </div>
      `;

      card.addEventListener("click", () => openBookModal(book));
      booksGrid.appendChild(card);
    });
  };

  const renderPagination = (totalItems) => {
    paginationContainer.innerHTML = "";
    const totalPages = Math.ceil(totalItems / state.itemsPerPage);
    if (totalPages <= 1) return;

    const dict = SrishtipadamData.translations[state.lang];

    // Previous Button
    const prevBtn = document.createElement("button");
    prevBtn.className = "page-btn";
    prevBtn.textContent = dict.page_prev;
    prevBtn.disabled = state.currentPage === 1;
    prevBtn.addEventListener("click", () => {
      state.currentPage--;
      applyFiltersAndRender();
      window.scrollTo({ top: booksGrid.offsetTop - 150, behavior: "smooth" });
    });
    paginationContainer.appendChild(prevBtn);

    // Numbered Buttons
    for (let i = 1; i <= totalPages; i++) {
      const pageBtn = document.createElement("button");
      pageBtn.className = `page-btn ${state.currentPage === i ? "active" : ""}`;
      pageBtn.textContent = i;
      pageBtn.addEventListener("click", () => {
        state.currentPage = i;
        applyFiltersAndRender();
        window.scrollTo({ top: booksGrid.offsetTop - 150, behavior: "smooth" });
      });
      paginationContainer.appendChild(pageBtn);
    }

    // Next Button
    const nextBtn = document.createElement("button");
    nextBtn.className = "page-btn";
    nextBtn.textContent = dict.page_next;
    nextBtn.disabled = state.currentPage === totalPages;
    nextBtn.addEventListener("click", () => {
      state.currentPage++;
      applyFiltersAndRender();
      window.scrollTo({ top: booksGrid.offsetTop - 150, behavior: "smooth" });
    });
    paginationContainer.appendChild(nextBtn);
  };

  // --- 4. Book Detailed Modal ---

  const openBookModal = (book) => {
    if (!bookModal) return;

    const dict = SrishtipadamData.translations[state.lang];

    const title = state.lang === "ml" ? book.title_ml : book.title;
    const author = state.lang === "ml" ? book.author_ml : book.author;
    const category = state.lang === "ml" ? book.category_ml : book.category;
    const date = state.lang === "ml" ? book.publishDate_ml : book.publishDate;
    const desc = state.lang === "ml" ? book.desc_ml : book.desc;

    bookModal.querySelector(".modal-body").innerHTML = `
      <div class="book-modal-grid">
        <div class="book-modal-cover">
          <img src="${book.image}" alt="${title}">
        </div>
        <div class="book-modal-details">
          <div class="book-modal-title">${title}</div>
          <div class="book-modal-author">${author}</div>
          <p class="book-modal-desc">${desc}</p>
          <div class="book-meta-list">
            <div class="book-meta-row">
              <span class="book-meta-label">${dict.book_category}:</span>
              <span class="book-meta-val">${category}</span>
            </div>
            <div class="book-meta-row">
              <span class="book-meta-label">${dict.book_publish_date}:</span>
              <span class="book-meta-val">${date}</span>
            </div>
            <div class="book-meta-row">
              <span class="book-meta-label">${dict.book_rating}:</span>
              <span class="book-meta-val" id="modal-rating-val" style="display: flex; align-items: center; gap: 4px; color: #ffb020;">
                <svg viewBox="0 0 20 20" style="width:16px; height:16px; fill:currentColor;"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                <span>${book.rating.toFixed(1)}</span>
              </span>
            </div>
            <div class="book-meta-row">
              <span class="book-meta-label">${dict.book_price}:</span>
              <span class="book-meta-val" style="color: var(--primary-brand); font-size: 1.25rem;">₹${book.price}</span>
            </div>
          </div>
          
          <!-- Dynamic Star Rating System -->
          <div class="book-user-rating-section" style="margin-top: 10px; display: flex; flex-direction: column; gap: 6px;">
            <span class="book-meta-label" style="font-size: 0.85rem;">${state.lang === "ml" ? "ഈ പുസ്തകം വിലയിരുത്തുക:" : "Rate this book:"}</span>
            <div class="user-stars-container" style="display: flex; gap: 6px; cursor: pointer;">
              <span class="user-star-btn" data-star="1" style="font-size: 1.5rem; color: var(--text-light); transition: color var(--transition-fast);">★</span>
              <span class="user-star-btn" data-star="2" style="font-size: 1.5rem; color: var(--text-light); transition: color var(--transition-fast);">★</span>
              <span class="user-star-btn" data-star="3" style="font-size: 1.5rem; color: var(--text-light); transition: color var(--transition-fast);">★</span>
              <span class="user-star-btn" data-star="4" style="font-size: 1.5rem; color: var(--text-light); transition: color var(--transition-fast);">★</span>
              <span class="user-star-btn" data-star="5" style="font-size: 1.5rem; color: var(--text-light); transition: color var(--transition-fast);">★</span>
            </div>
            <span class="user-rating-status" style="font-size: 0.8rem; color: var(--primary-brand); font-weight: 600; display: none;"></span>
          </div>

          <button class="btn btn-primary buy-btn" style="margin-top: 15px;">${dict.book_buy_now}</button>
        </div>
      </div>
    `;

    bookModal.classList.add("active");
    document.body.style.overflow = "hidden";

    // Star Rating Event Logic
    const starsContainer = bookModal.querySelector(".user-stars-container");
    const starBtns = bookModal.querySelectorAll(".user-star-btn");
    const ratingStatus = bookModal.querySelector(".user-rating-status");
    let selectedRating = 0;

    const highlightStars = (rating) => {
      starBtns.forEach(btn => {
        const starVal = parseInt(btn.dataset.star);
        if (starVal <= rating) {
          btn.style.color = "#ffb020";
        } else {
          btn.style.color = "var(--text-light)";
        }
      });
    };

    starBtns.forEach(btn => {
      btn.addEventListener("mouseover", () => {
        highlightStars(parseInt(btn.dataset.star));
      });

      btn.addEventListener("click", () => {
        selectedRating = parseInt(btn.dataset.star);
        highlightStars(selectedRating);
        
        // Calculate new rating based on baseline + 1
        const baseline = 10;
        const totalRating = (book.rating * baseline) + selectedRating;
        book.rating = parseFloat((totalRating / (baseline + 1)).toFixed(1));
        
        // Update modal rating text
        const ratingValSpan = bookModal.querySelector("#modal-rating-val span");
        if (ratingValSpan) {
          ratingValSpan.textContent = book.rating.toFixed(1);
        }
        
        // Show thank you status
        starsContainer.style.pointerEvents = "none";
        starBtns.forEach(b => b.style.opacity = "0.7");
        ratingStatus.textContent = state.lang === "ml" ? 
          `റേറ്റിംഗ് നൽകിയതിന് നന്ദി! (${selectedRating} ★)` : 
          `Thanks for rating! (Rated ${selectedRating} ★)`;
        ratingStatus.style.display = "block";
      });
    });

    starsContainer.addEventListener("mouseleave", () => {
      highlightStars(selectedRating);
    });

    // Close Modal Events
    const closeBtn = bookModal.querySelector(".modal-close-btn");
    const closeModal = () => {
      bookModal.classList.remove("active");
      document.body.style.overflow = "";
      // Re-render catalog grid on close if rating was updated
      if (selectedRating > 0) {
        applyFiltersAndRender();
      }
    };

    closeBtn.addEventListener("click", closeModal);
    bookModal.addEventListener("click", (e) => {
      if (e.target === bookModal) closeModal();
    });

    // Mock Ordering event
    const buyBtn = bookModal.querySelector(".buy-btn");
    buyBtn.addEventListener("click", () => {
      alert(state.lang === "ml" ? 
        `'${title}' ഓർഡർ ചെയ്യുന്നതിനായി താൽപ്പര്യമറിയിച്ചതിന് നന്ദി! ഞങ്ങൾ ഉടൻ ബന്ധപ്പെടും.` :
        `Thank you for your interest in ordering '${title}'! Our publication desk will contact you shortly.`
      );
      closeModal();
    });
  };

  // Initialize Rendering
  applyFiltersAndRender();
});
