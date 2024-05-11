function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  

document.addEventListener("DOMContentLoaded", function() {
  const showMoreBtn = document.getElementById("showMoreBtn");
  const moreContent = document.getElementById("moreContent");

  showMoreBtn.addEventListener("click", function() {
    console.log('bjdcjdsjhvhsjbdh')
      moreContent.classList.toggle("hidden");
      if (moreContent.classList.contains("hidden")) {
          showMoreBtn.textContent = "SHOW MORE";
      } else {
          showMoreBtn.textContent = "SHOW LESS";
      }
  });
});