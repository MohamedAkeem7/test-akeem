/* ========= Set Current Year ========= */
document.getElementById("year").textContent = new Date().getFullYear();

/* ========= Hamburger Menu ========= */
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});

/* ========= Sticky Navbar on Scroll ========= */
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

/* ========= Swiper: News-Swiper ========= */
var swiper = new Swiper(".News-Swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    595: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    375: {
      slidesPerView: 1,
      spaceBetween: 10,
    }
  }
});

/* ========= Swiper: mySwiper ========= */
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/* ========= Lazyload Images ========= */
let lazyImages = [].slice.call(document.querySelectorAll("img.lazyload"));
if ("IntersectionObserver" in window) {
  let lazyObserver = new IntersectionObserver(function(entries, observer){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        let img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove("lazyload");
        lazyObserver.unobserve(img);
      }
    });
  });
  lazyImages.forEach(function(img){ lazyObserver.observe(img); });
} else {
  lazyImages.forEach(function(img){
    img.src = img.dataset.src;
    img.classList.remove("lazyload");
  });
}

/* ========= Language Switcher ========= */
document.getElementById("languageSwitcher").addEventListener("change", function () {
  let lang = this.value;
  alert("Language switched to: " + lang);
});
