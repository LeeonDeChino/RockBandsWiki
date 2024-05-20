document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector("[data-search]");
  const articlesList = document.querySelectorAll("#articles-list li");

  searchInput.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase();

    articlesList.forEach((article) => {
      const title = article.getAttribute("data-title").toLowerCase();
      if (title.includes(value)) {
        article.style.display = "block";
      } else {
        article.style.display = "none";
      }
    });
  });
});