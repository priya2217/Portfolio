// Toggle sidebar contacts
const sidebarBtn = document.querySelector("[data-sidebar-btn]");
const sidebarMore = document.querySelector(".sidebar-info_more");

sidebarBtn.addEventListener("click", () => {
  sidebarMore.classList.toggle("active");
});

// Navbar navigation
const navLinks = document.querySelectorAll("[data-nav-link]");
const articles = document.querySelectorAll("article");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // Remove active from links
    navLinks.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");

    // Show corresponding article
    const pageName = link.textContent.toLowerCase();
    articles.forEach((article) => {
      if (article.dataset.page === pageName) {
        article.classList.add("active");
      } else {
        article.classList.remove("active");
      }
    });
  });
});
