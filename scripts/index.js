let hamburger = document.querySelector("#hamburger");
let pageLinks = document.querySelector("#page_links");
let socialLinks = document.querySelector("#social_links");

hamburger.addEventListener("click", function () {
  pageLinks.classList.toggle("extended");
  socialLinks.classList.toggle("extended");
  hamburger.classList.toggle("clicked");
});
