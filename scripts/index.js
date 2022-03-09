let hamburger = document.querySelector("#hamburger");
let pageLinks = document.querySelector("#page_links");
let socialLinks = document.querySelector("#social_links");
let projectenHeaderSpan = document.querySelector("#projecten_header_span");
let overMijHeaderSpan = document.querySelector("#over_mij_header_span");
let contactHeaderSpan = document.querySelector("#contact_header_span");

hamburger.addEventListener("click", () => {
  pageLinks.classList.toggle("extended");
  socialLinks.classList.toggle("extended");
  hamburger.classList.toggle("clicked");
});

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY + window.innerHeight; // Y postion of the bottom of the screen
  if (currentScroll >= projectenHeaderSpan.offsetTop + 90) {
    projectenHeaderSpan.style.backgroundSize = "100% 0.4em";
  } else {
    projectenHeaderSpan.style.backgroundSize = "0% 0.4em";
  }
  if (currentScroll >= overMijHeaderSpan.offsetTop + 90) {
    overMijHeaderSpan.style.backgroundSize = "100% 0.4em";
  } else {
    overMijHeaderSpan.style.backgroundSize = "0% 0.4em";
  }
  if (currentScroll >= contactHeaderSpan.offsetTop + 90) {
    contactHeaderSpan.style.backgroundSize = "100% 0.4em";
  } else {
    contactHeaderSpan.style.backgroundSize = "0% 0.4em";
  }
});
